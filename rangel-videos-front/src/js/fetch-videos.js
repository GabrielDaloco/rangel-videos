async function getAllVideos(){
    try{
        const resultado = await fetch("http://localhost:3000/videos")
        .then((response)=>{
           response.json()
        })
        console.log(resultado)
    }
    catch(err){
        console.log(err)
    }
}

