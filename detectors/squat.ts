// detectors/squat.ts
import * as poseDetection from "@tensorflow-models/pose-detection";

// State variables for squat tracking
let squatCount = 0;
let stage: "up" | "down" = "up";
let feedback = "Get Ready";

// Main function called by PoseDetector
export function detectSquat(
  keypoints: poseDetection.Keypoint[],
  ctx: CanvasRenderingContext2D
) {
  const leftHip = keypoints[11];
  const leftKnee = keypoints[13];
  const leftAnkle = keypoints[15];

  if (!leftHip || !leftKnee || !leftAnkle) return;

  if (
    leftHip.score! > 0.3 &&
    leftKnee.score! > 0.3 &&
    leftAnkle.score! > 0.3
  ) {
    const kneeAngle = calculateAngle(leftHip, leftKnee, leftAnkle);
    const DOWN_ANGLE = 100;
    const UP_ANGLE = 160;

    // DOWN POSITION
    if (kneeAngle < DOWN_ANGLE && stage === "up") {
      stage = "down";
      feedback = "Good! Now stand up";
    }

    // UP POSITION → COUNT REP
    if (kneeAngle > UP_ANGLE && stage === "down") {
      stage = "up";
      squatCount++;
      feedback = "✅ Good Rep!";
    }

    // BAD FORM
    if (kneeAngle > 100 && stage === "down") {
      feedback = "⬇️ Go Lower";
    }
    if (leftKnee.x < leftAnkle.x) {
      feedback = "⬅️ Push Knees Out";
    }

    // Draw knee angle
    ctx.fillStyle = "yellow";
    ctx.font = "16px Arial";
    ctx.fillText(`${Math.round(kneeAngle)}°`, leftKnee.x + 10, leftKnee.y);

    console.log("Knee Angle:", Math.round(kneeAngle), "Stage:", stage);

  }

  // Draw rep counter + feedback
  ctx.fillStyle = "cyan";
  ctx.font = "26px Arial";
  ctx.fillText(`Squats: ${squatCount}`, 20, 40);

  ctx.fillStyle = "lime";
  ctx.font = "20px Arial";
  ctx.fillText(feedback, 20, 80);

  console.log("LeftHip:", leftHip, "LeftKnee:", leftKnee, "LeftAnkle:", leftAnkle);
  

}

// Helper: calculates angle at point B
function calculateAngle(
  a: poseDetection.Keypoint,
  b: poseDetection.Keypoint,
  c: poseDetection.Keypoint
) {
  const radians =
    Math.atan2(c.y - b.y, c.x - b.x) -
    Math.atan2(a.y - b.y, a.x - b.x);

  let angle = Math.abs((radians * 180) / Math.PI);
  if (angle > 180) angle = 360 - angle;
  return angle;
}
