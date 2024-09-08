import { io } from "socket.io-client"

export default defineNuxtPlugin(() => {
  const socket = io("https://the-real-alias.vercel.app", { autoConnect: false })

  return {
    provide: {
      io: socket,
    },
  }
})
