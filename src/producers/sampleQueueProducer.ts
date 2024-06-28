import logger from "../config/loggerConfig";
import sampleQueue from "../queues/sampleQueue";

async function addJobs(name: string, payload: Record<string, unknown>) {
    try {
        await sampleQueue.add(name, payload);
        logger.info(`Job added to queue: ${name}`);
    } catch (error) {
        logger.error(`Failed to add job: ${name}`, error);
    }
}

export default addJobs;
