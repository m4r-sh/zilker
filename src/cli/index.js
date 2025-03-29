#!/usr/bin/env bun

import sade from 'sade';
import { version } from '../../package.json'

import { build } from './build.js';
import { dev } from './dev.js';

const prog = sade('zilker2');

prog
  .version(version) 
  .option('-c, --config', 'Provide path to custom config', 'zilker.js')

prog
  .command('build')
  .describe(`Build project files according to config`)
  .example('build')
  .action((opts) => {
    build().then(() => process.exit(0))
  });

prog
  .command('dev')
  .describe(`Start a dev session`)
  .example('dev')
  .action(async (opts) => {
    dev()
  });

prog.parse(process.argv);