import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/connectDB.js';
dotenv.config() 

const app = express()

const port=process.env.PORT || 6000

app.get('/', (req, res) => {
    return res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
    connectDB()
})  