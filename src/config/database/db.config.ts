import { env } from '../../utils/helpers/env.helper';

const isTestEnv = env('APP_ENV', 'dev') === 'test';

export default {
  host: env('POSTGRES_HOST', 'localhost'),
  user: env('POSTGRES_USER', 'postgres'),
  password: env('POSTGRES_PASSWORD', 'postgres'),
  name: env(isTestEnv ? 'POSTGRES_TEST_DB' : 'POSTGRES_DB', 'postgres'),
  port: parseInt(env('POSTGRES_PORT', '5432')),
};
