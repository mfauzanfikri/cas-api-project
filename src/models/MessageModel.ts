import { PrismaClient, Message as Type } from '@prisma/client'

const prisma = new PrismaClient()
const MessageModel: PrismaClient['message'] = prisma.message
export type Message = Type
export type InsertMessage = {
    name?: string,
    email?: string,
    message?: string
}

export default MessageModel