function contar() {
  var inicio = document.getElementById("ti");
  var fim = document.getElementById("tf");
  var passo = document.getElementById("tp");
  var res = document.getElementById("res");
  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    alert("[ERRO] Preencha os dados");
  } else {
    res.innerHTML = "Contando:";
    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);

    if (i < f) {
      for (let c = i; c <= f; c += p) {
        res.innerHTML += ` ${c} \u{1F449}`;
      }
      res.innerHTML += ` \u{1F3C1}`;
    } else {
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += `${c} \u{1F449}`;
      }
      res.innerHTML += `\u{1F3C1}`;
    }
  }
}
