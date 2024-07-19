import { mapArticle } from "../../services/helpers/mappers";
import { IArticle } from "../../interfaces/dev-to-api/articles";

describe("mapArticle", () => {
  it("should map the article object correctly", () => {
    const article: IArticle = {
      title: "Test Article",
      url: "https://example.com/article",
      description: "This is a test article",
      comments_count: 10,
      published_at: "2022-01-01T00:00:00Z",
      published: true,
      positive_reactions_count: 100,
      public_reactions_count: 200,
      reading_time_minutes: 5,
      cover_image: "https://example.com/cover-image.jpg",
      tag_list: ["tag1", "tag2"],
      tags: "tag1,tag2",
      user: {
        name: "John Doe",
        username: "johndoe",
      },
    };

    const mappedArticle = mapArticle(article);

    expect(mappedArticle).toEqual({
      title: "Test Article",
      url: "https://example.com/article",
      description: "This is a test article",
      comments_count: 10,
      published_at: "31/12/2021",
      published: true,
      positive_reactions_count: 100,
      public_reactions_count: 200,
      reading_time_minutes: 5,
      cover_image: "https://example.com/cover-image.jpg",
      tag_list: ["tag1", "tag2"],
      tags: "tag1,tag2",
      user: {
        name: "John Doe",
        username: "johndoe",
      },
    });
  });

  it("should return an empty string when name e username is empty", () => {
    const article: IArticle = {
      title: "Test Article",
      url: "https://example.com/article",
      description: "This is a test article",
      comments_count: 10,
      published_at: "2022-01-01T00:00:00Z",
      published: true,
      positive_reactions_count: 100,
      public_reactions_count: 200,
      reading_time_minutes: 5,
      cover_image: "https://example.com/cover-image.jpg",
      tag_list: ["tag1", "tag2"],
      tags: "tag1,tag2",
      user: {
        name: "",
        username: "",
      },
    };

    const mappedArticle = mapArticle(article);

    expect(mappedArticle).toEqual({
      title: "Test Article",
      url: "https://example.com/article",
      description: "This is a test article",
      comments_count: 10,
      published_at: "31/12/2021",
      published: true,
      positive_reactions_count: 100,
      public_reactions_count: 200,
      reading_time_minutes: 5,
      cover_image: "https://example.com/cover-image.jpg",
      tag_list: ["tag1", "tag2"],
      tags: "tag1,tag2",
      user: {
        name: "",
        username: "",
      },
    });
  });

});