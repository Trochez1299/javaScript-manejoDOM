let persons = colombia;

function addPerson() {
    const inputName = document.getElementById("inputName");
    const inputSalary = document.getElementById("inputSalary");
    if (inputName.value == '' || inputSalary.value == '') {
        alert("Ingresa los valores.");
    } else {
        persons.push({
            name: inputName.value,
            salary: inputSalary.value
        });
        printPerson();
    }
}

function printPerson() {
    const listPersons = document.getElementById("listPersons");
    const person = document.createElement("person");
    person.innerHTML = `<li> ${ persons[persons.length - 1].name } ${ persons[persons.length - 1].salary } </li>`;
    listPersons.appendChild(person);
}

function listTop10() {
    const top10 = persons.map(
        function(person) {
            return person.salary;
        }
    );
    const inputTop10 = document.getElementById("inputTop10");
    const orderTop10 = top10.sort((a, b) => a - b);
    ltop10 = orderTop10.splice(parseInt((orderTop10.length * 90) / 100), orderTop10.length);
    const dato = document.createElement("dato");
    dato.innerHTML = `<li> ${ltop10[ltop10.length - 1]} </li>`;
    inputTop10.appendChild(dato);
    console.log(top10);
    // console.log(orderTop10);
    console.log(ltop10);
}

// const colSalaries = colombia.map(
//     function(persona) {
//         return persona.salary;
//     }
// );

// const colSalariesOrder = colSalaries.sort((a, b) => a - b);
// console.log(colSalaries);

// function calcularMedianaAritmetica(lista) {
//     let i = parseInt(lista.length / 2);
//     if (lista.length % 2 != 0) {
//         return lista[i];
//     } else {
//         numeroMediana1 = lista[i - 1];
//         numeroMediana2 = lista[i];
//         return calcularMediaAritmetica([numeroMediana1, numeroMediana2]);
//     }
// }

// function calcularMediaAritmetica(lista) {
//     let sumaLista = 0;
//     for (let i = 0; i < lista.length; i++) {
//         sumaLista = sumaLista + lista[i];
//     }
//     const promedioLista = sumaLista / lista.length;
//     return promedioLista;
// }

// function calcularMediaTop10(lista) {
//     colSalariesTop10 = lista.splice(parseInt((lista.length * 90) / 100), lista.length);
//     console.log(colSalariesTop10);
// }

// console.log(calcularMedianaAritmetica(colSalariesOrder));
// console.log(calcularMediaTop10(colSalariesOrder));