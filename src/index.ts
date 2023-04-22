import * as express from "express"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const server = express()

const port = process.env.PORT || 3333

server.get("/", (req, res) => {
  res.send("hola ")
})

server.listen(port)
