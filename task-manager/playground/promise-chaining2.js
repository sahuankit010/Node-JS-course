require('../src/db/mongoose')

const Task = require('../src/models/task')

Task.findOneAndDelete('62fed063903a814e407995db').then((task) => {
    console.log(task)
    return Task.countDocuments({completed: false}).then((res) => {
        console.log(res)
    }).catch((err)=> {
        console.log(err)
    })
})