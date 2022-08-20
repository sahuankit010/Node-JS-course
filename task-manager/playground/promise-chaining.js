require('../src/db/mongoose')

const User = require('../src/models/user')

User.findByIdAndUpdate('62feccd87c0f4fbbcf933fb2', {age: 1}).then((user) => {
    console.log(user)
    return User.countDocuments({age: 1})
}).then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})