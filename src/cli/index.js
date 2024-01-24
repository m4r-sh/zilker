#!/usr/bin/env bun

import sade from 'sade';
import kleur from 'kleur';
import prompts from 'prompts'
import { version } from '../../package.json'

import { dev } from './commands/dev.js';
import { build } from './commands/build.js';

const prog = sade('zilker');

prog
  .version(version) 
  .option('-c, --config', 'Provide path to custom config', 'zilker.js')
  .action((opts) => {
    console.log('here')
  })

prog
  .command('init')
  .describe(`Create a new project`)
  .example('init')
  .action(async (opts) => {
    console.log(kleur.white().bgRed().bold('TODO: scaffold project'))
  });

prog
  .command('build')
  .describe(`Build project files according to config`)
  .example('build')
  .action(async (opts) => {
    await build()
  });

prog
  .command('dev')
  .describe(`Start a dev session`)
  .example('dev')
  .action(async (opts) => {
    await dev()
  });

prog.parse(process.argv);