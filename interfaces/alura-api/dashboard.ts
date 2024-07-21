import { Kind } from "../../types/alura-dashboard";

interface ICourseProgress {
    slug: string;
    finished: boolean;
    name: string;
    lastAccessTime: number | string;
    id: number;
    progress: number;
    readyToFinish: boolean;
}

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

interface IAluraDashboard  {
    courseProgresses: Array<ICourseProgress>;
    guides: Array<IGuide>;
}

export {
    IAluraDashboard,
    ICourseProgress,
    IGuide,
}