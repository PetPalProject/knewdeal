const express = require('express')
const app = express()
const redis = require('redis')
const client = redis.createClient()
client.connect()

const port = 3000

app.get('/', async (req, res) => {
    let value = await client.get("test")
    res.json(value)
})

app.listen(port, () => console.log(`Example main listening at http://localhost:${port}`))

//
//
//

var jsonText = '{ "name": "Someone else", "lastName": "Kim" }';  // JSON 형식의 문자열
var realObject = JSON.parse(jsonText);
var jsonText2 = JSON.stringify(realObject);

console.log(realObject);
console.log(jsonText2);