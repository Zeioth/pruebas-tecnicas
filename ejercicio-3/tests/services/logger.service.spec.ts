/** NOTE: This tests write into the actual log file.
 *        If you don't want this behavior, comment this file.
 *
 *        - Mocking the tests won't ensure the service works as expected.
 *        - Removing the content written by the service
 *          would introduce unnecesary integrity risk.
 *
 *        Also be aware this test won't pass on GitHub actions because
 *        it requires disk */

import logger from '@services/logger.service'
import fs from 'fs'
import path from 'path'

/** It represents the expected structure of a log line within this test file. */
interface LogLine {
  level: string
  msg: string
}

describe('logger', () => {
  it('should use the logger to write into the default log file correctly.', async () => {
    // arrange
    const logFilePath: string = path.resolve(__dirname, '../../logs/logfile.log')
    const expectedLogs: LogLine[] = [
      { "level": "INFO", "msg": "THIS IS A UNIT TEST." },
      { "level": "WARN", "msg": "THIS IS A UNIT TEST." },
      { "level": "ERROR", "msg": "THIS IS A UNIT TEST." },
    ]
    let logContent: string | null = null
    let logContentLines: string[] | null = null
    let last3LinesAsJson: LogLine[] | null = null

    // act → log
    logger.info(expectedLogs[0].msg)
    logger.warn(expectedLogs[1].msg)
    logger.error(expectedLogs[2].msg)
    logger.flush(() => {
      // assert → 'expectedLogs' are the latest lines written in the logs file
      logContent = fs.readFileSync(logFilePath, 'utf8')
      logContentLines = logContent.trim().split('\n')
      last3LinesAsJson = logContentLines.slice(-3).map(
        (line: string) => JSON.parse(line))
      last3LinesAsJson.forEach((line: LogLine, index: number) => {
        expect(line.level).toBe(expectedLogs[index].level)
        expect(line.msg).toBe(expectedLogs[index].msg)
      })
    })

  })
})

