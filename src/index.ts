import express from "express";

import logger from "./config/loggerConfig";
import serverConfig from "./config/serverConfig";
import addJobs from "./producers/sampleQueueProducer";
import apiRouter from "./routes";
import sampleWorker from "./workers/sampleWorker";

const app = express();
const PORT = serverConfig.PORT;

app.use("/api", apiRouter);

app.listen(PORT, () => {
    logger.info(`Server started on Port: ${PORT}`);

    sampleWorker("SampleQueue");

    addJobs("SampleJob", {
        name: "akhil",
        company: "mmc",
        position: "dev"
    });

    addJobs("SampleJob", {
        name: "atul",
        company: "gm",
        position: "data analyst"
    });
});
