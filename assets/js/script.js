/* references 
  inizializzo in js le variabili che mi possono servire per la funzione che necessito. ad esempio se in js devo inserire un testo specifico come può essere il prezzo totale allora vado in html e attraverso il document(appunto l'html) prendo l'id del tag dove dovrà scrivere il risultato e lo assegno ad una variabile in js
  quindi se ho uno span che ha id prezzo e ad esempio quel prezzo è il risultato di operazioni in js allora scrivo var prezzo inizializzando la variabile in js alla quale perà assegno l'id dove devo andare a scrivere in modo tale che quando vado a stamparla mi stamperà in html proprio nel tag desiderato


*/
/* references 

ho sicuramente bisogno di una referenza per quanto riguarda il nome, gli ingredienti, lo sconto , il bottone (in modo che aggiungo un'azione che quando cliccato fa i suoi calcoli) e il prezzo da stampare
 */
var elPrice = document.getElementById('price'); //prelevo l'id dall'html e lo assegno alla variabile del js elPrice 
var userName = document.getElementById('name');//faccio riferire a userName l'id name in html
var ingredienti = document.getElementsByClassName('ingredient-checkbox');//in questo caso ho bisogno degli ingredienti quindi non è solo un id specifico ma il nome di una classe quindi con get elements by class name e assegnandoli a ingredienti io creo un array che conterrà gli oggetti che hanno il nome della classe ingredients

var button = document.getElementById('button'); //questo lo userò perchè creerò l'interazione in modo tale che quando premo il bottone mi calcoli il prezzo in base agli elementi selezionati 

var sconto = document.getElementById('coupon');

/* faccio un array di stringhe che contiene tutte le parole valide per avere lo sconto in  modo tale che una volta controllato che lo sconto ha length >0 quindi che l'utente ha inserito qualcosa poi controllo che lo sconto sia inlcuso nell'array di stringhe con il metodo .includes(sconto) */

/* /references */

/* variabili */

var arrSconti = ['sconto2021','booleaner','luca logallo']; //stringa contenente i diversi sconti da confrontare con quello inserito dal cliente
var prezzoDefault = 20; // prezzo di default del panino, quindi se l'utente non inserisce nessun elemento e non inserisce nessun codice sconto il prezzo sarà quello di default altrimenti al prezzo di default dovremo aggiungere il prezzo dei diversi ingredienti e/o il codice sconto inserito dall'utente

//perchè non abbiamo pesso prezzoDefault = document.getelementbyid('price')? perchè prezzo default è una variabile che useremo per lavorare nel nostro programma mentre con elPrice noi abbiamo un riferimento all'html quindi poi potremo fare elPrice = a prezzoDefault modificato in base a sconti oppure ad aggiunte di ingredienti

var discount1 = 0.2; //sconto del 20% 
var discount2 = 0.5; //sconto del 50% se ti chiami luca logallo hihihihi

scriviPrezzo(prezzoDefault, elPrice);//qui richiamo la funzione per scrivere il prezzo in modo tale che già a priori l'utente sa che di default il prezzo è di 20$ che poi andrò a richiamare di nuovo quando metterò l'"evento" sul bottone in modo tale che controlla gli ingredienti e lo sconto e ristampa il nuovo valore da far stampare nel target che 

button.addEventListener('click', function(){
    //controllo sul nome
    var nomePaninoUsername = userName.value.trim();

    //se nomePaninoUsername ha la lunghezza <3 allora faccio stampare un errore altrimenti se nomePaninoUsername è valido 
    if(nomePaninoUsername.length < 3 ){
      alert("nome inserito non valido");
    }else{
      var totIngredienti = 0; 
      for(var i = 0; i < ingredienti.length; i++){
        var ingrediente = ingredienti[i];
        //se il valore cecked di ingrediente è spuntato allora faccio tutti i calcoli del caso altrimenti vado avanti 
        if(ingrediente.checked === true){
          totIngredienti = somma(totIngredienti,parseInt(ingrediente.value)); //ingrediente.value è una stringa quindi dev'essere trasformata in un valore numerico intero attraverso il parseInt altrimenti le operazioni di addizione concatenano i valori invece che sommarli
          console.log(totIngredienti);
        }
      }
    }

    var prezzoTotale = somma(totIngredienti, prezzoDefault);
    console.log(prezzoTotale);
    if(arrSconti.includes(sconto.value) === true && sconto.value === 'luca logallo'){
      prezzoTotale -= prezzoTotale * discount2;
    }else if(arrSconti.includes(sconto.value) === true && sconto.value !== 'luca logallo'){
      prezzoTotale -= prezzoTotale * discount1;
    }
    scriviPrezzo(prezzoTotale ,elPrice);
    console.log(prezzoTotale);
});



/* FUNZIONI */
function scriviPrezzo (valore, target){
  target.innerHTML = valore.toFixed(2);
}

function somma(x,y){
  return x + y;
}

function moltiplicazione(x,y){
  return x * y;
}

