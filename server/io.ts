import { Server } from "socket.io"
import { v4 as uid } from "uuid"
import { getRandomWords } from "@/utils/dictionary"
import { getRandomNumber } from "@/utils/math"

const io = new Server({
  cors: {
    origin: "*",
  },
})

function createNewRoom(): { roomId: string } {
  return {
    roomId: uid(),
  }
}

io.on("connection", (socket) => {
  let currentRoomId: string | null = null

  const words = getRandomWords(50)
  let currentIndex = 0
  let currentWord = words[currentIndex]

  socket.on("room:create", () => {
    const { roomId } = createNewRoom()

    io.emit("room:created", roomId)
  })

  socket.on("room:join", (roomId) => {
    socket.join(roomId)
    currentRoomId = roomId
  })

  socket.on("room:leave", (roomId) => {
    socket.leave(roomId)
    currentRoomId = null
  })

  socket.on("next:word", () => {
    if (!currentRoomId) {
      return
    }

    currentIndex = getRandomNumber(0, words.length)
    currentWord = words[currentIndex]

    io.to(currentRoomId).emit("new:word", currentWord)
  })
})

export default io
