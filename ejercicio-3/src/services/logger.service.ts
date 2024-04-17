import pino, { LoggerOptions } from 'pino'
import path from 'path'
import fs from 'fs'

const logsDir: string = 'logs'
const logFileName: string = 'logfile.log'
const logFilePath: string = path.join(logsDir, logFileName)

// Ensure 'logsDir' is created and open the stream.
fs.mkdirSync(logsDir, { recursive: true })
const stream:fs.WriteStream = fs.createWriteStream(
  logFilePath,
  { flags: 'a' } // 'a' for 'append' instead of re-creating the log per session.
)

// Define the log format.
const opts: LoggerOptions = {
  level: process.env.PINO_LOG_LEVEL || 'info',
  formatters: {
    bindings: () => { return {} }, // Note we are silencing bindings.
    level: (label: string) => {
      return { level: label.toUpperCase() }
    },
  },
  timestamp: () => {
    const date: Date = new Date()
    const locale: string = 'es-ES'
    const dateString: string = date.toLocaleDateString(
      locale, { day: '2-digit', month: '2-digit', year: 'numeric' }
    )
    const timeString: string = date.toLocaleTimeString(locale, { hour12: false })

    // Join 'date' and 'time' into the final 'timestamp' and return it.
    const timestamp: string = `,"timestamp":"${dateString} at ${timeString}"`
    return timestamp
  },
}

// Setup logger
const logger: pino.Logger = pino(opts, stream)

/** Singleton of the logger. */
export default logger
