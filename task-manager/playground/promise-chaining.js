require('../src/db/mongoose')

const User = require('../src/models/user')

// User.findByIdAndUpdate('62feccd87c0f4fbbcf933fb2', {age: 1}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age: 1})
// }).then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })

const updateAgeandCount = async(id, age) => {
    const user = await User.findByIdAndUpdate(id,{age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeandCount('62feccd87c0f4fbbcf933fb2', 2).then((count) => {
    console.log(count)
}).catch((e)=> {
    console.log(e)
})