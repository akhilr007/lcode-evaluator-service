import { Router } from "express";

import { addSubmission } from "../../controllers/submissionController";
import { createSubmissionZodSchema } from "../../dtos/createSubmissionDto";
import { validate } from "../../validators/zodValidator";

const submissionRouter: Router = Router();

submissionRouter.post("/", validate(createSubmissionZodSchema), addSubmission);

export default submissionRouter;
