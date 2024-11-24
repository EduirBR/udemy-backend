import express from "express";
import * as handler from "./handlers";
const blogRouter = express.Router();

blogRouter.get("/", handler.getArticles);
blogRouter.get("/:name", handler.getArticlebyName);
blogRouter.post("/", handler.postArticle);
blogRouter.patch("/:id", handler.patchArticles);
blogRouter.put("/:id", handler.putArticles);

export default blogRouter;
