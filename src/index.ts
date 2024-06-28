import express from "express";

import bullBoardAdapter from "./config/bullBoardConfig";
import logger from "./config/loggerConfig";
import serverConfig from "./config/serverConfig";
import addJobs from "./producers/sampleQueueProducer";
import apiRouter from "./routes";
import sampleWorker from "./workers/sampleWorker";

const app = express();
const PORT = serverConfig.PORT;

app.use("/api", apiRouter);
app.use("/ui", bullBoardAdapter.getRouter());

app.listen(PORT, () => {
    logger.info(`Server started on Port: ${PORT}`);
    logger.info(`BullBoard dashboard running on: http://localhost:${PORT}/ui`);

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
