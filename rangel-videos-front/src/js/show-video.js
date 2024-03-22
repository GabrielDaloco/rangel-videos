const inputFile = document.querySelector("#picture_input");
const videoImage = document.querySelector("#picture_image");
const videoImageTxt = "Escolha um vídeo";
videoImage.innerHTML = videoImageTxt;

inputFile.addEventListener("change", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img = document.createElement("video");
      img.src = readerTarget.result;
      img.classList.add("picture__img");

      videoImage.innerHTML = "";
      videoImage.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    videoImage.innerHTML = videoImageTxt;
  }
});
