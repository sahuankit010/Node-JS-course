// CRUD Operations

const {MongoClient, ObjectId} = require('mongodb')
// const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectId()
console.log(id.id)
console.log(id.getTimestamp())
MongoClient.connect(connectionURL, {useNewURLParser: true}, (error, client) => {

    if(error){
        console.log(error)
        return console.log('Unable to connect with database')
    }

    // console.log('Connected Successfully')
    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Vinod',
    //     age: 41
    // }, (error, result) => {
    //     if(error){
    //       return  console.log(error)
    //     } 
    //     console.log('Data')
    //     console.log(result.insertedId)
    //     console.log(result.acknowledged)
    // })

//     db.collection('tasks').insertMany([{
//         description: 'Read',
//         completed: true
//     },{
//         description: 'Code',
//         completed: true
//     },{
//         description: 'Walk',
//         completed: false
//     }
// ], (error, result) => {
//     if(error){
//         return console.log(error)
//     } 
//     console.log(result.acknowledged)
//     console.log(result.insertedCount)
// })
})