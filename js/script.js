/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km(0.21 € al km)
va applicato uno sconto del 20 % per i minorenni
va applicato uno sconto del 40 % per gli over 65.
L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

// console.log("js ok");



var distanceToTravel = parseInt(prompt("distanza da percorrere(km)"))
var passengerAge = parseInt(prompt("età del passeggero(anni compiuti)"))
var ticketPrice = 0.21
var ticketPriceTotal = ""
var discountMessage = ("Ti è stato applicato uno sconto del: ")
// console.log("distanza da percorrere:", distanceToTravel)
// console.log("età passegero:", passengerAge)
// console.log("prezzo biglietto per km :", ticketPrice)

// discount logic
var hasDiscount = false

// ----------------------------
if (passengerAge < 18) {
    ticketPriceTotal = (distanceToTravel * ticketPrice) - (((distanceToTravel * ticketPrice) * 20) / 100);
    discountMessage += "20 %"
    var hasDiscount = true

} else if (passengerAge > 64) {
    ticketPriceTotal = (distanceToTravel * ticketPrice) - (((distanceToTravel * ticketPrice) * 40) / 100)
    discountMessage += "40 %"
    var hasDiscount = true

} else {
    ticketPriceTotal = distanceToTravel * ticketPrice
}

// inserimento messaggio discount in html
// console.log(hasDiscount)
if (hasDiscount == true) {
    var inDiscountMessage = document.getElementById("discount-message");
    inDiscountMessage.innerHTML = discountMessage

}






// console.log("prezzo finale con offerta applicata", ticketPriceTotal);

var inTotalPrice = document.getElementById("total-price-ticket");
inTotalPrice.innerHTML = ticketPriceTotal.toFixed(2);

var inKm = document.getElementById("km");
inKm.innerHTML = distanceToTravel;

var inAge = document.getElementById("age");
inAge.innerHTML = passengerAge;



