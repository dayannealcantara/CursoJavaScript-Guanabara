// alert ('olá')
function carregar() {
  var mensagem = document.getElementById("msg");
  var imagem = document.getElementById("img");
  var data = new Date();
   var hora = data.getHours()
//   var hora = 19;
  mensagem.innerHTML = `Agora são ${hora}h`;
  if (hora >= 0 && hora < 12) {
    document.imagem.src = 'dia.jpeg';
    document.body.style.background = '#e2cd9f'
  } else if (hora >= 12 && hora < 18) {
    imagem.src = "tarde.jpg";
    document.body.style.background = '#b9846f'
  } else {
    imagem.src = "noite.jpg";
    document.body.style.background = '#515154'
  }
}
