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

// step 1  --- genero un numero casualeda 1 a 100

// FUNZIONE 1

var min = 1;
var max = 100;

function randomNum(min,max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
 }

 var randomNumber = randomNum(min,max)

 // cosi me ne stampa uno alla volta io ne voglio 16 casuali


 // step 2  --- voglio prendere 16 numeri  sempre casuali che mi sta generando la funzione sempre tra qui 100 e inserirli in un array ( vuoto)

// CICLO FOR O WHILE

 var arrayNum = []
 var howManyNumber = 16
 for (var i = 0; i < howManyNumber; i++) {

   if (randomNumber !== arrayNum[i]) {
    arrayNum.push(randomNumber)
   }

  }
  console.log(arrayNum);

  // STEP 2 --- chiedo all utente di inserire 84 volte un numero

  // var howManyPrompt = 84
  // for (var i = 0; i < howManyPrompt; i++) {
  //   var num = parseInt(prompt('inserisci numero'))
  // }
