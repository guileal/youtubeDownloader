import express from 'express';
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


const app = express()
const port = process.env.PORT || 3030

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html', err => { console.log(err) })
})

app.use(express.static(__dirname))

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
    console.log('CTRL+C to turn off server')
})