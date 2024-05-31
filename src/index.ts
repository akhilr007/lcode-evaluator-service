import express from "express";

import serverConfig from "./config/serverConfig";

const app = express();
const PORT = serverConfig.PORT;

app.listen(PORT, () => {
    console.log(`Server started on Port: ${PORT}`);
});
