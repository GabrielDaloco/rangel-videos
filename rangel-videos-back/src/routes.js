import { connection } from './connection.js';
import express from 'express';
import multer from 'multer';
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg'
import ffProbe from '@ffprobe-installer/ffprobe';
import ffmpeg from 'fluent-ffmpeg';
const upload = multer({ dest: 'videos' });
const app = express();
const port = 3000;

ffmpeg.setFfmpegPath(ffmpegInstaller.path);
ffmpeg.setFfprobePath(ffProbe.path)

//Usar o json do express
app.use(express.json())

// Adicionar os cabeçalhos Access-Control-Allow-Origin
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

//Pasta das imagens
app.use('/images', express.static('imgs_videos/'));

//Pasta dos vídeos
app.use('/vids', express.static('videos/'));

//GET dos Vídeos da aba inicial
app.get('/videos', async (req,res)=>{
    try{
        const results = await connection.query('select id, nome_video, desc_video, img_url from video');

        res.status(200).json(results[0])
    }
    catch(err){
        console.log(err)
    }
});

//GET de um vídeo em específico
app.get('/video/:id', async (req,res)=>{
    try{
        const results = await connection.query('select id, nome_video, desc_video, video_url from video where id = ?',[req.params.id]);

        res.status(200).json(results[0])
    }
    catch(err){
        console.log(err)
    }
});

//POST do vídeo
app.post('/video/upload', upload.single('video'), async (req,res) =>{
    try{
        if (!req.file){
            console.log("File not uploaded.")
            return res.status(500).json("Failure")
        }else{
            const {videoName, videoDesc} = req.body
            const videoUrl = req.file.path
            const imgUrl = 'images/' + req.file.filename + '.png'
    
            ffmpeg(videoUrl)
                .takeScreenshots({
                    count: 1,
                    folder: 'imgs_videos/',
                    filename: '%b'
                });
    
            await connection.query("insert into video (nome_video, desc_video, img_url, video_url) values (?,?,?,?)", 
            [videoName, videoDesc, imgUrl, videoUrl])
    
            res.status(201).json("Sucesso!")
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json("Failure")
    }
});

app.listen(port,()=>{
    console.log("Running...")
})