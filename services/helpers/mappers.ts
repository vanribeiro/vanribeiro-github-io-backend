import { ICourseProgress, IGuide } from "../../interfaces/alura-dashboard";
import { IArticle } from "../../interfaces/dev-to-api/articles";
import dateConvert from "../../utils/date-convert";

function mapArticle(articles: Array<IArticle>): Array<IArticle> {
    return articles?.map((article: IArticle) =>({
        ...article,
        published_at: dateConvert(article.published_at),
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

export {
    mapArticle,
    mapGuides,
    mapCourseProgress
};