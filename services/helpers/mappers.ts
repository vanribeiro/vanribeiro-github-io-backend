import { ICourseProgress, IGuide } from "../../interfaces/alura-api/dashboard";
import { IArticle } from "../../interfaces/dev-to-api/articles";
import dateConvert from "../../utils/date-convert";
import { statusCodeMessage } from "../status-code";

/**
 * Maps an array of articles and converts the published timestamps and published dates to a different format.
 * Also, sets default values for user's name and username if they are not provided.
 * 
 * @param articles - The array of articles to be mapped.
 * @returns The mapped array of articles.
 */
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

/**
 * Maps an array of articles to a new array of articles with a modified structure and less items
 * 
 * @param articles - The array of articles to be mapped.
 * @returns The mapped array of articles.
 */
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

/**
 * Maps an array of guides and converts the last access time to a different format.
 * 
 * @param guides - The array of guides to be mapped.
 * @returns The mapped array of guides with the last access time converted.
 */
function mapGuides(guides: Array<IGuide>): Array<IGuide> {
    return guides?.map((guide: IGuide) => 
        ({
            ...guide,
            lastAccessTime: dateConvert(guide.lastAccessTime),
        })
    );
}

/**
 * Maps an array of course progresses and converts the last access time to a different format.
 * @param courseProgresses - The array of course progresses to be mapped.
 * @returns The mapped array of course progresses with the last access time converted.
 */
function mapCourseProgress(courseProgresses: Array<ICourseProgress>): Array<ICourseProgress> {
    return courseProgresses?.map((courseProgress: ICourseProgress) => 
        ({
            ...courseProgress,
            lastAccessTime: dateConvert(courseProgress.lastAccessTime),
        })
    );
}

/**
 * Maps the status code to a corresponding status message.
 * If the status code is not found in the mapping, the provided status message is returned.
 * 
 * @param {number} statusCode - The status code to be mapped.
 * @param {string} statusMessage - The default status message to be returned if the status code is not found.
 * @returns {string} - The mapped status message.
 */
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