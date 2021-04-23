import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";

import "./database";
import { routes } from "./routes";

const app = express();

const http = createServer(app);
const io = new Server(http);

io.on("connection", (socket: Socket) => {
    console.log("Se conectou", socket.id);
})

app.use(express.json());

app.use(routes);

app.get("/", (request, response) => {
    return response.json({
        message: "Test get - Olá NLW05"
    });
});

app.post("/", (request, response) => {
    return response.json({ message: "Test post - NLW05" })
});

app.listen(3333, () => console.log("server is running on port 3333"));