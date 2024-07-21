type Kind = 'CAREER' | 'DEGREE' | 'STUDY_PLAN' | 'COMPANY_GUIDE' | 'USER_GUIDE';

type AluraDashboardService = {
    URL_BASE: string;
    TOKEN_API: string | undefined;
    initOptions: RequestInit;
}

export {
    Kind,
    AluraDashboardService,
}