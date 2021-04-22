import express from "express";

import "./database";
import { routes } from "./routes";

const app = express();

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