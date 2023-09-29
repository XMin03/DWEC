let opcion;
do {
    opcion = parseInt(prompt("  1.- Proyecto que pida dos números y que nos diga cual es mayor, menor o si son iguales.\n\
    Realizar el ejercicio con estructuras if y con el operador condicional ternario.\n\
    2. - Mejora el ejercicio anterior.Si los números no son número o son menores o iguales a cero,\n\
        nos los vuelva a pedir.Podéis utilizar la función isNaN aunque no es necesario.\n\
    3. - Utilizando un bucle, mostrar la suma y la media de los números introducidos hasta\n\
    introducir un número negativo y ahí mostrar el resultado.\n\
    4. - Hacer un programa que muestre todos los números entre dos números introducidos por el\n\
    usuario.\n\
    5. - Mostrar todos los números impares que hay entre dos números introducidos por el usuario.\n\
    6. - Mostrar todos los números divisores de un numero introduce en prompt\n\
    7. - Que nos diga si un número es par o impar.\n\
     Ventana prompt\n\
     Si no es válido que nos pida de nuevo el numero\n\
    8. - Que muestre la tabla de multiplicar de un valor introducido por pantalla.\n\
    0. - Salir."));
    switch (opcion) {
        case 1:
            ej1();
            break;
        case 2:
            ej2();
            break;
        case 3:
            ej3();
            break;
        case 4:
            ej4();
            break;
        case 5:
            ej5();
            break;
        case 6:
            ej6();
            break;
        case 7:
            ej7();
            break;
        case 8:
            ej8();
            break;
    }
} while (opcion != 0);

function ej1() {
    let num1 = parseInt(prompt("Introduce el primer número: "));
    let num2 = parseInt(prompt("Introduce el segundo número: "));
    if (num1 > num2) {
        alert("El número mayor es " + num1);
    } else if (num2 > num1) {
        alert("El número mayor es " + num2);
    } else {
        alert("Los dos números son iguales.")
    }
}

function ej2() {
    let num1;
    let num2;
    do {
        num1 = parseInt(prompt("Introduce el primer número(1..*): "));
    } while (num1 <= 0 || isNaN(num1));
    do {
        num2 = parseInt(prompt("Introduce el segundo número(1..*): "));
    } while (num2 <= 0 || isNaN(num2));
    if (num1 > num2) {
        alert("El número mayor es " + num1);
    } else if (num2 > num1) {
        alert("El número mayor es " + num2);
    } else {
        alert("Los dos números son iguales.")
    }
}

function ej3() {
    let num;
    let tot = 0;
    let cont = 0;
    do {
        num = parseInt(prompt("Introduce un número(negativo para salir): "));
        if (!isNaN(num) && num >= 0) {
            tot += num;
            cont++;
        }
    } while (num >= 0 || isNaN(num));
    alert(tot / cont);
}

function ej4() {
    let num1;
    let num2;
    do {
        num1 = parseInt(prompt("Introduce el primer número: "));
    } while (isNaN(num1));
    do {
        num2 = parseInt(prompt("Introduce el segundo número: "));
    } while (isNaN(num2));
    let res = [];
    if (num1 < num2) {
        for (let index = num1 + 1; index < num2; index++) {
            res.push(index);
        }
    } else {
        for (let index = num1 - 1; index > num2; index--) {
            res.push(index);
        }
    }
    alert("Numeros entre " + num1 + " y " + num2 + ": " + res);
}

function ej5() {
    let num1;
    let num2;
    do {
        num1 = parseInt(prompt("Introduce el primer número: "));
    } while (isNaN(num1));
    do {
        num2 = parseInt(prompt("Introduce el segundo número: "));
    } while (isNaN(num2));
    let res = [];
    if (num1 < num2) {
        for (let index = num1 + 1; index < num2; index++) {
            if (index % 2 != 0) {
                res.push(index);
            }
        }
    } else {
        for (let index = num1 - 1; index > num2; index--) {
            if (index % 2 != 0) {
                res.push(index);
            }
        }
    }
    alert("Numeros impares entre " + num1 + " y " + num2 + ": " + res);
}

function ej6() {
    let num;
    do {
        num = parseInt(prompt("Introduce un número: "));
    } while (num <= 0 || isNaN(num));
    let res = [1];
    for (let index = 2; index <= num; index++) {
        if (num % index == 0) {
            res.push(index);
        }
    }
    alert("Los números divisores de " + num + " son: " + res)
}

function ej7() {
    let num;
    do {
        num = parseInt(prompt("Introduce un número: "));
    } while (isNaN(num) || num == 0);
    alert("El numero " + num + " es un numero " + (num % 2 == 0 ? "par" : "impar"));
}

function ej8() {
    let num;
    do {
        num = parseInt(prompt("Introduce un número(1-10): "));
    } while (num < 1 || num > 10);
    let res = [];
    for (let index = 1; index < 10; index++) {
        res.push(+num + "x" + index + "=" + num * index);
    }
    alert(res);
}