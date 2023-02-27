const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const port = 3001

app.get("/", (req,res)=> {
  try {
    res.status(200).json({success: "success"})
  } catch (err) {
    res.status(500).json({error: err.message})
  }
})


app.listen(port) 