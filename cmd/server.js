const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const dotenv = require('dotenv')
const connectDB = require('../config/db.config')
const cors = require('cors')

const authRouter = require('../routes/auth-route')
const profileRouter = require('../routes/profile-route')
const threadRouter = require('../routes/thread-route')

const app = express()
dotenv.config()
connectDB()

// MIDDLEWARES
app.use(bodyParser.json())
app.use(morgan('tiny'))

// enable CORS
const FE_URL = process.env.FE_URL
app.use(cors())

// ROUTES
app.get('/', (req, res) => {
    res.status(200).json('🚀 API is running')
})
app.use('/api/v1/auth/', authRouter)
app.use('/api/v1/profile/', profileRouter)
app.use('/api/v1/threads/', threadRouter)

// LAUNCH
const port = process.env.PORT
app.listen(port, () => {
    console.log(`🚀 Server ready at http://0.0.0.0:${port}`)
})
