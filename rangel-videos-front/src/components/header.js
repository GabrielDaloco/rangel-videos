function constructHeader(){
    const headerHTML = `
    <div class="border-solid border-b-4 border-black flex flex-1 place-content-between px-2 py-1 text-lg items-center">
        <a href="./index.html">rangel-videos</a>
        <div class="flex items-center gap-2 ">
          <div class="border-solid border-black border-l-2 h-8"></div>
          <a href="upload.html" class="bg-lime-500 border-solid border-2 border-black rounded-md p-1 hover:cursor-pointer">Upload</a>
        </div>
    </div>
    `

    document.getElementById('header').innerHTML = headerHTML
}

constructHeader()