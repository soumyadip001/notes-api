const path = require("path")
const express = require("express")
require("./db/mongoose")
const userRouter = require("./routes/users")
const postRouter = require("./routes/posts")


const publicDirectoryPath = path.join(__dirname, "../public")

const app = express()
const port = process.env.PORT || 3000
app.use(express.static(publicDirectoryPath))
app.use(express.json())
app.use(userRouter)
app.use(postRouter)


app.listen(port, () => {
    console.log("Server running on port " + port)
})