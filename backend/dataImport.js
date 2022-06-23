const redis = require('redis')
async function main() {
    const client = redis.createClient()
    await client.connect()
    let data = [
        {name: "강아지", uid: 123123, lng: 76.56},
    ]
    let objStr = JSON.stringify(data)
    client.set("test", objStr)
    let value = await client.get("test")
    console.log(JSON.parse(value))
}
main()