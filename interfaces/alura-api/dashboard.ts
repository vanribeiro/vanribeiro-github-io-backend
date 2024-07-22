import { Kind } from "../../types/alura-dashboard";

/**
 * Represents the progress of a course.
 * @interface ICourseProgress
 */
interface ICourseProgress {
    slug: string;
    finished: boolean;
    name: string;
    lastAccessTime: number | string;
    id: number;
    progress: number;
    readyToFinish: boolean;
}

/**
 * Represents a guide in the Alura API.
 * @interface IGuide
 */
interface IGuide {
    id: number;
    code: string;
    name: string;
    url: string;
    lastAccessTime: number | string;
    kind: Kind;
    totalCourses: number;
    finishedCourses: number;
    totalSteps: number;
    finishedSteps: number;
    color: string;
    author: string;
}

/**
 * Represents the Alura dashboard.
 * @interface IAluraDashboard
 */
interface IAluraDashboard  {
    courseProgresses: Array<ICourseProgress>;
    guides: Array<IGuide>;
}

export {
    IAluraDashboard,
    ICourseProgress,
    IGuide,
}