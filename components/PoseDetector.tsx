import "@mediapipe/pose";
import * as poseDetection from "@tensorflow-models/pose-detection";
import * as tf from "@tensorflow/tfjs";
import React, { useEffect, useRef } from "react";
import { View } from "react-native";

// Define skeleton connections: pairs of keypoint indices
const SKELETON_CONNECTIONS: [number, number][] = [
  [0, 1],   // nose → left eye
  [0, 2],   // nose → right eye
  [1, 3],   // left eye → left ear
  [2, 4],   // right eye → right ear
  [0, 5],   // nose → left shoulder
  [0, 6],   // nose → right shoulder
  [5, 7],   // left shoulder → left elbow
  [7, 9],   // left elbow → left wrist
  [6, 8],   // right shoulder → right elbow
  [8, 10],  // right elbow → right wrist
  [5, 6],   // left shoulder → right shoulder
  [5, 11],  // left shoulder → left hip
  [6, 12],  // right shoulder → right hip
  [11, 12], // left hip → right hip
  [11, 13], // left hip → left knee
  [13, 15], // left knee → left ankle
  [12, 14], // right hip → right knee
  [14, 16], // right knee → right ankle
];

const PoseDetector: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let animationFrameId: number;

    const runMoveNet = async () => {
      await tf.setBackend("webgl");
      await tf.ready();

      // Create MoveNet detector
      const detector = await poseDetection.createDetector(
        poseDetection.SupportedModels.MoveNet,
        {
          modelType: poseDetection.movenet.modelType.SINGLEPOSE_LIGHTNING,
        }
      );

      // Start webcam
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }

      // Start detection loop
      const detect = async () => {
        if (videoRef.current && canvasRef.current) {
          const poses = await detector.estimatePoses(videoRef.current);

          const ctx = canvasRef.current.getContext("2d");
          if (!ctx) return;

          // Draw the video frame first
          ctx.drawImage(
            videoRef.current,
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height
          );

          // Draw keypoints on top
          if (poses.length > 0) {
            drawKeypoints(poses[0].keypoints, ctx);
            drawSkeleton(poses[0].keypoints, ctx); // draw skeleton lines
        }
        }

        animationFrameId = requestAnimationFrame(detect);
      };

      detect();
    };

    const drawKeypoints = (
      keypoints: poseDetection.Keypoint[],
      ctx: CanvasRenderingContext2D
    ) => {
      keypoints.forEach((keypoint) => {
        if (keypoint.score && keypoint.score > 0.4) {
          const { x, y } = keypoint;
          ctx.beginPath();
          ctx.arc(x, y, 5, 0, 2 * Math.PI);
          ctx.fillStyle = "red";
          ctx.fill();
        }
      });
    };

     const drawSkeleton = (keypoints: poseDetection.Keypoint[], ctx: CanvasRenderingContext2D) => {
      SKELETON_CONNECTIONS.forEach(([i, j]) => {
        const kp1 = keypoints[i];
        const kp2 = keypoints[j];
        if (kp1.score && kp2.score && kp1.score > 0.4 && kp2.score > 0.4) {
          ctx.beginPath();
          ctx.moveTo(kp1.x, kp1.y);
          ctx.lineTo(kp2.x, kp2.y);
          ctx.strokeStyle = "lime";
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      });
    };

    runMoveNet();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (videoRef.current && videoRef.current.srcObject) {
        (videoRef.current.srcObject as MediaStream)
          .getTracks()
          .forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* Hidden video element */}
      <video
        ref={videoRef}
        width={640}
        height={480}
        style={{ display: "none" }}
      />
      {/* Canvas for drawing video + keypoints + skeleton */}
      <canvas
        ref={canvasRef}
        width={640}
        height={480}
        style={{ borderWidth: 1, borderColor: "black" }}
      />
    </View>
  );
};

export default PoseDetector;
