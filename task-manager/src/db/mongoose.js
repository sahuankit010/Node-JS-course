const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')

// const User = mongoose.model('User', {
//     name: {
//         type: String
//     },
//     age: {
//         type: Number
//     }
// })

// const me = new User({
//     name: 'Andrew',
//     age: 26
// })

// me.save().then(()=> {
//     console.log(me)
// }).catch((error) => {
//     console.log(error)
// })

const Tasks = mongoose.model('Tasks',{
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

const cleaning = new Tasks({
    description: 'Cleaning the surface',
    completed: true
})

cleaning.save().then(()=> {
    console.log(cleaning)
}).catch((error) => {
    console.log(error)
})