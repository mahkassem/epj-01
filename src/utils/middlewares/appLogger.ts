import { Request, Response, NextFunction } from 'express';
import logger from '../logger';

export default (req: Request, res: Response, next: NextFunction): void => {
  const start = process.hrtime();
  const now = new Date().toLocaleTimeString();
  const consoleWidth = process.stdout.columns || 80;
  let startMessage = `[${req.method}] ${req.originalUrl} - ${req.ip}`;
  const paddingBetweenStartAndEnd =
    consoleWidth - startMessage.length - 17 - now.length;
  startMessage = startMessage
    .replace('[GET]', '[\x1b[32mGET\x1b[0m]')
    .replace('[POST]', '[\x1b[33mPOST\x1b[0m]')
    .replace('[PUT]', '[\x1b[34mPUT\x1b[0m]')
    .replace('[DELETE]', '[\x1b[31mDELETE\x1b[0m]');
  logger.info(
    startMessage +
      ' ' +
      '\x1b[90m' +
      '-'.repeat(paddingBetweenStartAndEnd) +
      ' ' +
      now +
      '\x1b[0m',
  );
  res.on('finish', () => {
    const duration = process.hrtime(start);
    const endTime = new Date().toLocaleTimeString();
    const durationInMs = Math.round(duration[0] * 1000 + duration[1] / 1e6);
    let endMessage = `[${res.statusCode}] finished in ${durationInMs}ms`;
    const paddingBetweenEndAndDuration =
      consoleWidth - endMessage.length - 17 - endTime.length;
    // 1xx - blue | 2xx - green | 3xx - cyan | 4xx - yellow | 5xx - red
    endMessage = endMessage
      .replace(/[1][0-9][0-9]/gm, '\x1b[34m$&\x1b[0m')
      .replace(/[2][0-9][0-9]/gm, '\x1b[32m$&\x1b[0m')
      .replace(/[3][0-9][0-9]/gm, '\x1b[36m$&\x1b[0m')
      .replace(/[4][0-9][0-9]/gm, '\x1b[33m$&\x1b[0m')
      .replace(/[5][0-9][0-9]/gm, '\x1b[31m$&\x1b[0m');
    logger.info(
      endMessage +
        ' ' +
        '\x1b[90m' +
        '-'.repeat(paddingBetweenEndAndDuration) +
        '\x1b[0m' +
        ' ' +
        endTime,
    );
  });
  next();
};
