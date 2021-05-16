require("dotenv").config()
const express = require("express")
const { getPosts, addPost, removePost } = require("./controllers/testController")
const app = express()

app.use(express.json())

app.get("/api/posts", getPosts)
app.post("/api/post", addPost)
app.delete("/api/post/:index", removePost)

app.listen(4040, () => console.log(`Server listening on port 4040.`))