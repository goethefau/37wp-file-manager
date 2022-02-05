import express, {Request, Response, NextFunction, Router} from 'express';
import path from "path";

const FilesRouter = require("./files/files.controller")

const router: Router = express.Router();
const __distDirectory: string = path.resolve('static')

router.use("/files", FilesRouter)

module.exports = router