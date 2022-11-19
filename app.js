const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

//Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Adding a new Note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// create remove command
yargs.command({
  command: 'remove',
  describe: 'remove a new Note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// create list command
yargs.command({
  command: 'list',
  describe: 'List Note',
  handler() {
    notes.listNotes();
  },
});

// create read command
yargs.command({
  command: 'read',
  describe: 'Read Note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();
