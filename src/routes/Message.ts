import express, { Router } from 'express'
import MessageController from '../controllers/MessageController'

const router: Router = express.Router()
const controller = MessageController

router.get('/', controller.get)

router.post('/', controller.post)

router.delete('/', controller.delete)

export default router