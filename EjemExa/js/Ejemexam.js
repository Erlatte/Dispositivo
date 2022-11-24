

var fechas = [] ;
var noches = [];
var precios = [];
var reservas = [];
var reserva = document.querySelector('#reserva');
reserva.addEventListener('click', function(){
    
    var valor1 = document.querySelector('#fecha').value;
    var valor2 = document.querySelector('#nº').value;
    var valornoche = 290;

    var sum1 = parseInt(290) * parseInt(document.querySelector('#nº').value);

    precios.push(sum1);

    fechas.push(valor1);

    noches.push(valor2);
    
    document.querySelector('#reservas').innerHTML = 'Entrada: ' + fechas + 'Noches: ' + noches + 'Precio: ' + precios + '€';

    var valor2 = document.querySelector('#val2').value = null;
    var valornoche = document.add('290').value = null;
})