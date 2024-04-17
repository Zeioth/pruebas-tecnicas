import pino, { LoggerOptions } from 'pino'
import path from 'path'
import fs from 'fs'

/** Class to manage the Logger. */
class LoggerService {
  private readonly logsDir: string = 'logs'
  private readonly logFileName: string = 'logfile.log'
  private readonly logFilePath: string = path.join(this.logsDir, this.logFileName)
  private readonly stream: fs.WriteStream

  /** Default constructor.
   *  It ensures 'logsDir' is created and the stream opened. */
  constructor() {
    fs.mkdirSync(this.logsDir, { recursive: true })
    this.stream = fs.createWriteStream(
      this.logFilePath,
      { flags: 'a' } // 'a' for 'append' instead of re-creating the log per session.
    )
  }

  /** Returns a logger object with our default opts. */
  getLogger(): pino.Logger{
    // Set logger options
    const loggerOpts: LoggerOptions = {
      level: process.env.PINO_LOG_LEVEL || 'info',
      formatters: {
        // Note we are silencing the fields under bindings.
        bindings: () => { return {} },
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

    // Create and return logger.
    const logger: pino.Logger = pino(loggerOpts, this.stream)
    return logger
  }
}

/** Singleton of the logger. */
const loggerService = new LoggerService()
const logger = loggerService.getLogger()
export default logger
