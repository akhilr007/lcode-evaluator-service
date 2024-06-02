import { Job } from "bullmq";

import { IBullMQJob } from "../interfaces/IBullMqJob";

class SampleJob implements IBullMQJob {
    name: string;
    payload: Record<string, unknown>;

    constructor(payload: Record<string, unknown>) {
        this.payload = payload;
        this.name = this.constructor.name;
    }

    handle = (job?: Job) => {
        console.log("Handler of the job called");
        console.log(this.payload);

        if (job) {
            console.log(job.name, job.id, job.data);
        }
    };

    failed = (job?: Job) => {
        console.log("Job Failed", job?.id);
    };
}

export default SampleJob;
