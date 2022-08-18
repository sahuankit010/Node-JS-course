const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')

// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value){
//             if(!validator.isEmail(value)) throw new Error('Invalid Email')
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true,
//         validate(value){
//             if(value.length<=6) throw new Error('Password length is not more than 6.')
//             if(value.includes('password')) throw new Error('Your Password includes the word password.')
//         }
//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value){
//             if(value<0) throw new Error('Age should be a positive number')
//         }
//     }
// })

// const me = new User({
//     name: 'Mike',
//     email: 'andy@mead.io',
//     password: 'meadioioio'
// })

// me.save().then(()=> {
//     console.log(me)
// }).catch((error) => {
//     console.log(error)
// })

const Tasks = mongoose.model('Tasks',{
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        defualt: false
    }
})

const cleaning = new Tasks({
    description: 'Running',
})

cleaning.save().then(()=> {
    console.log(cleaning)
}).catch((error) => {
    console.log(error)
})