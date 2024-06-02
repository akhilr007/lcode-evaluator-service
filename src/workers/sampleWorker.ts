import { Job, Worker } from "bullmq";

import redisConnection from "../config/redisConfig";
import SampleJob from "../jobs/sampleJob";

function sampleWorker(queueName: string) {
    const worker = new Worker(
        queueName,
        async (job: Job) => {
            if (job.name === "SampleJob") {
                const sampleJobInstance = new SampleJob(job.data);
                sampleJobInstance.handle(job);
                return true;
            }
        },
        {
            connection: redisConnection
        }
    );

    worker.on("error", (error) => {
        console.error("Worker error:", error);
    });
}

export default sampleWorker;
