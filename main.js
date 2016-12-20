//prompt("Por favor, ingrese el número de horas trabajadas");

var puntosSquad = document.getElementById("puntosSquad");
var maxPuntos = document.getElementById("maxPuntos");
var divnota = document.getElementById("nota");


function calcular()
{
	if(maxPuntos*0.8 < puntosSquad)
	{
		//Si no es verdad hace esto
		nota.innerHTML = "Muy bien squad";
		document.getElementById("mensajes").innerHTML = '<div class="alert alert-danger">No se ingresaron valores</div>';
	}else{
		console.log("Horas");
		pagoSemanal = parseFloat(pagoHora.value) * parseFloat(horasTrabajadas.value);
		salida.innerHTML = pagoSemanal.toFixed(2);
	}



}