console.log ('EJERCICIO B:');

var cantidadDeGatos=5;
var cantidadDePasos=3;

var gatito = ['🐈'];
var pasos = ['🐾'];

    function mostrarGatitos (cantidadDeGatos, cantidadDePasos){
        for (var i=0; i<cantidadDeGatos; i++){
            var resultado = 'Gato #' + (i+1) + ':' + gatito;

            for (var p=0; p<cantidadDePasos; p++){
                resultado += ' ' + pasos;
            }
            console.log(resultado);
        }
    }

    mostrarGatitos(cantidadDeGatos, cantidadDePasos);