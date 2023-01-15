import dotnet from 'dotenv';

dotnet.config();

// env.get("DB_HOST", "localhost") \\ optional default value
export const env = (key: string, defaultValue?: string): string => {
  const value = process.env[key] || defaultValue;
  if (!value) throw new Error(`Environment variable ${key} is not defined`);
  return value;
};
