import mongoose from "mongoose";

import { countConnect } from "../helpers/check.connect";
import config from "../configs/config.mongodb";
const connectString = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`

class Database {
    static instance: any;
    static Database: Database;
    constructor() {
        this.connect();
    }
    async connect(type="mongodb") {
        try {
            if (1 === 1) {
                mongoose.set("debug", true);
                mongoose.set("debug", {color: true});
            }
            console.log(connectString);
            await mongoose.connect(connectString);
            console.log("Connect MongoDB success", countConnect());
        } catch (e) {
            console.log("Error connect");
        }
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database()
        }

        return Database.instance
    }

}

export default Database.getInstance();
