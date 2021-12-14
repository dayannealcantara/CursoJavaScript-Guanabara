// alert ('olá')
function carregar() {
  var mensagem = document.getElementById("msg");
  var imagem = document.getElementById("imagem");
  var data = new Date();
   var hora = data.getHours()
  
  mensagem.innerHTML = `Agora são ${hora}h`;
  if (hora >= 0 && hora < 12) {
    imagem.src = 'fotodia.jpeg';
    document.body.style.background = '#e2cd9f'
  } else if (hora >= 12 && hora < 18) {
    imagem.src = "tarde.jpg";
    document.body.style.background = '#b9846f'
  } else {
    imagem.src = "fotonoite.jpg";
    document.body.style.background = '#515154'
  }
}
