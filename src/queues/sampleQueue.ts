import { Queue } from "bullmq";

import logger from "../config/loggerConfig";
import redisConnection from "../config/redisConfig";

const sampleQueue = new Queue("SampleQueue", { connection: redisConnection });

sampleQueue.on("error", (error) => {
    logger.error("Queue error", error);
});

export default sampleQueue;
