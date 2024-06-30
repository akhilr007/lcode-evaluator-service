import express from "express";

import bullBoardAdapter from "./config/bullBoardConfig";
import logger from "./config/loggerConfig";
import serverConfig from "./config/serverConfig";
import apiRouter from "./routes";

const app = express();
const PORT = serverConfig.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

app.use("/api", apiRouter);
app.use("/ui", bullBoardAdapter.getRouter());

app.listen(PORT, () => {
    logger.info(`Server started on Port: ${PORT}`);
    logger.info(`BullBoard dashboard running on: http://localhost:${PORT}/ui`);
});
