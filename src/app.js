const { config } = require('dotenv')
config()
const express = require('express')
const cors = require('cors')
const sequelize = require('./config/dbConfig')
const router = require('./todo/routes')
const Todo = require('./todo/todoModel')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.use('/api', router)

const start = async() => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(port, () => {
      console.log(`Server started on port http://localhost:${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()

