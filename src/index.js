const express = require('express');
require('./db/mongoose')
const taskRouter = require('./routers/task')
const userRouter = require('./routers/user')

const app = express()
const port = process.env.PORT

// app.use((req, res, next)=>{
//     console.log(req)
//     next()
//     // res.status(503).send('Server is in Maintanenece, Please try after some time.')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () =>{
//     // const task  = await Task.findById('609d2d86de98cd09c0ce6acd')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('609e1ca6266cae061c6f3507')
//     await user.populate({
//         path: 'tasks',
//         match : {
//             completed: false
//         }
//     }).execPopulate()
//     // console.log(user.tasks)
// }

// main()


app.listen(port, ()=>{
    console.log("Port is up and running at :", port)
})
