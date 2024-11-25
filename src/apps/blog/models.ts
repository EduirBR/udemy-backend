interface ArticleModel {
    name: string;
    title: string;
    thumbnail: string;
    content: string[];
}

interface CommentsModel {
    username: string;
    text: string;
}
export { CommentsModel };
export default ArticleModel;
