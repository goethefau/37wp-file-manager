import path from "path"
import express from "express"
const AppRouter = require("./routes/app.controller")
const cors = require('cors')

const dotenv = require('dotenv');
dotenv.config();

const app = express();

// CORS
app.use(cors({
    origin: true,
    optionsSuccessStatus: 200
}))

// Init path to static files
const staticPath = path.join(__dirname, './static');
app.use(express.static(staticPath));

// Init middlewares for parsing content
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({extended: true})) // for parsing application/x-www-form-urlencoded

// Init App Router
app.use("/", AppRouter)

// Run node server
const port: string | number = process.env.BACKEND_SERVER_PORT || 3000
const server = app.listen(port, function () {
    console.log(`Node.js server has been started on localhost:${port}`);
});