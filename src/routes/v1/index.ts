import { Router } from "express";

import { pingCheck } from "../../controllers/pingController";
import submissionRouter from "./submissionRoute";

const v1Router: Router = Router();

v1Router.use("/submissions", submissionRouter);

v1Router.get("/ping", pingCheck);

export default v1Router;
