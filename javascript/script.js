// Il programma dovrà chiedere all’utente il numero di chilometri che vuole
// percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai km (0.21 € al km), ma va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65.

// chiediamo età e km da percorrere al passeggero e stampiamo
var passengersYearsOld = parseInt(prompt('Buongiorno! Quanti anni ha?'));
console.log(passengersYearsOld);
var passengersKm = parseInt(prompt('Quanti km vorrebbe percorrere nella sua tratta?'));
console.log(passengersKm);

// calcoliamo il prezzo del biglietto in base alle prime informazioni
var ticketPriceForKm = 0.21;
var ticketPrice = passengersKm * ticketPriceForKm;
console.log(ticketPrice);

// calcoliamo il prezzo del biglietto in base all'età dei passeggeri
if (passengersYearsOld <= 18) {
  console.log(ticketPrice - ((ticketPrice * 20) / 100));
} else if (passengersYearsOld >= 65) {
  console.log(ticketPrice - ((ticketPrice * 40) / 100));
}
