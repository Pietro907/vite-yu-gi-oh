import { createApp } from 'vue'
//import './style.css'

import App from './App.vue'


createApp(App).mount('#app')

/* 

Descrizione:
Create un nuovo progetto utilizzando Vite e Vue 3 e definite i componenti necessari per strutturare
il layout come da screenshot allegato.

Al caricamento della pagina, effettuate una chiama ajax all'API di Yu Gi Oh 


https://db.ygoprodeck.com/api/v7/cardinfo.php e con i dati restituiti, stampate una card per ogni carta.

ATTENZIONE:
l’api restituisce tutti i risultati in un colpo solo.

Per evitare attese e/o rallentamenti nelle richieste, 
potete diminuire il numero di risultati sfruttando i parametri num e offset

https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0 
(Dai comunque una letta alla documentazione dell'API di YGO)

Bonus:
Creare un componente loader da visualizzare fintantoché i risultati non sono pronti.
Documentazione (README :puntare_in_basso:):
https://ygoprodeck.com/api-guide/

*/

/* 

Descrizione:
Continuate a lavorare nella stessa repo di ieri e aggiungete una select per filtrare i risultati in base all’archetipo.

Le option della select devono essere popolate dinamicamente chiamando questo endpoint dell'api:
https://db.ygoprodeck.com/api/v7/archetypes.php

Quando l'utente seleziona un valore dalla lista, viene effettuata una chiamata alle API con l'archetipo selezionato

Bonus:
Creare un componente che mostri il numero totale di risultati ottenuti.

Nota:
Per capire come comunicare alle API le carte dell'archetipo che volete, è necessario fare riferimento alla documentazione che trovate qui:
https://ygoprodeck.com/api-guide/
Consigli:

usate postman per testare le chiamate ajax prima di scrivere codice

assicuratevi di aver compreso le nozioni del giorno, leggete slide e rileggete la documentazione di Vue che abbiamo visto in classe

lavorate un passo alla volta come ho fatto io stamattina, troppo codice diventa difficile da gestire 
nel momenti in cui ci sono errori in console o di compilazione.


*/