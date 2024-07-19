import { Kind } from "../types/alura-dashboard";

interface ICourseProgresses {
    slug: string;
    finished: boolean;
    name: string;
    lastAccessTime: number;
    id: number;
    progress: number;
    readyToFinish: boolean;
}

interface IGuide {
    id: number;
    code: string;
    name: string;
    url: string;
    lastAccessTime: number;
    kind: Kind;
    totalCourses: number;
    finishedCourses: number;
    totalSteps: number;
    finishedSteps: number;
    color: string;
    author: string;
}

interface IAluraDashboard {
    courseProgresses: Array<ICourseProgresses>;
    guides: Array<IGuide>;
}

export {
    IAluraDashboard,
    ICourseProgresses,
    IGuide,
}