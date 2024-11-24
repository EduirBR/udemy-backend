import { Collection, Document, MongoClient } from "mongodb";

class DataBase {
    static dbClient = new MongoClient(
        "mongodb://example:example@127.0.0.1:18117"
    );
    private static isConnected: boolean = false;
    static async connect() {
        try {
            await this.dbClient.connect();
            this.isConnected = true;
            console.log("good connection");
        } catch (err) {
            console.log("Error connecting ", err);
        }
    }

    static async disconect() {
        if (this.isConnected) {
            try {
                await this.dbClient.close();
                this.isConnected = false;
            } catch (err) {
                console.log(err, " at db discconect");
            }
        }
    }

    static getCollection(collectionName: string): Collection<Document> {
        return this.dbClient.db("mernblog").collection(collectionName);
    }
}

export default DataBase;
