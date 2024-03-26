import { success } from '../components/success.js'
import { failure } from '../components/failure.js'

function clearForm(){
    let inputs = document.querySelectorAll('input');
    let textarea = document.querySelector('textarea');
    const videoElement = document.querySelector('video');
    const videoImage = document.querySelector("#picture_image");
    const buttonSubmit = document.querySelector("#buttonSubmit");
    const videoImageTxt = "Escolha um vídeo";

    inputs.forEach(input => {
        input.value = ''
    });
    textarea.value = '';
    buttonSubmit.value = 'Upload';
    videoElement.remove();
    videoImage.innerHTML = videoImageTxt;
}

function uploadVideo(){
    const form = document.querySelector('.form');
    const video = document.querySelector('.video');
    
    
    form.addEventListener('submit', async event =>{
        event.preventDefault();

        const result = document.querySelector('#result');
    
        const formData = new FormData(form);
        formData.append('video', video.files[0])
    
        const resultado = await fetch('http://localhost:3000/video/upload', {
            method: 'POST',
            body: formData
        })

        const retorno = await resultado.json();
        console.log(retorno);

        const successHTML = success();
        const failureHTML = failure();

        console.log(result)

        if(retorno == "Sucesso!"){
            result.innerHTML = "";
            result.innerHTML = successHTML;
        }
        else{
            result.innerHTML = "";
            result.innerHTML = failureHTML;
        }

        clearForm()
    })      
}

uploadVideo()