function calcular() {
  let num = document.getElementById("num");
  let tabe = document.getElementById("tab");
  if (num.value.length == 0) {
    alert("Por favor, digite um número!");
  } else {
    let n = Number(num.value);
    let c = 1;
    tabe.innerHTML = "";
    while (c <= 10) {
      let item = document.createElement("option");
      item.text = `${n} x ${c} = ${n * c}`;

      tabe.appendChild(item);
      c++;
    }
  }
}
