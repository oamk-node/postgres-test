import express, { Express,Request,Response } from "express"
import cors from 'cors'
import { Pool } from "pg"

const app: Express = express()

app.use(cors())
// https://www.section.io/engineering-education/how-to-use-typescript-with-nodejs/
// https://www.npmjs.com/package/@types/pg
// https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/
// https://big-data-skills.com/host-postgresql-tables-for-free-with-render/
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const port = 3001

app.get("/",(req: Request,res: Response)=> {
/*   const pool: Pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'todo',
    password: 'root',
    port: 5435
  }) */

  const pool: Pool = new Pool({
    user: 'root',
    host: 'dpg-cfu59l2rrk0c830k5l7g-a.oregon-postgres.render.com',
    database: 'todo',
    password: 'Fbs5hvojJZ6A713cmOzvHaklWZjUUElp',
    port: 5432
  })



  pool.query('select * from task',(error,result) => {
    if (error) {
      res.status(600).json({error: error.message})
    }
    res.status(200).json(result.rows)
  })

 
})

app.listen(port,() => {
  console.log("Started...")
})