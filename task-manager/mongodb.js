// CRUD Operations

const { MongoClient, ObjectId } = require('mongodb')
// const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectId()
// console.log(id.id)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewURLParser: true }, (error, client) => {

    if (error) {
        console.log(error)
        return console.log('Unable to connect with database')
    }
    
    const db = client.db(databaseName)
    
    ////////////---->  Create  <----------------
    // db.collection('users').insertMany([
    //     { name: 'Andrew', age: 26},
    //     { name: 'Jen', age: 25 },
    //     {name: 'Vikram', age: 26}
    // ], (error, result) => {
    //     if(error){
    //         console.log('Error')
    //         return console.log(error)
    //     }

    //     console.log(result.insertedCount)
    // })
    // db.collection('tasks').findOne({description: 'Read'}, (error, task) => {
    //     if(error){
    //         console.log('Error')
    //         return console.log(error)
    //     }
    //     console.log(task)
    // })

    //------------> Read  <---------------------

    // db.collection('tasks').findOne({_id: new ObjectId('62f84a0bc6b3542d357b98d0')}, (error, task) => {
    //     if(error){
    //         return console.log('Error' + error)
    //     }
    //     console.log(task)
    // })

    // db.collection('tasks').find({completed: true}).toArray((error, tasks) => {
    //     console.log('Tasks that are completed')
    //     if(error){
    //         return console.log('Error'+ error)
    //     }

    //     console.log(tasks)
    // })

    //---------> Update  <-----------------------
    // db.collection('users').updateOne({
    //     _id: new ObjectId('62f853bb4841d4caf44f5282')},{
    //         $inc: {
    //             age: -5
    //         }
    //     }).then((result) => {
    //         console.log(result.matchedCount)
    //     }).catch((error) => {
    //         console.log(error)
    //     })

    // db.collection('tasks').updateMany(
    //     { completed: true },
    //     {
    //         $set: {
    //             completed: false
    //         }
    //     }
    // ).then((res) => {
    //     console.log(res)
    // }).catch((error)=> {
    //     console.log(error)
    // })

    //--------------> Delete  <------------------

    // db.collection('users').deleteMany({
    //     age: 26
    // }).then((res) => {
    //     console.log(res)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({
        description: 'Read'
    }).then((res)=> {
        console.log(res)
    }).catch((error) => {
        console.log(error)
    })
})