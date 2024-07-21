type TypeOfPublishing = 
                        "articles" | 
                        "profile_image" | 
                        "podcast_episodes" | 
                        "organization" | 
                        "user_follower" | 
                        "comment";

type DevToEndpoints = {
    articles: {
        PUBLISHED: string;
        UNPUBLISHED: string;
        ALL: string;
    }
}

type DevToService = {
    URL_BASE: string;
    endpoint: DevToEndpoints;
    initOptions: RequestInit;
    tokenDevTo: string | undefined;
}

export {
    TypeOfPublishing,
    DevToService,
    DevToEndpoints
}