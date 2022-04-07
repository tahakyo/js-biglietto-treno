// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// ::il prezzo del biglietto è definito in base ai km (0.21 € al km)
// ::va applicato uno sconto del 20% per i minorenni
// ::va applicato uno sconto del 40% per gli over 65.


// DICHIARAZIONI
// chiedi all'utente il numero di km che vuole percorrere e la sua età
const kmNumber = parseInt(prompt('Qanti chilometri'));
const ageNumber = parseInt(prompt('Quanti anni hai'));
console.log(kmNumber, typeof(kmNumber), ageNumber, typeof(ageNumber));

// ELABORAZIONE
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// calcolo del prezzo del biglietto in base ai km
const ticketPrice = kmNumber * 0.21;
console.log(ticketPrice, typeof(ticketPrice));
const euroSymbol = ('€');
let discount;

if (ageNumber < 18) {
    // ::va applicato uno sconto del 20% per i minorenni
    discount = (ticketPrice * 20) / 100;
    console.log(discount, typeof(discount));
} else if (ageNumber > 65) {
    // ::va applicato uno sconto del 40% per gli over 65.
    discount = (ticketPrice * 40) / 100;
    console.log(discount, typeof(discount));
} else if (ageNumber >= 18 && ageNumber < 65) {
    discount = 0;
    console.log(discount, typeof(discount))
}
// calcolo del prezzo dopo lo sconto
let finalPrice = ticketPrice - discount;
console.log(finalPrice, typeof(finalPrice));
// Output prezzo finale con massimo ue decimali
const humanPrice = finalPrice.toFixed(2);
// Stampiamo il risultato
document.getElementById("result").innerHTML = humanPrice + euroSymbol;
