console.log ('EJERCICIO C:');

var cantidadDeGatos=10;
var cantidadDePasos=4;

var gatitoBlanco = ['🐈'];
var gatitoNegro = ['🐈⬛'];
var pasos = ['🐾'];

    function mostrarGatitos(cantidadDeGatos, cantidadDePasos){
        for (var i=0; i<cantidadDeGatos; i++){
            var gatito = (i%2===0) ? gatitoBlanco : gatitoNegro;
            var resultado = 'Gato #' + (i+1) + ':' + gatito;

            for (var p=0; p<cantidadDePasos; p++){
                resultado += ' ' + pasos;
            }
            console.log(resultado);
        }
    }

    mostrarGatitos(cantidadDeGatos, cantidadDePasos);