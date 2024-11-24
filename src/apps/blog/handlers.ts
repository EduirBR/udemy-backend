import { Request, Response } from "express";
import ApiResponse from "../../tools/responses";
import BlogServices from "./services";

async function getArticles(_: Request, res: Response) {
    const articles = await BlogServices.getAllArticles();
    ApiResponse.resOK(res, "Get Articles", articles);
}
async function getArticlebyName(req: Request<{ name: string }>, res: Response) {
    const name = req.params.name;
    const article = await BlogServices.getArticleByName(name);
    if (!article) {
        ApiResponse.resNotFound(res, "Article not found");
        return;
    }
    ApiResponse.resOK(res, "Get Articles", article);
}
async function postArticle(req: Request, res: Response) {
    const { name, title, thumbnail, content } = req.body;
    const article = await BlogServices.createArticle({
        name,
        title,
        thumbnail,
        content,
    });

    ApiResponse.created(res, "Article Registered", article);
}
function patchArticles(_: Request, res: Response) {
    res.send("patch Article");
}
function putArticles(_: Request, res: Response) {
    res.send("Put Article");
}

export {
    getArticles,
    getArticlebyName,
    postArticle,
    patchArticles,
    putArticles,
};
