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


app.listen(port, ()=>{
    console.log("Port is up and running at :", port)
})
