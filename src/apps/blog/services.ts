import DataBase from "../../database/mdb";
import ArticleModel from "./models";

class BlogServices {
    static async getAllArticles() {
        DataBase.connect();
        const articles = await DataBase.getCollection("articles")
            .find()
            .toArray();
        DataBase.disconect();
        return articles;
    }
    static async getArticleByName(artName: string) {
        DataBase.connect();
        const article = await DataBase.getCollection("articles").findOne({
            name: artName,
        });
        DataBase.disconect();
        return article;
    }

    static async createArticle(data: ArticleModel) {
        try {
            DataBase.connect();
            const result = await DataBase.getCollection("articles").insertOne(
                data
            );
            DataBase.disconect();
            console.log(result);
            return result;
        } catch (err) {
            console.log(err);
            return err;
        }
    }
}

export default BlogServices;
