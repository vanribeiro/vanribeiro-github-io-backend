interface IRequestData{
    url: string;
    method?: 'GET';
    token?: string;
    initOptions?: RequestInit;
};

export {
    IRequestData
}