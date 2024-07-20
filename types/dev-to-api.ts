type TypeOfPublishing = 
                        "articles" | 
                        "profile_image" | 
                        "podcast_episodes" | 
                        "organization" | 
                        "user_follower" | 
                        "comment";

type ArticlesEndpoint = {
    PUBLISHED: string;
}

export {
    TypeOfPublishing,
    ArticlesEndpoint,
}