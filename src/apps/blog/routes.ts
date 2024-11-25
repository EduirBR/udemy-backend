import express from "express";
import * as handler from "./handlers";
const blogRouter = express.Router();

blogRouter.get("/", handler.getArticles);
blogRouter.get("/:name", handler.getArticlebyName);
blogRouter.post("/:name/add-comments", handler.addCommentToArticle);

export default blogRouter;
