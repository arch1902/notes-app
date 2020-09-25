const chalk = require('chalk')
const yargs = require('yargs')
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
    handler : function(argv){
        notes.addNote(argv.title,argv.body)
    }
})

//create remove command

yargs.command({
    command : 'remove',
    describe : 'remove a note',
    handler : function(){
        console.log('removing a note!')
    }
})

//create list command

yargs.command({
    command : 'list',
    describe : 'list all notes',
    handler : function(){
        console.log('listing all note!')
    }
})

//create read command

yargs.command({
    command : 'read',
    describe : 'read a note',
    
    handler : function(){
        console.log('reading a note!')
    }
})

// add,,remove,read,list
//console.log(yargs.argv)
yargs.parse()

