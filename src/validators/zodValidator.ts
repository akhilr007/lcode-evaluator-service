import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";

import logger from "../config/loggerConfig";

export const validate =
    (schema: ZodSchema<any>) =>
        (req: Request, res: Response, next: NextFunction) => {
            try {
                schema.parse({
                    ...req.body
                });

                next();
            } catch (error) {
                logger.error(error);
                return res.status(400).json({
                    success: false,
                    message: "Invalid request params received",
                    data: {},
                    error: error
                });
            }
        };
