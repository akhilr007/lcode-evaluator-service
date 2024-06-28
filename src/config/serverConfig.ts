import dotenv from "dotenv";

dotenv.config();

export default {
    PORT: process.env.PORT || 8001,
    REDIS_HOST: process.env.REDIS_HOST || "localhost",
    REDIS_PORT: process.env.REDIS_PORT
        ? parseInt(process.env.REDIS_PORT, 10)
        : 6379,
    LOG_DB_URL: process.env.LOG_DB_URL || "logs",
    LOG_LEVEL: process.env.LOG_LEVEL || "info"
};
