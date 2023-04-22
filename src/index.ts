import * as express from "express"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const server = express()

server.get("/", (req, res) => {
  res.send("hola ")
})

server.listen(3000)
