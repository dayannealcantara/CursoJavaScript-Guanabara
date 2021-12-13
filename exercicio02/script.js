
function verificar(){
    var data= new Date();
    var ano = data.getFullYear();
    var aano = document.getElementById('ano')
    var res = document.querySelector('div#res')
    if(aano.value.length == 0 || aano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByName('sex')
       var idade = ano - Number(aano.value)
       res.innerHTML = `Idade calculada: ${idade}`
       var genero = ''
       if ( fsex[0].checked) {
           genero = 'Homem'
       } else if ( fsex[1].checked){
           genero = 'Mulher'
       }
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`

     }
    }
