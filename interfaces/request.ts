interface IRequestData{
    url: string;
    method?: 'GET';
    token?: string;
    initOptions?: RequestInit;
};

interface IStatusCodeMessage{
    [code: number]: string;
}

export {
    IRequestData,
    IStatusCodeMessage
}