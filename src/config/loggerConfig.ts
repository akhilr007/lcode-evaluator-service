import "winston-mongodb";

import winston, { Logger } from "winston";

import config from "./serverConfig";

const { LOG_DB_URL, LOG_LEVEL } = config;

const allowedTransports = [];

// console logging
allowedTransports.push(
    new winston.transports.Console({
        level: "info",
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.splat(),
            winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
            winston.format.printf(
                (log) =>
                    `${log.timestamp} [${log.level}]: ${
                        typeof log.message === "object"
                            ? JSON.stringify(log.message)
                            : log.message
                    }`
            )
        )
    })
);

// db logging - mongodb
allowedTransports.push(
    new winston.transports.MongoDB({
        db: LOG_DB_URL,
        options: { useUnifiedTopology: true },
        collection: "logs",
        level: LOG_LEVEL,
        metaKey: "additionalInfo"
    })
);

// file based logging
allowedTransports.push(
    new winston.transports.File({
        level: "error",
        filename: "app.log",
        format: winston.format.combine(
            winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
            winston.format.errors({ stack: true }),
            winston.format.splat(),
            winston.format.printf(
                ({ timestamp, level, message, stack }) =>
                    `${timestamp} [${level.toUpperCase()}]: ${
                        typeof message === "object"
                            ? JSON.stringify(message)
                            : message
                    }${stack ? `\n${stack}` : ""}`
            )
        )
    })
);

const logger: Logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        winston.format.printf(
            (log) =>
                `${log.timestamp} [${log.level}]: ${
                    typeof log.message === "object"
                        ? JSON.stringify(log.message)
                        : log.message
                }`
        )
    ),
    transports: allowedTransports
});

export default logger;
