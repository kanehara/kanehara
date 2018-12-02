const { createLogger, format, transports } = require('winston')
const { simple, colorize, combine } = format

const createWinstonLogger = level => createLogger({
  format: combine(
    colorize({ message: true }),
    simple()
  ),
  transports: [
    new transports.Console({
      level
    })
  ]
})

module.exports = createWinstonLogger