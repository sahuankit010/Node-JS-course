const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error('Invalid Email')
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        validate(value){
            if(value.length<=6) throw new Error('Password ' + value + ' length is not more than 6.')
            if(value.includes('password')) throw new Error('Your Password includes the word password.')
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value){
            if(value<0) throw new Error('Age should be a positive number')
        }
    }
})

module.exports = User