
document.querySelectorAll("input[type='number']").forEach(input => {
    input.addEventListener("keypress", function (e) {
        const char = String.fromCharCode(e.which);
        const regex = /[0-9.-]/
        if (!regex.test(char)) {
            e.preventDefault();
        }
    });
});


document.querySelectorAll("form").forEach(form => {
    form.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            const button = form.querySelector("button[type='button']");
            if (button) button.click();
        }
    });
});

function mostrarTabuada() {
    const valor = document.getElementById("tabuada").value;

    if (valor === '' || isNaN(valor)) {
        document.querySelectorAll('.respostaTabuada').forEach(div => {
            div.style.display = 'none';
        });
        return;
    }

    tabAdd();
    tabSub();
    tabMul();
    tabDiv();

    document.querySelectorAll('.respostaTabuada').forEach(div => {
        div.style.display = 'block';
    });
}

window.onload = function () {
    document.querySelectorAll('.respostaTabuada').forEach(div => {
        div.style.display = 'none';
    });
};


// Area
function algoArea() {
       
    const a = document.getElementById("length").value;
    const b = document.getElementById("width").value;

    if (a > 0 && b > 0) {
        const area = a * b;
        document.getElementById("resultArea").textContent = "Área do Retângulo: " + area.toFixed(2) + " m²";
    } else {
        document.getElementById("resultArea").textContent = "Dados inválidos.";
    }
}


// Fatorial
function algoFat() {
       
    const numInput = document.getElementById("numFat").value;
    const number = parseInt(numInput);
    
    if (!numInput || isNaN(number)) {
        document.getElementById("resultFat").textContent = "Dados Inválidos";
        return;
   }

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
        document.getElementById("resultFib").textContent = "Dados inválidos.";
        return;
    }
    
    if (n <= 0) {
        document.getElementById("resultFib").textContent = "Por favor, insira um número positivo.";
        return;
    } else if (n >= 15){
	document.getElementById("resultFib").innerHTML = "<p>O número é maior que desejado <br>Coloque um número entre 1 e 14!</p>";

    } else {

    let fibonacci = [0, 1]; 

    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

	document.getElementById("resultFib").textContent = fibonacci.slice(0, n);

    }
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

    const med = (a + b + c) /3;

    document.getElementById("resultMedia").textContent = `A media é ${med.toFixed(2)}.`;
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
        document.getElementById("resultOrde1").textContent = "Dados inválidos.";

        return;
    }
    let num = [a, b, c];
  
    let descending = [...num].sort((x, y) => y - x);
  
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

    function tabAdd() {
      const tabuada = Number(document.getElementById("tabuada").value);
      const result = document.getElementById("tabAdd");
  
  
	result.innerHTML = "<h3>ADIÇÃO</h3>";
      for (let x = 1; x <= 10; x++) {
        
          result.innerHTML += `${tabuada} + ${x} = ${(tabuada + x).toFixed(2)} <br>`
        }
        
    }
  
    function tabSub() {
      const tabuada = Number(document.getElementById("tabuada").value);
      const result = document.getElementById("tabSub");
  
  
      result.innerHTML = "<h3>SUBTRAÇÃO</h3>";
      for (let x = 1; x <= 10; x++) {
        
          result.innerHTML += `${tabuada} - ${x} = ${(tabuada - x).toFixed(2)} <br>`
        }
        
    }
    
    function tabMul() {
      const tabuada = Number(document.getElementById("tabuada").value);
      const result = document.getElementById("tabMul");
  
  
      result.innerHTML = "<h3>MULTIPLICAÇÃO</h3>";
      for (let x = 1; x <= 10; x++) {
        
          result.innerHTML += `${tabuada} * ${x} = ${(tabuada * x).toFixed(2)} <br>`
        }
        
    }
  
    function tabDiv() {
      const tabuada = Number(document.getElementById("tabuada").value);
      const result = document.getElementById("tabDiv");
  
  
      result.innerHTML = "<h3>DIVISÃO</h3>";
      for (let x = 1; x <= 10; x++) {
        
          result.innerHTML += `${tabuada} / ${x} = ${(tabuada / x).toFixed(2)} <br>`
        }
        
    }
  
  
