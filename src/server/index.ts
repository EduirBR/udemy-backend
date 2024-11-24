import express, { Express } from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./routes";
import DataBase from "../database/mdb";
class Server {
    app: Express;
    port: number;

    constructor() {
        this.app = express();
        this.port = 8891;
        this.initDb();
        this.middlewares();
        this.routes();
    }

    async initDb() {
        await DataBase.connect();
        DataBase.disconect();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(morgan("dev"));
        this.app.use(express.json());
    }
    routes() {
        this.app.get("/ping", (_, res) => {
            console.log("ping ok " + new Date().toLocaleDateString());
            res.send("pong");
        });
        this.app.use("/api", router);
    }
    runserver() {
        this.app.listen(this.port, () => {
            console.log(`Server running at http://127.0.0.1:${this.port}`);
        });
    }
}

export default Server;
