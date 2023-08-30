import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration);

router.route("/").get((req, res) => {
    res.send("Hello this is my custom openai api route");
})

router.route("/").post(async (req, res) => {
    try {
        const { message } = req.body;

        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: message
        });

        res.json({
            // message: "Tis is a response",
            message: completion.data.choices[0].message.content,
        });
    } catch (err) {
        console.log(`Error --> ${err}`);
    }
})

export default router;