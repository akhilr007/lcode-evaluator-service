import { Job } from "bullmq";

import logger from "../config/loggerConfig";
import { IBullMQJob } from "../interfaces/IBullMqJob";

class SampleJob implements IBullMQJob {
    name: string;
    payload: Record<string, unknown>;

    constructor(payload: Record<string, unknown>) {
        this.payload = payload;
        this.name = this.constructor.name;
    }

    handle = (job?: Job) => {
        logger.info("Handler of the job called");
        logger.info(this.payload);

        if (job) {
            logger.info(job.name, job.id, job.data);
        }
    };

    failed = (job?: Job) => {
        logger.error("Job Failed", job?.id);
    };
}

export default SampleJob;
