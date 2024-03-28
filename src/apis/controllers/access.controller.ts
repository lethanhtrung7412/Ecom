import { Request, Response, NextFunction } from "express";

class AccessController {

    signUp = async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log(`signUp::`, req.body);
            return res.status(200).json({
                code: "20001",
                metadata: {
                    userId: 1,
                }
            })
        } catch (error) {
            next(error);
        }
    }
}

export default new AccessController();