let num = document.querySelector("input#num");
let select = document.querySelector("select#select");
let res = document.querySelector("div#res");
let numeros = [];

function adicionar() {
  for (let i = 0; i <= numeros.length; i++) {
    if (
      num.value.length === 0 ||
      num.value < 1 ||
      num.value > 100 ||
      numeros[i] === Number(num.value)
    ) {
      alert("Valor inválido ou já encontrado na lista.");
      return null;
    }
  }

  let resOption = document.createElement("option");
  resOption.text = `Valor ${num.value} adicionado.`;
  select.appendChild(resOption);

  numeros.push(Number(num.value));

  let resultado = document.querySelector("div#resultado");
  if (resultado !== null) {
    resultado.remove();
  }

  num.value = "";
  num.focus();
}

function finalizar() {
  let calculo = document.createElement("div");
  calculo.id = "resultado";

  if (numeros.length === 0) {
    alert("Adicione valores antes de finalizar!");
  } else {
    let max = 0;
    let min = 100;
    let soma = 0;
    let media = 0;
    for (let i = 0; i < numeros.length; i++) {
      soma += numeros[i];
      if (max < numeros[i]) {
        max = numeros[i];
      }
      if (min > numeros[i]) {
        min = numeros[i];
      }
    }
    media = soma / numeros.length;

    calculo.innerHTML = `<p>Ao todo temos ${numeros.length} números cadastrados.</p>`;
    calculo.innerHTML += `<p>O maior valor informado foi ${max}</p>`;
    calculo.innerHTML += `<p>O menor valor informado foi ${min}</p>`;
    calculo.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
    calculo.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`;

    res.appendChild(calculo);
  }
}
