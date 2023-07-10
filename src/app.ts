import express, {Express, Request, Response} from 'express'
import dotenv from 'dotenv'
import messageRoute from './routes/Message'

dotenv.config();

const port = process.env.CAS_API_PORT
const app:Express = express() 

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/message', messageRoute)

app.get('*', (req, res) => {
    res.status(404)
    res.json({
        status: 404,
        message: '404 NOT FOUND'
    })
})

app.listen(port, () => {
    console.log(`CAS API listening on port ${port}`);
});