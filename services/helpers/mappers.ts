import { ICourseProgress, IGuide } from "../../interfaces/alura-api/dashboard";
import { IArticle } from "../../interfaces/dev-to-api/articles";
import dateConvert from "../../utils/date-convert";
import { statusCodeMessage } from "../status-code";

function mapArticle(articles: Array<IArticle>): Array<IArticle> {
    return articles?.map((article: IArticle) =>({
        ...article,
        published_timestamp: dateConvert(article.published_timestamp),
        published_at: dateConvert(article.published_at),
        user: {
            name: article.user?.name || '',
            username: article.user?.username || '',    
       },
    }));
}

function mapArticleSummary(articles: Array<IArticle>): Array<IArticle> {
    return articles?.map((article: IArticle) =>({
        title: article.title,
        description: article.description,
        published: article.published,
        url: article.url,
        comments_count: article.comments_count,
        public_reactions_count: article.public_reactions_count,
        published_at: dateConvert(article.published_at),
        published_timestamp: dateConvert(article.published_timestamp),
        positive_reactions_count: article.positive_reactions_count,
        cover_image: article.cover_image,
        tags: article.tags,
        tag_list: article.tag_list,
        reading_time_minutes: article.reading_time_minutes,
        user: {
            name: article.user?.name || '',
            username: article.user?.username || '',    
       },
    }));
}

function mapGuides(guides: Array<IGuide>): Array<IGuide> {
    return guides?.map((guide: IGuide) => 
        ({
            ...guide,
            lastAccessTime: dateConvert(guide.lastAccessTime),
        })
    );
}

function mapCourseProgress(courseProgresses: Array<ICourseProgress>): Array<ICourseProgress> {
    return courseProgresses?.map((courseProgress: ICourseProgress) => 
        ({
            ...courseProgress,
            lastAccessTime: dateConvert(courseProgress.lastAccessTime),
        })
    );
}

function mapStatusCode(statusCode: number, statusMessage: string): string {
    return statusCodeMessage[statusCode] 
            ? statusCodeMessage[statusCode] 
            : statusMessage;
}

export {
    mapArticle,
    mapArticleSummary,
    mapGuides,
    mapCourseProgress,
    mapStatusCode
};