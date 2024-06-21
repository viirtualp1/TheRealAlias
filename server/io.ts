import { Server } from "socket.io";
import { getRandomWords } from "@/utils/dictionary";

const io = new Server({
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  const words = getRandomWords(50);
  const currentWord = words[0];

  socket.on("start:game", () => {
    io.emit("new:word", currentWord);
  });
});

export default io;
