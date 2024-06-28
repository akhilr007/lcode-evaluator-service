import { Redis } from "ioredis";

import { IRedisConfig } from "../interfaces/IRedisConfig";
import logger from "./loggerConfig";
import ServerConfig from "./serverConfig";

const redisConfig: IRedisConfig = {
    port: ServerConfig.REDIS_PORT,
    host: ServerConfig.REDIS_HOST,
    maxRetriesPerRequest: null
};

const redisConnection = new Redis(redisConfig);

redisConnection.on("error", (error) => {
    logger.error("Redis connection error", error);
});

export default redisConnection;
