import { Router } from "express";

import { pingCheck } from "../../controllers/pingController";

const v1Router: Router = Router();

v1Router.get("/ping", pingCheck);

export default v1Router;
