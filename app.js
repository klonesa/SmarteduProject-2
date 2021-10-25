const express=require('express')
const app =express()

const port=3000

app.get('/',(req,res)=>{
    res.send('istek gönderildi.')
})

app.listen(port,()=>{
    console.log(`Sunucu 'http://localhost:3000/'  ile başlatıldı...`)
})