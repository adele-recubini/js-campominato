// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
//BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50

// step 1  --- genero un numero casuale da 1 a 100

// FUNZIONE 1 difficolta 0 GENERA NUMERI RANDOM da uno a 100

var min = 1;
var max = 100;

function randomNum(min,max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
 }
 //  fine FUNZIONE 1 difficolta 0 GENERA NUMERI RANDOM da uno a 100


 // FUNZIONE 2 per la validazione dell input
 function isValid(inputString) {

   if(isNaN(inputString)) {
     return false;
   }
   if (inputString > 100 || inputString < 0) {
     return false;
   }

   return true;
 }

 //  fine funzione 2 per la validazione dell input
//
//  // FUNZIONE 2 difficolta 1 genera numeri randomi da 1 a 80
//  var min = 1;
//  var max = 80;
//
//  function randomNumFirst(min,max) {
//      return Math.floor(Math.random() * (max + 1 - min) + min)
//   }
//
// // FUNZIONE 3 difficolta 2 genera numeri random da 1 a 50
// var min = 1;
// var max = 50;
//
// function randomNumSecond(min,max) {
//     return Math.floor(Math.random() * (max + 1 - min) + min)
//  }
// //





// / var randomNumber = randomNum(min,max) questa se la richiamo dentro un ciclo avra sempre quel valore cioe di un solo numero invece se la metto come var randomNum ecc mi ciclerà sempre un numero differente

 // step 2  --- voglio prendere 16 numeri  sempre casuali che mi sta generando la funzione sempre tra qui 100 e inserirli in un array ( vuoto)

// CICLO  WHILE
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
  var scelte = 84

    var i=0
    while (i < scelte) {
    var num = parseInt(prompt('inserisci numero da 1 a 100'))
    i++
    // qui la funzione 2  per la validazione dell input
    // vedere se inserisce esattamente quello che chiediamo andiamo avanti
     if (isValid(num)) {}

      // se il numero inserito fa parte dei numeri bomba
     if (arrayNum.includes(num)){
      alert('termina gioco')
      break

   }
     // se il numero è gia inserito
     else if (arrayUtente.includes(num)) {
      alert('hai gia inserito questo numero')
    }

   // allora metti i numeri inseriti nell array e calcola il punteggio
    else {
      arrayUtente.push(num)
      alert('continuiamo il gioco')
     console.log(arrayUtente);
    }
    if (arrayUtente.length === scelte) {
      alert('hai vinto ')
    }
  }


  // Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
  // ogni numero scelto vale 1

     console.log(arrayUtente.length);
     //
     // // BONUS : A quale livello vuoi giocare ?

     //
     // var levelGioco = prompt('a quale livello vuoi giocare ?')
     // var levelZero = 0 //-- numeri da 1 a 100 --
     // var levelFirst = 1 //-- numeri da 1 a 80 --
     // var levelSecond = 2 //-- numeri da 1 a 50 --
     //
     // switch (levelGioco) {
     //   case levelZero:
     //
     //     break;
     //    case levelFirst:
     //
     //      break;
     //    case  levelSecond:
     //
     //      break;
     //
     // }
