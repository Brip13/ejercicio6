console.log ('EJERCICIO A:');

var cantidadDeGatos=10;
var gatitos = ['😺', '😸', '😹'];

function mostrarGatitos(cantidad){
    for (var i=0; i<cantidad; i++){
        var emoji=gatitos [i%gatitos.length];
        console.log('Gato #' + (i+1) + emoji);
    }
}

mostrarGatitos(cantidadDeGatos);