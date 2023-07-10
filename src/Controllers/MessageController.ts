import {Request, Response} from 'express'
import MessageModel, { Message } from '../models/MessageModel'

const MessageController = {
    get : async (req: Request, res: Response) => {
        let success: boolean;
        let message: string;
        let status: number;
        let data: Message[] | {};

        MessageModel.findMany().then((messages) => {
            success = true;
            message = 'Data fetched succesfully.';
            status = 200;
            data = messages
        }).catch((err) => {
            success = false;
            message = 'Data fetching failed.';
            status = 200;
            data = {}
            if (err) {
                throw err
            }
        }).finally(() => {
            res.json({
                success,
                status,
                data
            })
        })
    },
    post: (req: Request, res: Response) => {
        let data = req.body
        res.json({data})
    },
    delete: (req: Request, res: Response) => {
        res.json({data: 'Message deleted'})
    }
}

export default MessageController