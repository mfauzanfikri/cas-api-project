import {Request, Response} from 'express'
import MessageModel, { InsertMessage, Message } from '../models/MessageModel'

const MessageController = {
    get : async (req: Request, res: Response) => {
        let success: boolean;
        let message: string;
        let status: number;
        let data: Message[] | [];

        MessageModel.findMany().then((messages) => {
            success = true;
            message = 'Data fetched succesfully.';
            status = 200;
            data = messages
            res.status(status)
        }).catch((err) => {
            success = false;
            message = 'Internal server error.';
            status = 500;
            data = []
            if (err) {
                throw err
            }
            res.status(status)
        }).finally(() => {
            res.json({
                success,
                status,
                data
            })
        })
    },
    post: (req: Request, res: Response) => {
        let message: InsertMessage = req.body
        res.json({data: message})
    },
    delete: (req: Request, res: Response) => {
        res.json({data: 'Message deleted'})
    }
}

export default MessageController