import sampleQueue from "../queues/sampleQueue";

async function addJobs(name: string, payload: Record<string, unknown>) {
    try {
        await sampleQueue.add(name, payload);
        console.log(`Job added to queue: ${name}`);
    } catch (error) {
        console.log(`Failed to add job: ${name}`, error);
    }
}

export default addJobs;
