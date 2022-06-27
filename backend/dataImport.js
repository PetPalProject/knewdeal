const redis = require('redis')
async function main() {
    const client=redis.createClient({
        url: 'redis://redis:6379'
        
    })
    await client.connect()
    let data = [
        {name: "강아지", uid: 123123, lng: 76.56},
        {name: "강아지", uid: 123123, lng: 77.36},
        {name: "강아지", uid: 123123, lng: 78.53},
        {name: "강아지", uid: 123123, lng: 79.31},
        {name: "강아지", uid: 123123, lng: 80.52},
        {name: "고양이", uid: 456456, lng: 53.55},
        {name: "고양이", uid: 456456, lng: 53.57},
        {name: "고양이", uid: 456456, lng: 54.60},
        {name: "고양이", uid: 456456, lng: 54.65},
        {name: "고양이", uid: 456456, lng: 55.70},
        {name: "고양이", uid: 456456, lng: 56.73}
    ]
    let objStr = JSON.stringify(data)
    client.set("test", objStr)
    let value = await client.get("test")
    console.log(JSON.parse(value))
}
main()