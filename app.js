const express=require('express')
const app =express()

const port=3000
// Middlewares
app.use(express.static('puplic'))

app.get('/',(req,res)=>{
    res.send('istek gönderildi.')
})

app.listen(port,()=>{
    console.log(`Sunucu 'http://localhost:3000/'  ile başlatıldı...`)
})