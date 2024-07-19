import { server } from "../tests/mocks/services/node";
import { fetchData } from "./fetch";
import articlesSummary from "../tests/mocks/articles-summary";
import { IArticles } from "../interfaces/dev-to-api/articles";
import { IResponseData } from "../interfaces/response";

beforeEach(() => {
    server.listen();
});

afterEach(() => {
    server.resetHandlers();
});

afterAll(() => {
    server.close();
});

describe("fetchData function", () => {

    it("fetchData should return valid data", async () => {
        const actualOutput: IArticles = await fetchData({ url: `https://example.com/api` }).then((data) => data);
        const responseData: IResponseData = articlesSummary;
        expect(actualOutput.data.title).toEqual(responseData.data.title);   
    });

});
