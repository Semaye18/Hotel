import express, { urlencoded } from  'express'
import cors from 'cors'
import productRouter from './routert/productRouter.js'
import { configDotenv } from 'dotenv'
import { connectDB } from './confing/confing.js'
import whislistRouter from './router/whislistRouter.js'
configDotenv()
const app=express()
app.use(cors())
app.use(urlencoded({extended:true}))
app.use(express.json())

app.use('/products',productRouter)
app.use('/whislist',whislistRouter)
connectDB()
app.listen(5501,()=>{
    console.log("server qaldirildi");
})