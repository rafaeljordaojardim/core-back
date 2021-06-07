/* eslint-disable @typescript-eslint/restrict-template-expressions */
import express from 'express'
import Routers from './routes'
import { init } from './db/models/database'
import bodyParser from 'body-parser'
const app = express()
const port = 3000
const sequelize = init()
app.use(bodyParser.json())
app.use('/api', Routers)

// eslint-disable-next-line no-void
void sequelize.authenticate().then(async () => {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
}).catch((error) => {
  console.log(`Error connecting with database ${error}`)
})
