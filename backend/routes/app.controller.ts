import express, {Request, Response, NextFunction, Router} from 'express';
import path from "path";
const APIController = require("./api.controller")

const router: Router = express.Router();
const __distDirectory = path.resolve('static')

router.use("/api", APIController)

module.exports = router