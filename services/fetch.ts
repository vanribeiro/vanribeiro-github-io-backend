import { IRequestData } from "../interfaces/request";

async function fetchData ({
    url,
    token,
    initOptions 
}: IRequestData): Promise<any> {
    const source = token? `${url}${token}` : url;
    const response = await fetch(source, initOptions ? initOptions : {});
    const result = await response.json();
    return result;
}

export { fetchData };