"use strict";

import winston from 'winston';
import environment from "./environment.js";

const {createLogger, format, transports} = winston;
const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.errors({stack: true}),
        format.splat(),
        format.json()
    ),
    defaultMeta: {service: 'cargostar'},
    transports: [

        new transports.File({filename: './logs/error.log', level: 'error'}),
        new transports.File({filename: './logs/combined.log'})
    ]
});

if (environment.env !== 'production') {
    logger.add(new transports.Console({
        format: format.combine(
            format.colorize(),
            format.simple()
        )
    }));
}

export default logger;