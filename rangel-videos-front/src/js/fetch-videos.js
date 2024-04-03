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

    if(data.length == 0){
        document.getElementById('videos').innerHTML = "<a class='text-5xl mt-10'>Não há vídeos</a>"
    }
    else{
        for(let x = 0; x <= data.length - 1; x++){
            const videoHTML = `
            <!-- Vídeo -->
            <div onclick="window.location='../video.html?v=${data[x].id}';" class="border-solid border-2 border-gray-500 rounded-lg flex-grow-1 max-w-[340px] cursor-pointer">
                <img class="w-[340px] h-[200px] rounded-t-md" src="http://localhost:3000/${data[x].img_url}" width="280" height="200">
                <div class="p-2 flex flex-col">
                  <a>${data[x].nome_video}</a><br>
                  <a class="text-sm text-gray-500">${data[x].desc_video}</a>
                </div>
            </div>
            `
            document.getElementById('videos').innerHTML += videoHTML
        }
    }
}

constructVideos()