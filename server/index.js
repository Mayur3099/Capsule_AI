import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";

import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);
app.use("/api/v1/chat", chatRoutes);

app.get("/", async (req, res) => {
    res.send("Ohayo from DALL-E!");
});

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL);
    } catch (err) {
        console.log(`Error! --> ${err}`);
    }
    app.listen(8080, () => {
        console.log("Server has started on http://localhost:8080");
    })
};

startServer();