// Codigo del cuadrado
console.group("Cuadrado");

// const ladoCuadrado = 5;
// const perimetroCuadrado = ladoCuadrado * 4;
// const areaCuadrado = ladoCuadrado * ladoCuadrado;

// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");
// console.log("El perimetro de mi cuadrado es: " + perimetroCuadrado + "cm");
// console.log("El area del cuadrado es: " + areaCuadrado + "cm²");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

// Codigo del triangulo
console.group("Triangulo");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

// console.log(
//     "Los lados del cuadrado miden: " +
//     ladoTriangulo1 +
//     "cm y la base mide: " +
//     baseTriangulo +
//     "cm"
// );
// console.log("La altura del triangulo es: " + alturaTriangulo + "cm");
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");
// console.log("El area del triangulo es: " + areaTriangulo + "cm²");

function perimetroTriangulo(lado, lado1, base) {
    return Number(lado) + Number(lado1) + Number(base);
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();

// Codigo del circulo
console.group("Circulo");

// const radioCirculo = 4;
// const diametroCirculo = radioCirculo * 2;
// const PI = Math.PI;
// const perimetroCirulo = diametroCirculo * PI;
// const areaCirculo = radioCirculo * radioCirculo * PI;

// console.log(
//     "El radio del circulo es: " +
//     radioCirculo +
//     "cm" +
//     " , su diametro " +
//     diametroCirculo +
//     "cm y PI es " +
//     PI
// );
// console.log("El perimetro del circulo es: " + perimetroCirulo + "cm");
// console.log("El area del circulo es: " + areaCirculo + "cm²");

function perimetroCirculo(radio) {
    return 2 * radio * Math.PI;
}

function areaCirculo(radio) {
    return radio * radio * Math.PI;
}

console.groupEnd();

// Aqui interactuamos con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const inputTriangulo = document.getElementById("InputTriangulo");
    // const value = inputTriangulo.value;
    const inputTrianguloI = document.getElementById("InputTrianguloI");
    // const value = inputTrianguloI.value;
    const inputTrianguloBase = document.getElementById("InputTrianguloBase");
    // const value = inputTrianguloBase.value;
    const perimetro = perimetroTriangulo(
        inputTriangulo.value,
        inputTrianguloI.value,
        inputTrianguloBase.value
    );
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const inputTrianguloBase = document.getElementById("InputTrianguloBase");
    // const value = inputTrianguloBase.value;
    const inputTrianguloAltura = document.getElementById("InputTrianguloAltura");
    // const value = inputTriangulo.value;
    const area = areaTriangulo(
        inputTrianguloBase.value,
        inputTrianguloAltura.value
    );
    alert(area);
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
}