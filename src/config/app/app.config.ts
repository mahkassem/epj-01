import { env } from '../../utils/helpers/env.helper';

export default {
  environment: env('APP_ENV', 'dev'),
  secret: env('APP_SECRET', 'secret'),
  port: env('APP_PORT', '3000'),
};
