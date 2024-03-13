import express from 'express';
const app = express();
const port = 3000;
import { connection } from './connection.js';

app.get('/videos', async (req,res)=>{
    try{
        const rows = await connection.query('select * from video');
        console.log(rows[0][0].id)
        console.log(rows[0][0].nome_video)
        console.log(rows[0][0].desc_video)

        res.send("enviado")
    }
    catch(err){
        console.log(err)
    }
})  

app.listen(port,()=>{
    console.log("Exemplo rodando")
})