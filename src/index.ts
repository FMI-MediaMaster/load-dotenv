import { readFileSync } from 'fs';
import { parse } from 'dotenv';

type Config = Record<string, string> & {
  add: (...keys: string[]) => Config;
}

const config: Config = parse(readFileSync('./.env', 'utf-8')) as Config;

config.add = function (this: Config, ...keys: string[]) {
    for (const key of keys) {
        if (process.env[key] !== undefined) {
            this[key] = process.env[key]!;
        }
    }
    return this;
};

config.add('NODE_ENV')

export default config;
