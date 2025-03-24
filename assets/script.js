// Area
function algoArea() {
    const a = document.getElementById("length").value;
    const b = document.getElementById("width").value;

    if (a > 0 && b > 0) {
        const area = a * b;
        document.getElementById("resultArea").textContent = "Área do Retângulo: " + area;
    } else {
        document.getElementById("resultArea").textContent = "Data invalida.";
    }
}

// Fatorial
function algoFat() {
    const number = parseInt(document.getElementById("numFat").value);

    
    if (number < 0) {
        document.getElementById("resultFat").textContent = "O fatorial não está definido para números negativos.";
        return;
    }

    let factorial = 1;
    for (let i = 2; i <= number; i++) {
        factorial *= i;
    }

    document.getElementById("resultFat").textContent = "O fatorial de " + number + " é: " + factorial;
}

// Fibonnaci
function algoFib() {
    const n = parseInt(document.getElementById("numFib").value);

    if (isNaN(n)) {
        document.getElementById("resultFib").textContent = "Dado inválido.";
        return;
    }
    if (n <= 0) {
        document.getElementById("resultFib").textContent = "Por favor, insira um número positivo.";
        return;
    }

    let fibonacci = [0, 1]; 

    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    document.getElementById("resultFib").textContent = fibonacci.slice(0, n);
}

// Imposto
function algoImposto() {
    const n = parseFloat(document.getElementById("salario").value);

    if (isNaN(n)) {
        document.getElementById("resultImp").textContent = "Dados inválidos.";
        return;
    }

    const a_1 = 75 / 1000;
    const a_2 = 15 / 100;
    const a_3 = 225 / 1000;
    const a_4 = 275 / 1000;

    let p1 = n * a_1;
    let p2 = n * a_2;
    let p3 = n * a_3;
    let p4 = n * a_4;

    if (n >= 2259.21 && n <= 2836.65) {
        document.getElementById("resultImp").textContent = "Parcela a deduzir será igual a: R$" + p1;
    } else if (n > 2836.65 && n <= 3751.05) {
        document.getElementById("resultImp").textContent = "Parcela a deduzir será igual a: R$" + p2;
    } else if (n > 3751.05 && n <= 4664.68) {
        document.getElementById("resultImp").textContent = "Parcela a deduzir será igual a: R$" + p3;
    } else if (n > 4664.68) {
        document.getElementById("resultImp").textContent = "Parcela a deduzir será igual a: R$ " + p4;
    } else if (n >= 0 && n < 2259.21) {
        document.getElementById("resultImp").textContent = "Você está isento de pagar imposto de renda.";
    }

}

// Maior
function algoMaior() {
    const a = parseFloat(document.getElementById("numA").value);
    const b = parseFloat(document.getElementById("numB").value);
    const c = parseFloat(document.getElementById("numC").value);
    let menor, maior;

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById("resultMaior").textContent = "Dados inválidos.";
        return; 
    }

    if (a > b && a > c) {
        maior = a;
    } else if (b > a && b > c) {
        maior = b;
    } else {
        maior = c;
    }

    if (a < b && a < c) {
        menor = a;
    } else if (b < a && b < c) {
        menor = b;
    } else {
        menor = c;
    }

    document.getElementById("resultMaior").textContent = `O maior número é ${maior} e o menor é ${menor}.`;
}



// Media
function algoMedia() {
    const a = parseFloat(document.getElementById("medA").value);
    const b = parseFloat(document.getElementById("medB").value);
    const c = parseFloat(document.getElementById("medC").value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById("resultMedia").textContent = "Dados inválidos.";
        return;
    }

    const med = a + b + c /3;

document.getElementById("resultMedia").textContent = `A media é ${med}.`;
}

// Primo
function algoPrimo() {
    const n = parseFloat(document.getElementById("primo").value);

    if (isNaN(n)) {
        document.getElementById("resultPrimo").textContent = "Dados inválidos.";
        return;
    }
  
    if (n <= 1) {
      document.getElementById("resultPrimo").textContent = `${n} não é um número primo.`;
      return; 
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        document.getElementById("resultPrimo").textContent = `${n} não é um número primo.`;
        return; 
      }
    }

    document.getElementById("resultPrimo").textContent = `${n} é um número primo.`;
  }

// Ordenação
function algoOrde() {
    const a = parseFloat(document.getElementById("ordA").value);
    const b = parseFloat(document.getElementById("ordB").value);
    const c = parseFloat(document.getElementById("ordC").value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById("resultOrde").textContent = "Dados inválidos.";
        document.getElementById("resultOrde1").textContent = "";
        return;
    }
    let num = [a, b, c];
  
    let descending = [...num].sort((x, y) => y - x);
  
    document.getElementById("resultOrde").textContent = `Números em ordem decrescente: ${descending[0]}, ${descending[1]}, ${descending[2]}.`;
    document.getElementById("resultOrde1").textContent = `Números em ordem crescente: ${descending[2]}, ${descending[1]}, ${descending[0]}.`;
}

// Par
function algoPar() {
    const n = document.getElementById("numPar").value;

    if (n <= 0) {
      document.getElementById("resultPar").textContent = "Dados inválidos.";
      return;
    }

    const i = parseFloat(n);
    if (i % 2 === 0) {
      document.getElementById("resultPar").textContent = `O número ${i} é par`;
    } else {
      document.getElementById("resultPar").textContent = `O número ${i} é impar`;
    }
  }
  
// Tabuada
// Tive que usar innerHTML ao inves de textContent aqui. Espero que isso não cause problemas.
function algoTab() {
    const tabuada = document.getElementById("tabuada").value;
    const result = document.getElementById("resultTab");

    result.innerHTML = "";

    function operacao(sinal) {
      result.innerHTML += `
        <hr>
        <b>${sinal}</b><br>
        <hr>
      `;
    }

    for (let y = 1; y <= 4; y++) {
      if (y === 1) {
        operacao("ADIÇÃO");
      } else if (y === 2) {
        operacao("SUBTRAÇÃO");
      } else if (y === 3) {
        operacao("MULTIPLICAÇÃO");
      } else {
        operacao("DIVISÃO");
      }

      for (let x = 1; x <= 10; x++) {
        if (y === 1) {
          result.innerHTML += `${tabuada} + ${x} = ${tabuada + x}<br>`;
        } else if (y === 2) {
          result.innerHTML += `${tabuada} - ${x} = ${tabuada - x}<br>`;
        } else if (y === 3) {
          result.innerHTML += `${tabuada} * ${x} = ${tabuada * x}<br>`;
        } else {
          result.innerHTML += `${tabuada} / ${x} = ${Math.round(tabuada / x * 100) / 100}<br>`;
        }
      }
      result.innerHTML += "<hr>";
    }
  }

