import express from "express"
import { createServer } from "http"
import io from "./io"

const app = express()
const server = createServer(app)

io.attach(server)

server.listen(3001, () => {
  console.log("Server is listening on port 3001")
})
