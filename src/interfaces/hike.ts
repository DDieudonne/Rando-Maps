import { position } from "./position";

export interface Hike {
    id: number;
    name: string;
    region: string;
    area: string;
    startingPoint: string;
    position: position;
    distance: number;
    distanceUnit: string;
    duration: number;
    durationUnit: string;
    heightDifference?: number;
    heightDifferenceUnit?: string;
    description: string;
}