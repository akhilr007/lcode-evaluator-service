import { Job } from "bullmq";

import { IBullMQJob } from "../interfaces/IBullMqJob";

class SampleJob implements IBullMQJob {
    name: string;
    payload: Record<string, unknown>;
    constructor(payload: Record<string, unknown>) {
        this.payload = payload;
        this.name = this.constructor.name;
    }

    handle = () => {
        console.log("Handler of the job called");
    };

    failed = (job?: Job) => {
        console.log("Job Failed", job?.id);
    };
}

export default SampleJob;
