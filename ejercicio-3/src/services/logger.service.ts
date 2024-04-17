import pino from 'pino'
import path from 'path'
import fs from 'fs'

const logsDir = 'logs'
const logFileName = 'logfile.log'
const logFilePath = path.join(logsDir, logFileName)

// ensure logsDir is created
fs.mkdirSync(logsDir, { recursive: true })

// define the log format
const opts = {
  level: process.env.PINO_LOG_LEVEL || 'info',
  formatters: {
    bindings: () => { return {} }, // note we are silencing bindings.
    level: (label: any) => {
      return { level: label.toUpperCase() };
    },
  },
  timestamp: () => {
    const date = new Date();
    const locale = 'es-ES'
    const dateString = date.toLocaleDateString(
      locale, { day: '2-digit', month: '2-digit', year: 'numeric' }
    );
    const timeString = date.toLocaleTimeString(locale, { hour12: false });

    // Join 'date' and 'time' into the final 'timestamp' and return it
    const timestamp = `,"timestamp":"${dateString} at ${timeString}"`;
    return timestamp
  },
}

// setup logger
const stream = fs.createWriteStream(logFilePath, { flags: 'a' }) // append log.
const logger = pino(opts, stream)

export default logger
