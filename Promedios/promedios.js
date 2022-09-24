let list = [];
let orderList = list;

function addDataArray() {
    const inputAddData = document.getElementById("InputAddData");
    if (inputAddData.value == '') {
        alert("Por favor ingresa un numero.");
    } else {
        const dato = parseInt(inputAddData.value);
        inputAddData.value = '';
        list.push(dato);
        printData(list);
    }
}

function printData(list) {
    const dataList = document.getElementById("dataList");
    const dato = document.createElement("dato");
    dato.innerHTML = `<li> ${list[list.length - 1]} </li>`;
    dataList.appendChild(dato);
}

function calculate() {
    orderList = orderList.sort((a, b) => a - b);
    calcularMediaAritmetica();
    calcularMedianaAritmetica();
    calcularModaAritmetica();
}

function calcularMediaAritmetica() {
    const average = document.getElementById("average");
    let sumaList = 0;
    for (let i = 0; i < list.length; i++) {
        sumaList = sumaList + list[i];
    }
    const promedioList = sumaList / list.length;
    average.innerText = "La media de la lista de datos es: " + promedioList;
}

function calcularMedianaAritmetica() {
    const median = document.getElementById("median");
    let i = parseInt(orderList.length / 2);
    if (orderList.length % 2 != 0) {
        median.innerText = "La mediana es: " + orderList[i];
    } else {
        const mediana = (orderList[i - 1] + orderList[i]) / 2;
        median.innerText = "La mediana es: " + mediana;
    }
}

function calcularModaAritmetica() {
    const moda = document.getElementById("moda");
    let listCount = {};
    orderList.map(function(elemento) {
        if (listCount[elemento]) {
            listCount[elemento] += 1;
        } else {
            listCount[elemento] = 1;
        }
    });
    let arrayOrdenado = Object.entries(listCount).sort(
        function(elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    );
    moda.innerText = "La moda de la lista es el numero: " + arrayOrdenado[arrayOrdenado.length - 1][0] + " y se repite " + arrayOrdenado[arrayOrdenado.length - 1][1];
}