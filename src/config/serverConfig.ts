import dotenv from "dotenv";

dotenv.config();

export default {
    PORT: process.env.PORT || 8001,
    REDIS_HOST: process.env.REDIS_HOST || "localhost",
    REDIS_PORT: process.env.REDIS_PORT
        ? parseInt(process.env.REDIS_PORT, 10)
        : 6379
};
