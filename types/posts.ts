export interface Post {
    id: string;
    title: string;
    body: string;
    author: string;
    data: string;
    comments: PostComment[];
}

export interface PostComment {
    id: string;
    text: string;
    username: string;
}