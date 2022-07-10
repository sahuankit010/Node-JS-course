
const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

yargs.command({
    command: 'add',
    describe: "Add a new note",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: "Note body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body)
        // console.log("Title:"+ argv.title)
        // console.log("Body:"+ argv.body)
    }
})
yargs.parse()
// console.log(yargs.argv)
// notes('Hi I am Notes.')

// console.log(validator.isEmail('abc@xyz.com'))
// console.log(validator.isEmail('@xyz.com'))

// console.log(validator.isURL('xyz.com'))
// console.log(validator.isURL('////.com'))

// console.log(chalk.inverse.blue.bold('Success!'))

// // console.log(process.argv)

// for(i in process.argv){
//     console.log(process.argv[i])
// }

// const command = process.argv[2]

// if(command === 'add'){
//     console.log('Adding note!')
// } else if(command === 'remove'){
//     console.log('Removing note!')
// }