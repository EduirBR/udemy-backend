import DataBase from "../../database/mdb";
import ArticleModel, { CommentsModel } from "./models";

async function getAllArticles() {
    DataBase.connect();
    const articles = await DataBase.getCollection("articles").find().toArray();
    DataBase.disconect();
    return articles;
}
async function getArticleByName(artName: string) {
    DataBase.connect();
    const article = await DataBase.getCollection("articles").findOne({
        name: artName,
    });
    DataBase.disconect();
    return article;
}

async function createArticle(data: ArticleModel) {
    try {
        DataBase.connect();
        const result = await DataBase.getCollection("articles").insertOne(data);
        DataBase.disconect();
        console.log(result);
        return result;
    } catch (err) {
        console.log(err);
        return err;
    }
}

async function addCommentToArticle(artName: string, data: CommentsModel) {
    try {
        DataBase.connect();
        const Collection = await DataBase.getCollection("articles");
        let art = await Collection.findOne({ name: artName });
        if (!art) {
            return {
                err: true,
                data: "not found",
            };
        }
        await Collection.updateOne(
            { name: artName },
            {
                $set: {
                    comments: art.comments.concat(data),
                },
            }
        );
        art = await Collection.findOne({ name: artName });
        DataBase.disconect();
        return {
            err: false,
            data: art,
        };
    } catch (err) {
        console.log(err);
        return {
            err: true,
            data: err,
        };
    }
}

export { getAllArticles, createArticle, getArticleByName, addCommentToArticle };
