const imagem = document.getElementById("#imagem");
const textoSobreposto = document.querySelector(".sobreposto");

imagem.addEventListener("load", function () {
  textoSobreposto.style.height = `${imagem.offsetHeight}px`;
});
