const chalk = require('chalk')
const yargs = require('yargs')
const { listNotes } = require('./notes.js')
const notes = require('./notes.js')

//getNotes();

//console.log(chalk.bold.blue.inverse('Success!'));

// yargs version

yargs.version('1.1.0')

//create add command

yargs.command({
    command : 'add',
    describe : 'add a new note',
    builder :{
        title:{
            describe :'Note title',
            demandOption :true,
            type:'string'
        },
        body:{
            describe : 'note body',
            demandOption : true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})

//create remove command

yargs.command({
    command : 'remove',
    describe : 'remove a note',
    builder :{
        title:{
            describe :'Note title',
            demandOption : true,
            type : 'string' 
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

//create list command

yargs.command({
    command : 'list',
    describe : 'list all notes',
    handler(){
        notes.listNotes()
    },
})

//create read command

yargs.command({
    command : 'read',
    describe : 'read a note',
    builder :{
        title:{
            describe : 'Note Title',
            demandOption : true,
            type : 'string'
        }    
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

// add,,remove,read,list
//console.log(yargs.argv)
yargs.parse()

