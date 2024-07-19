import { IArticle } from "../../interfaces/dev-to-api/articles";
import dateConvert from "../../utils/date-convert";

function mapArticle(article: IArticle): IArticle {
    return {
        title: article.title, 
        url: article.url,
        description: article.description,
        comments_count: article.comments_count,
        published_at: dateConvert(article.published_at),
        published: article.published,
        positive_reactions_count: article.positive_reactions_count,
        public_reactions_count: article.public_reactions_count,
        reading_time_minutes: article.reading_time_minutes,
        cover_image: article.cover_image,
        tag_list: article.tag_list,
        tags: article.tags,
        user: {
             name: article.user?.name || '',
             username: article.user?.username || '',    
        }
    }
}

export {
    mapArticle,
};