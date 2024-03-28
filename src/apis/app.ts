import express, {Application, Request, Response } from "express";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import Database from "../db/init.mongodb";

import router from "./routers";
const app: Application = express();
// Init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
// Init db
Database;
// Init router
// app.get('/', (req: Request, res: Response) => {
//     res.status(200).json({
//         message: "Hello world"
//     });
// });

app.use('/', router);
// handling error

export default app;

