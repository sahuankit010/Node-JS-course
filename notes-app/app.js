const fs = require('fs')

fs.writeFileSync('notes.txt', 'My name is Ankit.')

fs.appendFileSync('notes.txt', 'I am doing Masters in Computer Science')