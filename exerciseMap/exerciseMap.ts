import { detectSquat } from '../detectors/squat';

export const exerciseMap: Record<string,Function> = {
    squat : detectSquat,
};