
const validator = require('validator')
const chalk = require('chalk')
const print = require('./notes')

print('Hi I am Notes.')

// console.log(validator.isEmail('abc@xyz.com'))
// console.log(validator.isEmail('@xyz.com'))

// console.log(validator.isURL('xyz.com'))
// console.log(validator.isURL('////.com'))

console.log(chalk.inverse.blue.bold('Success!'))