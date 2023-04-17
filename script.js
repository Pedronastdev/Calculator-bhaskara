function calcular() {
  alert("funcionou");
  let a = parseFloat(document.getElementById("a").value);

  let b = parseFloat(document.getElementById("b").value);

  let c = parseFloat(document.getElementById("c").value);

  let x = 0,
    x1 = 0,
    x2 = 0;

  let delta = b ** 2 - 4 * a * c;
  console.log("o delta: " + delta);

  if (delta == 0) {
    alert("Delta é igual a " + delta);
  }
  if (delta < 0) {
    alert(
      "Não existem raizes negativas no conjunto dos numeros naturais = " + delta
    );
  } else {
    alert("Delta é igual a " + delta);
    x = Math.sqrt(delta);
    console.log("x: " + x);
    console.log("a raiz de Delta: " + x);
    x1 = (-b + x) / (2 * a);

    console.log("a raiz de x1: " + x1);
    alert("O resultado de x1 é " + x1);
    x2 = (-b - x) / (2 * a);

    alert("O resultado de x2 é " + x2);
    console.log("a raiz de x2: " + x2);
  }
}
