var jugador1 = 'X';
var jugador2 = 'O';

console.log("Bienvenido al juego triqui");
console.log("");

var bandera = true;

while (bandera) {
    var opcion = parseInt(prompt('Ingrese 1 para "X" o 2 para "O": '));

    switch (opcion) {
        case 1:
            console.log("El jugador 1, jugará con: X");
            console.log("El jugador 2, jugará con: O");
            bandera = false;
            break;
        case 2:
            jugador1 = 'O';
            jugador2 = 'X';
            console.log("El jugador 1, jugará con: O");
            console.log("El jugador 2, jugará con: X");
            bandera = false;
            break;
        default:
            alert("Error. Por favor, elija de nuevo.");
            bandera = true;
            break;
    }
}

console.log("Esta es la tabla de juego");
console.log("_1_|_2_|_3_");
console.log("_4_|_5_|_6_");
console.log("_7_|_8_|_9_");
console.log("");

var matriz = [
    ['_', '_', '_'],
    ['_', '_', '_'],
    ['_', '_', '_']
];

function grafica() {
    console.log("");
    console.log("Esta es la tabla de juego");
    console.log("_" + matriz[0][0] + "_|_" + matriz[0][1] + "_|_" + matriz[0][2] + "_");
    console.log("_" + matriz[1][0] + "_|_" + matriz[1][1] + "_|_" + matriz[1][2] + "_");
    console.log("_" + matriz[2][0] + "_|_" + matriz[2][1] + "_|_" + matriz[2][2] + "_");
    console.log("");
}

function validarFilas() {
    for (var i = 0; i < 3; i++) {
        if (matriz[i][0] !== '_' && matriz[i][0] === matriz[i][1] && matriz[i][1] === matriz[i][2]) {
            console.log("¡El jugador " + jugadorActual + " ha ganado!");
            return true;
        }
    }
    return false;
}

function validarColumnas() {
    for (var j = 0; j < 3; j++) {
        if (matriz[0][j] !== '_' && matriz[0][j] === matriz[1][j] && matriz[1][j] === matriz[2][j]) {
            console.log("¡El jugador " + jugadorActual + " ha ganado!");
            return true;
        }
    }
    return false;
}

function validarDiagonales() {
   
    if (matriz[0][0] !== '_' && matriz[0][0] === matriz[1][1] && matriz[1][1] === matriz[2][2]) {
        console.log("¡El jugador " + jugadorActual + " ha ganado!");
        return true;
    }
    if (matriz[0][2] !== '_' && matriz[0][2] === matriz[1][1] && matriz[1][1] === matriz[2][0]) {
        console.log("¡El jugador " + jugadorActual + " ha ganado!");
        return true;
    }
    return false;
}

for (var movimientosRealizados = 0; movimientosRealizados < 9; movimientosRealizados++) {
    var jugadorActual = (movimientosRealizados % 2 === 0) ? jugador1 : jugador2;

    console.log("Turno del jugador: " + jugadorActual);
    grafica();

    var posicion = parseInt(prompt(jugadorActual + ', ingrese la posición (1-9): '));

    var fila, columna;
    switch (posicion) {
        case 1: fila = 0; columna = 0; break;
        case 2: fila = 0; columna = 1; break;
        case 3: fila = 0; columna = 2; break;
        case 4: fila = 1; columna = 0; break;
        case 5: fila = 1; columna = 1; break;
        case 6: fila = 1; columna = 2; break;
        case 7: fila = 2; columna = 0; break;
        case 8: fila = 2; columna = 1; break;
        case 9: fila = 2; columna = 2; break;
        default:
            console.log("Posición inválida. Intenta de nuevo.");
            movimientosRealizados--;
            continue;
    }

    if (matriz[fila][columna] !== '_') {
        console.log("Esta posición ya está ocupada. Intenta de nuevo.");
        movimientosRealizados--;
        continue;
    }

    matriz[fila][columna] = jugadorActual;

 
    if (validarFilas() || validarColumnas() || validarDiagonales()) {
        break;
    }
}

grafica();


