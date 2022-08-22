const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
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

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({email})
    if(!user) throw new Error('Unable to login!')
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch) throw new Error('Unable to login!')   
    return user
}

userSchema.pre('save', async function(next) {
    const user = this
    if(user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})
const User = mongoose.model('User', userSchema)

module.exports = User