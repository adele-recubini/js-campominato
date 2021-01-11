// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
//BONUS:
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50

//  chiedo a quale livello vuole giocare  il ciclo while mi serve perche se non inserisce o 0 o 1 o 2 torna al prompt

var levelGioco ;
while (levelGioco !== 0 && levelGioco !==1 && levelGioco !==2) {
  levelGioco = parseInt(prompt('a quale livello vuoi giocare ?'))
}
// lo switch mi gestira i casi delle variabili che sono delle costanti nelle mie funzioni e che andranno a popolarsi nei vari casi

switch (levelGioco) {
  case 0:
   scelte = 84
   min =1
   max=100
   break;
  case 1:
   scelte = 64
   min =1
   max=80
  break;
  case 2:
   scelte = 34
   min =1
   max=50
  break;
}

//  FUNZIONE 1 --- mi genera numeri randomici
var min = 1;
var max = 100;

function randomNum(min,max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
 }

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

// POPOLO con un ciclo while un array di numeri che saranno le bombe
 var arrayNum = []
 var howManyNumber = 16

 while ( arrayNum.length < howManyNumber) {
   var randomNumber = randomNum(min,max)

  if ( !arrayNum.includes(randomNumber)) {
   arrayNum.push(randomNumber)
}
}
  console.log(arrayNum);

// ciclo while con tutte le condizioni del gioco

  var arrayUtente = []
  var scelte = 84

    var i=0
    var num;
    while (i < scelte && !arrayNum.includes(num)) {
     num = parseInt(prompt('inserisci numeri'))
      // funzione richiamata con il notro srgomento (validazione dell input )che si chiude piu in fondo perche per tutto il gioco deve validare i parametri inseriti vicino al secondo else
     if (isValid(num)) {

      // se il numero inserito fa parte dei numeri bomba
     if (arrayNum.includes(num)){
      alert('termina gioco')
   }
     // se il numero è gia inserito
     else if (arrayUtente.includes(num)) {
      alert('hai gia inserito questo numero')
    }

   // allora metti i numeri inseriti nell array e calcola il punteggio
    else {
      arrayUtente.push(num)
      i++
      alert('continuiamo il gioco')
     console.log(arrayUtente);
    }
    if (arrayUtente.length === scelte) {
      alert('hai vinto ')
    }
  }else {
     alert('che fai?')

  }
  }


  // Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
  // ogni numero scelto vale 1 quindi mettendo length comincerà a contare da uno

     console.log(arrayUtente.length);
