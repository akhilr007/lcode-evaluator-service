import { RedisConnection } from "bullmq";

import { IRedisConfig } from "../interfaces/IRedisConfig";
import ServerConfig from "./serverConfig";

const redisConfig: IRedisConfig = {
    port: ServerConfig.REDIS_PORT,
    host: ServerConfig.REDIS_HOST
};

const redisConnection = new RedisConnection(redisConfig);

export default redisConnection;
