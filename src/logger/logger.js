
const { format, createLogger, transports } = require("winston");
const { timestamp, combine, printf } = format;
const winmongodb = require('winston-mongodb');

const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const logger = createLogger({
  format: combine(timestamp(), logFormat, format.json()),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "logs.log" }),
    new transports.MongoDB({
      level: 'errors',
      db: process.env.MONGODB_URI,
      options: { useUnifiedTopology: true },
      collection: 'errors'
    })
  ],
});

module.exports = logger;