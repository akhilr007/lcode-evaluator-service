import express from "express";

import serverConfig from "./config/serverConfig";
import apiRouter from "./routes";

const app = express();
const PORT = serverConfig.PORT;

app.use("/api", apiRouter);

app.listen(PORT, () => {
    console.log(`Server started on Port: ${PORT}`);
});
