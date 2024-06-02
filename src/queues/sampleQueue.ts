import { Queue } from "bullmq";

import redisConnection from "../config/redisConfig";

const sampleQueue = new Queue("SampleQueue", { connection: redisConnection });

sampleQueue.on("error", (error) => {
    console.log("Queue error", error);
});

export default sampleQueue;
