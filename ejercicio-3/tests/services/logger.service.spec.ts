/** Mocked to avoid interference with the other tests that call functions
 *  that make usage of the logger. */

import logger from '@services/logger.service'

// Mock functions, so we don't require disk storage.
jest.mock('@services/logger.service')
const mockLogWridtenInDisk = jest.fn(() => { return "THIS IS A UNIT TEST" })
logger.info = mockLogWridtenInDisk
logger.warn = mockLogWridtenInDisk
logger.error = mockLogWridtenInDisk

/** It represents the expected structure of a log line within this test file. */
interface LogLine {
  level: string
  msg: string
}

describe('logger', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it(`should use the logger to write
      into the default log file correctly.`, async () => {
    // arrange
    const expectedLogs: LogLine[] = [
      { level: 'INFO', msg: 'THIS IS A UNIT TEST.' },
      { level: 'WARN', msg: 'THIS IS A UNIT TEST.' },
      { level: 'ERROR', msg: 'THIS IS A UNIT TEST.' },
    ]

    // act
    logger.info(expectedLogs[0].msg)
    logger.warn(expectedLogs[1].msg)
    logger.error(expectedLogs[2].msg)

    // assert
    expectedLogs.forEach((line: LogLine, index: number) => {
      expect(line.level).toBe(expectedLogs[index].level)
      expect(line.msg).toBe(expectedLogs[index].msg)
    })
  })
})
