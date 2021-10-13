/*
    scrivi un programma che:
        -conti da 1 a 100
        -e appenda un elemento differente in base agli indici
    valori degli indici
        -per i multipli di 3
        -per i multipli di 5
        -e per i multipli di 3 e di 5

*/
/*
    domande a cui dobbiamo rispondere
        -Come faccio a sapere se un numero è divisibile per ?
            se x % 3 == 0 allora è divisibile per 3 
                cioè se un il modulo di 3 non ha rimanenza allora quel numero è divisibile per 3
            se x % 5 == 0 allora è divisibile per 5
                cioè se un il modulo di 5 non ha rimanenza allora quel numero è divisibile per 5
            se il numero è divisibile sia per 3 sia per 5 
        
        -Abbiamo visto qualcosa di particolare che possiamo usare ?
        -Come creare nuovi elementi html e appenderli al container ?


    Consigli del giorno:
        scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
        proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"


*/
const title = document.getElementById("title")
title.innerHTML = "FizzBuzzDom"

let list = document.querySelector(".list")





for (let i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log("divisibile per 3 e per 5")
        const element = ` <li class = "box div_3_5" > fizzbuzz </li>`
        //aggiunge elementi ad ogni interazione
        //list.innerHtml = list.innerHTML + element
        list.innerHTML += element
    }
    else if (i % 3 == 0) {
        console.log("divisibile per 3")
        const element = ` <li class = "box div_3" > fizz </li>`
        //aggiunge elementi ad ogni interazione
        //list.innerHtml = list.innerHTML + element
        list.innerHTML += element
    }
    else if (i % 5 == 0) {
        console.log("divisibile per 5")
        //crea l'elemento
        const element = ` <li class = "box div_5"> buzz </li>`
        //aggiunge elementi ad ogni interazione
        //list.innerHtml = list.innerHTML + element
        list.innerHTML += element
    }
    else {
        console.log(i)
        //crea l'elemento
        const element = ` <li class = "box num"> ${i} </li>`
        //aggiunge elementi ad ogni interazione
        //list.innerHtml = list.innerHTML + element
        list.innerHTML += element
    }
}




