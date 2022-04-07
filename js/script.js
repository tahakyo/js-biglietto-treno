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
console.log(ticketPrice, typeof(ticketPrice))
