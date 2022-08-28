const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     console.log(req.method, req.path)
//     if(req.method === 'GET'){
//         res.send('GET Requests are disabled!')
//     }else {
//         next()
//     }
    
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon.')
// })
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port' + port)
})

const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({_id: 'abc123'}, 'thisismynewcourse', {expiresIn: '7 days'})
//     const data = jwt.verify(token,'thisismynewcourse')
//     return data
// }

// console.log(myFunction())

const Task = require('./models/task')
const User = require('./models/user')
// const main = async () => {
//     // const task = await Task.findById('6307eaa8c82ecf7b488218b6')
//     // await task.populate('owner')
//     // console.log(task.owner)
//     const user = await User.findById('6307ea64c82ecf7b488218ae')
//     await user.populate('tasks')
//     // console.log(user.tasks)
// }
// main()