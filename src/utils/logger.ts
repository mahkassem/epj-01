import { Signale } from 'signale';

const options = {
  types: {
    info: {
      badge: '💻',
      color: 'blue',
      label: '[info]',
      logLevel: 'info',
    },
    success: {
      badge: '✅',
      color: 'green',
      label: '[success]',
      logLevel: 'info',
    },
    error: {
      badge: '❌',
      color: 'red',
      label: '[error]',
      logLevel: 'error',
    },
    warn: {
      badge: '⚠️',
      color: 'yellow',
      label: '[warn]',
      logLevel: 'warn',
    },
    debug: {
      badge: '🐛',
      color: 'magenta',
      label: '[debug]',
      logLevel: 'debug',
    },
  },
};

const logger = new Signale(options);

export default logger;
