const express = require('express')
const app = express()
const redis = require('redis')
const client=redis.createClient({
    url: 'redis://redis:6379'
})

client.connect()

const port = 3000

app.get('/', async (req, res) => {
    let value = await client.get("test")
    res.json(value)
})

app.get('/testData', async (req, res) => {
    let value = await client.get("test")
    res.json(value)
    console.log(value)
})

app.listen(port, () => console.log(`Example main listening at http://localhost:${port}`))

