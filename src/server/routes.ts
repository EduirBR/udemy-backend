import express from "express";
import blogRouter from "../apps/blog/routes";

const router = express.Router();

router.use("/blog", blogRouter);

export default router;
