require('../src/db/mongoose')

const Task = require('../src/models/task')

// Task.findOneAndDelete('62fed063903a814e407995db').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false}).then((res) => {
//         console.log(res)
//     }).catch((err)=> {
//         console.log(err)
//     })
// })

const deleteandCount = async (id) => {
    const task = await Task.findOneAndDelete(id)
    const count = await Task.countDocuments({completed: true})
    return count
}
deleteandCount('62fed1d2a9a63f2d84b1f53c').then((count)=> {
    console.log(count)
}).catch((err)=> {
    console.log(err)
})