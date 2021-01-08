// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati (tadaaa!)
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
//
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Proviamo prima con pochi numeri, inserire millemila numeri ogni volta potrebbe essere un po’ scocciante .
// Le validazioni e i controlli possiamo farli anche in un secondo momento.
// Ricordatevi che se non sappiamo quante volte dobbiamo fare una cosa ci serve…

// step 1  --- genero un numero casuale da 1 a 100

// FUNZIONE 1 GENERA NUMERI RANDOM

var min = 1;
var max = 100;

function randomNum(min,max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
 }

 // FUNZIONE 2 MI DICE SE HO GIA INSERITO UN NUMERO
 //
 // function insertNum(insertNumber) {
 //   if (num === num) {
 //     return true;
 //   }else {
 //     return false
 //   }
 // }
 // var numeroInserito = insertNum(insertNumber)


// / var randomNumber = randomNum(min,max) questa se la richiamo dentro un ciclo avra sempre quel valore cioe di un solo numero invece se la metto come var randomNum ecc mi ciclerà sempre un numero differente

 // cosi me ne stampa uno alla volta io ne voglio 16 casuali


 // step 2  --- voglio prendere 16 numeri  sempre casuali che mi sta generando la funzione sempre tra qui 100 e inserirli in un array ( vuoto)

// CICLO FOR O WHILE
// il ciclo while cicla fino a quando le condizioni non sono verificate in qeusto caso se gli diciamo che la lunghezza dell array deve essere di 16 ciclirà fino a quando non avra sedici numeri al suo interno

 var arrayNum = []
 var howManyNumber = 16

 while ( arrayNum.length < howManyNumber) {
   var randomNumber = randomNum(min,max)

  if ( !arrayNum.includes(randomNumber)) {
 arrayNum.push(randomNumber)
}
}
  console.log(arrayNum);

  // STEP 2 --- chiedo all utente di inserire 3 volte un numero sapendo che
  // L’utente non può inserire più volte lo stesso numero.

  // Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.

  // La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.

  var arrayUtente = []






   var i=0
  while (i<3) {
    var num = parseInt(prompt('inserisci numero da 1 a 100'))
    i++

    if (arrayNum.includes(num)) {
      alert('termina gioco')
    }else if (arrayUtente.includes(num) ) {
      alert('hai gia inserito questo numero')
    } else {
      arrayUtente.push(num)
      alert('continuiamo il gioco')
     console.log(arrayUtente);
    }
  }
