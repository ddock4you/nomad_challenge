import express from "express";
import {
    documentation,
    buy,
    refund,
    remove,
    edit,
} from "../controllers/apiControllers";

export const apiRouter = express();

apiRouter.get("/documentation", documentation);
apiRouter.get("/buy", buy);
apiRouter.get("/refund", refund);
apiRouter.get("/remove", remove);
apiRouter.get("/edit", edit);
