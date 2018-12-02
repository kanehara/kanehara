const createLogger = require('@kanehara/winston-logger')

const level = process.env.NODE_ENV === 'production' ? 'info' : 'debug'

module.exports = {
  logger: createLogger(level)
}
