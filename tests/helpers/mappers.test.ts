import { mapArticle } from "../../services/helpers/mappers";
import { IArticle } from "../../interfaces/dev-to-api/articles";
import { mapGuides, mapCourseProgress } from "../../services/helpers/mappers";
import { ICourseProgress, IGuide } from "../../interfaces/alura-api/dashboard";

import articleList from "../mocks/helpers/articles.mock.json";
import articleListResponse from "../mocks/helpers/articles.res.mock.json";
import guideList from "../mocks/helpers/guides.mock.json";
import guideListResponse from "../mocks/helpers/guides.res.mock.json";
import courseProgressesList from "../mocks/helpers/course-progresses.mock.json";
import courseProgressListResponse from "../mocks/helpers/course-progresses.res.mock.json";

describe("mapArticle function", () => {

  it("should map the article object correctly", () => {

    const articles: Array<IArticle> = articleList;
    const mappedArticles: Array<IArticle> = mapArticle(articles);
    expect(mappedArticles).toEqual(articleListResponse);

  });

  it("should return an empty string when name e username is empty", () => {

    const mappedArticle: Array<IArticle> = mapArticle(articleList);
    expect(mappedArticle[1].published_timestamp).toBe(articleListResponse[1].published_timestamp);

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