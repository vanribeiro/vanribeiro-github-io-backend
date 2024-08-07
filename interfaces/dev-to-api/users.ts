/**
 * Represents a user.
 * @interface IUser
 */
interface IUser {
    name: string;
    username: string;
    twitter_username?: string;
    github_username?: string;
    user_id?: number;
    website_url?: string;
    profile_image?: string;
    profile_image_90?: string;
}

export {
    IUser
}