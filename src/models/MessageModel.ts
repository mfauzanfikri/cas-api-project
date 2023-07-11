import { PrismaClient, PrismaPromise, Message as Type } from '@prisma/client'

const prisma = new PrismaClient()
const prismaMessage: PrismaClient['message'] = prisma.message
// const MessageModel: PrismaClient['message'] = prisma.message

export type Message = Type

export type InsertMessage = {
    name?: string,
    email?: string,
    message?: string
}

type Options = {
    id?: boolean,
    email?: boolean,
    name?: boolean,
    message?: boolean,
    createdAt?: boolean,
    deletedAt?: boolean
}

export type MessageData = {
    id?: number, 
    email?: string, 
    name?: string, 
    message?: string, 
    createdAt?: Date, 
    deletedAt?:Date | null
}

const Messages = (model: PrismaClient['message']) => {
    return Object.assign(model, {
        async findAll(options?: Options) {
            if (!options) {
                return prismaMessage.findMany()
            }

            const data = prismaMessage.findMany({
                select: options
            })

            return data
        }
    })
}

const MessageModel = Messages(prismaMessage)

export default MessageModel