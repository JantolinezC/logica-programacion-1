function pedirUnNumero(mensaje){
    let numero;
    do {
        numero = parseFloat(prompt(mensaje));
        if(isNaN(numero)) {
            alert("Introduce un número válido");
        }
    } while (isNaN(numero));
    return numero;
}

function pedirNumeros(){
    let num1, num2, num3;
    do {
        num1 = pedirUnNumero("Escribe el primer número:");
        num2 = pedirUnNumero("Escribe el segundo número:");
        num3 = pedirUnNumero("Escribe el tercer número:");

        if(num1 === num2 && num2 === num3){
            alert("Ingresa números diferentes");
        }
    }while ((num1 === num2 && num2 === num3));

    return [num1, num2, num3];
} 

let [num1, num2, num3] = pedirNumeros();
let [min, mid, max] = [num1, num2, num3].sort((a, b) => a - b);

document.getElementById("resultados").innerHTML = `
    <p>De mayor a menor: ${max}, ${mid}, ${min}</p>
    <p>De menor a mayor: ${min}, ${mid},${max}</p>
`; //Muestra el resultado en el DOM   
