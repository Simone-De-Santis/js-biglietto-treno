/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km(0.21 € al km)
va applicato uno sconto del 20 % per i minorenni
va applicato uno sconto del 40 % per gli over 65.
L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

console.log("jsok");




var distanceToTravel = prompt("distanza da percorrere(km)")
var passengerAge = prompt("età del passeggero(anni compiuti)")
var ticketPrice = 0.21
var ticketPriceTotal =

    console.log("distanza da percorrere:", distanceToTravel)
console.log("età passegero:", passengerAge)
console.log("prezzo biglietto per km :", ticketPrice)

if (passengerAge < 18) {
    ticketPriceTotal = (distanceToTravel * ticketPrice) - (((distanceToTravel * ticketPrice) * 20) / 100)
} else if (passengerAge > 64) {
    ticketPriceTotal = (distanceToTravel * ticketPrice) - (((distanceToTravel * ticketPrice) * 40) / 100)
} else {
    ticketPriceTotal = distanceToTravel * ticketPrice

}
console.log("prezzo finale con offerta applicata", ticketPriceTotal);

var inTotalPrice = document.getElementById("total-price-ticket");
inTotalPrice.innerHTML = ticketPriceTotal;

var inKm = document.getElementById("km");
inKm.innerHTML = distanceToTravel;

var inAge = document.getElementById("age");
inAge.innerHTML = passengerAge;


