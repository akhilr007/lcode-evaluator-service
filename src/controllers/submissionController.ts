import { Request, Response } from "express";

import logger from "../config/loggerConfig";
import { createSubmissionDto } from "../dtos/createSubmissionDto";

export function addSubmission(req: Request, res: Response) {
    const submissionDto = req.body as createSubmissionDto;
    logger.info(submissionDto);

    return res.status(201).json({
        success: true,
        message: "Successfully collected the submission",
        error: {},
        data: submissionDto
    });
}
