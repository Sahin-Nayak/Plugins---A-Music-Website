import express from "express"
import cors from "cors"
import cookieparser from "cookie-parser"

const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))


app.use(express.json({limit: "1000000kb"}))
app.use(express.urlencoded({extended: true, limit: "100000000kb"}))
app.use(express.static("public"))
app.use(cookieparser())


//routes import
import userRouter from './routes/user.routes.js'
import audioRouter from './routes/audio.routes.js'
import playlistRouter from './routes/playlist.routes.js'

app.use("/user", userRouter)
app.use("/audio", audioRouter)
app.use("/playlist",playlistRouter)

export {app}