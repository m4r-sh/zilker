#!/usr/bin/env bun

import sade from 'sade';
import { version } from '../../package.json'
import { init } from './commands/init';
import { build } from './commands/build';
import { dev } from './commands/dev';
import { parseConfig, readConfig } from '../core/parseConfig';

const prog = sade('zilker');

prog
  .command('init')
  .describe(`Scaffold new project`)
  .action(async (opts) => {
    await init()
  });

prog
  .command('build')
  .describe(`Build project files according to config`)
  .example('build')
  .action(async (opts) => {
    let config = await readConfig()
    let { inputs, outputs } = await parseConfig({
      ...config,
      server: null,
      studio: null
    })
    await build({inputs, outputs})
  });

prog
  .command('dev')
  .describe(`Start a dev session`)
  .example('dev')
  .action(async (opts) => {
    let config = await readConfig()
    let { inputs, outputs, server, studio } = await parseConfig(config)
    dev({ inputs, outputs, server, studio })
  });

prog.parse(process.argv);