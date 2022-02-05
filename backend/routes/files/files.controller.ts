import express, {Request, Response, NextFunction, Router} from 'express';
import path from "path";
import {getFiles} from "./files.service";

const router: Router = express.Router();
const __distDirectory = path.resolve('static')

router.get("/", (req: Request, res: Response) => {
    const {length} = req.query as {
        length: string
    }

    const data = getFiles(parseInt(length))

    res.json(data)
})

module.exports = router