import express,{ Response, Request, NextFunction } from "express";
import accessRouter from "./access";
const router = express.Router();

router.use("/v1/api", accessRouter);

router.get("/", (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({
        message: "Welcome to router"
    })
})

export default router;