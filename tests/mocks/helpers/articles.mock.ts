import { IArticle } from "../../../interfaces/dev-to-api/articles";

const articleList: Array<IArticle> = [
    {
        "title": "Test Article",
        "url": "https://example.com/article",
        "description": "This is a test article",
        "comments_count": 10,
        "published_at": "2023-04-14T14:45:33Z",
        "published_timestamp": "2023-04-14T14:45:33Z",
        "published": true,
        "positive_reactions_count": 100,
        "public_reactions_count": 200,
        "reading_time_minutes": 5,
        "cover_image": "https://example.com/cover-image.jpg",
        "tag_list": [
            "tag1",
            "tag2"
        ],
        "tags": "tag1,tag2",
        "user": {
            "name": "John Doe",
            "username": "johndoe"
        }
    },
    {
        "title": "Test Article",
        "url": "https://example.com/article",
        "description": "This is a test article",
        "comments_count": 10,
        "published": true,
        "positive_reactions_count": 100,
        "public_reactions_count": 200,
        "reading_time_minutes": 5,
        "published_at": "2023-04-14T14:45:33Z",
        "published_timestamp": "2023-04-14T14:45:33Z",
        "cover_image": "https://example.com/cover-image.jpg",
        "tag_list": [
            "tag1",
            "tag2"
        ],
        "tags": "tag1,tag2",
        "user": {
            "name": "",
            "username": ""
        }
    }
];

const articleListResponse: Array<IArticle> = [
    {
        "title": "Test Article",
        "url": "https://example.com/article",
        "description": "This is a test article",
        "comments_count": 10,
        "published_at": "14/04/2023",
        "published_timestamp": "14/04/2023",
        "published": true,
        "positive_reactions_count": 100,
        "public_reactions_count": 200,
        "reading_time_minutes": 5,
        "cover_image": "https://example.com/cover-image.jpg",
        "tag_list": [
            "tag1",
            "tag2"
        ],
        "tags": "tag1,tag2",
        "user": {
            "name": "John Doe",
            "username": "johndoe"
        }
    },
    {
        "title": "Test Article",
        "url": "https://example.com/article",
        "description": "This is a test article",
        "comments_count": 10,
        "published_at": "14/04/2023",
        "published_timestamp": "14/04/2023",
        "published": true,
        "positive_reactions_count": 100,
        "public_reactions_count": 200,
        "reading_time_minutes": 5,
        "cover_image": "https://example.com/cover-image.jpg",
        "tag_list": [
            "tag1",
            "tag2"
        ],
        "tags": "tag1,tag2",
        "user": {
            "name": "",
            "username": ""
        }
    }
];

export { articleList, articleListResponse };