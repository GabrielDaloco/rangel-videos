async function getVideo(){
    try{
        let url = new URL(window.location.href)
        let params = new URLSearchParams(url.search);
        let v = params.get('v')
        const resultado = await fetch(`http://localhost:3000/video/${v}`)
        const data = await resultado.json()

        return (data)
    }
    catch(err){
        console.log(err)
    }
}

async function constructVideo(){
    data = await getVideo()

    if(data.length == 0){
        document.getElementById('video').innerHTML = "<a class='text-5xl mt-10'>Não foi encontrado</a>"
    }
    else{
        const videoHTML = `
            <div class="flex-col my-4 max-w-[1000px]">
                <video src="http://localhost:3000/${data[0].video_url}"
                class="aspect-video bg-slate-300 border-solid border-2 border-black rounded-xl" width="1000px" controls></video>
                <div class="mt-4">
                    <h1 class="text-3xl">${data[0].nome_video}</h1>
                    <a class="text-xl text-gray-500">${data[0].desc_video}</a>
                </div>
            </div>
        `
        document.getElementById('video').innerHTML += videoHTML
    }
}

constructVideo()