async function getAllVideos(){
    try{
        const resultado = await fetch("http://localhost:3000/videos")
        const data = await resultado.json()

        return (data)
    }
    catch(err){
        console.log(err)
    }
}

async function constructVideos(){
    data = await getAllVideos()

    console.log(data)

    for(let x = 0; x <= data.length; x++){
        const videoHTML = `
        <!-- Vídeo -->
        <div class="border-solid border-2 border-gray-500 rounded-lg flex-grow-1">
            <img class="w-[340px] h-[200px] rounded-t-md" src="${'http://localhost:3000/' + data[x].img_url}" width="280" height="200">
            <div class="p-2">
              <a>${data[x].nome_video}</a><br>
              <a>${data[x].desc_video}</a>
            </div>
        </div>
        `
        document.getElementById('videos').innerHTML += videoHTML
    }
}

constructVideos()