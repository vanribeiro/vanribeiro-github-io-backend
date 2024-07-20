import { server } from "../mocks/msw-server/node";
import { fetchData } from "./../../services/fetch";
import { IArticles } from "../../interfaces/dev-to-api/articles";
import { IResponseData } from "../../interfaces/response";
import articlesSummary from "../mocks/dev-to/articles.summary.mock.json";

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

    it("should return valid data", async () => {
        const actualOutput: IArticles = await fetchData({ url: `https://example.com/api` }).then((data) => data);
        const responseData: IResponseData = articlesSummary;
        expect(actualOutput.data.title).toEqual(responseData.data.title);   
    });

    it.todo("fetchData should return 200 when token is set");

    it.todo("fetchData should return 401 when token is not set");

    it.todo("fetchData should return 200 when initOptions is set");

});
