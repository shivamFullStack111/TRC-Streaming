// server/index.js
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Frontend origin
    methods: ["GET", "POST"],
  },
});

const cors = require("cors");
app.use(cors());

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("offer", (offer) => {
    socket.broadcast.emit("offer", offer);
  });

  socket.on("answer", (answer) => {
    socket.broadcast.emit("answer", answer);
  });

  socket.on("candidate", (candidate) => {
    socket.broadcast.emit("candidate", candidate);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

const PORT = 8001;
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
