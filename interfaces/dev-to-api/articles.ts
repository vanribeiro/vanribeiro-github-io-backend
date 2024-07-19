import { TypeOfPublishing } from "../../types/dev-to-api";
import { IUser } from "./users";

interface IArticle {
    type_of?: TypeOfPublishing;
    id?: number;
    title: string;
    description: string;
    published: boolean;
    published_at: string;
    slug?: string;
    path?: string;
    url?: string;
    comments_count?: number;
    public_reactions_count: number;
    page_views_count?: number;
    published_timestamp?: string;
    body_markdown?: string;
    positive_reactions_count?: number;
    cover_image?: string;
    tag_list?: Array<string>;
    tags?: string;
    canonical_url?: string;
    reading_time_minutes?: number;
    user?:  IUser;
}

interface IArticles{
    [x: string]: any;
    articles: Array<IArticle>;
}

export { IArticle, IArticles };