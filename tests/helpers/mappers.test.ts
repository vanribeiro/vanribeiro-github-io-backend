import { mapArticle, mapArticleSummary, mapStatusCode } from "../../services/helpers/mappers";
import { IArticle } from "../../interfaces/dev-to-api/articles";
import { mapGuides, mapCourseProgress } from "../../services/helpers/mappers";
import { ICourseProgress, IGuide } from "../../interfaces/alura-api/dashboard";

import { articleList, articleListResponse } from "../mocks/helpers/articles.mock";
import guideList from "../mocks/helpers/guides.mock.json";
import guideListResponse from "../mocks/helpers/guides.res.mock.json";
import courseProgressesList from "../mocks/helpers/course-progresses.mock.json";
import courseProgressListResponse from "../mocks/helpers/course-progresses.res.mock.json";

describe("mapArticle function", () => {
  
  const articles: Array<IArticle> = articleList;

  it("should map the article object correctly", () => {
  
    const mappedArticles: Array<IArticle> = mapArticle(articles);
    expect(mappedArticles).toEqual(articleListResponse);

  });

  it("should return an empty string when name e username is empty", () => {

    const mappedArticle: Array<IArticle> = mapArticle(articleList);

    expect(mappedArticle[1]).toEqual(articleListResponse[1]);
    expect(mappedArticle[1].user?.name).toBe("");
    expect(mappedArticle[1].user?.username).toBe("");
  });

});

describe("mapArticleSummary function", () => {

  const articles: Array<IArticle> = articleList;

  it("should map the article summary object correctly", () => {
      const mappedArticles: Array<IArticle> = mapArticleSummary(articles);
      expect(mappedArticles).toEqual(articleListResponse);
  });

  it("should map empty string when name e username is empty", () => {
      const mappedArticles: Array<IArticle> = mapArticleSummary(articles);

      expect(mappedArticles[1]).toEqual(articleListResponse[1]);
      expect(mappedArticles[1].user?.name).toBe("");
      expect(mappedArticles[1].user?.username).toBe("");
  });

});

describe("mapGuides function", () => {

  it("should map guide object correctly", () => {
    const guides: Array<IGuide> = guideList?.guides as Array<IGuide>;
    const mappedGuide = mapGuides(guides);
    expect(mappedGuide).toEqual(guideListResponse?.guides);
  });

});

describe("mapCourseProgress function", () => {
  it("should map the course progress object correctly", () => {

    const courseProgresses: Array<ICourseProgress> = courseProgressesList?.courseProgresses;
    const mappedCourseProgress = mapCourseProgress(courseProgresses);
    expect(mappedCourseProgress).toEqual(courseProgressListResponse?.courseProgresses);

  });
});

describe("mapStatusCode function", () => {
  it("should return the status message for a valid status code", () => {
    const statusCode = 200;
    const statusMessage = "OK";
    const mappedStatusMessage = mapStatusCode(statusCode, statusMessage);
    expect(mappedStatusMessage).toBe("OK");
  });

  it("should return the statusMessage arg when the status code is not in statusCodeMessage objetc", () => {
    const statusCode = 1000;
    const statusMessage = "Not Found 1000";
    const mappedStatusMessage = mapStatusCode(statusCode, statusMessage);
    expect(mappedStatusMessage).toBe(statusMessage);
  });
});