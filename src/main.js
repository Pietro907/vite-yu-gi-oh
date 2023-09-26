import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'


createApp(App).mount('#app')

/* 

Descrizione:
Create un nuovo progetto utilizzando Vite e Vue 3 e definite i componenti necessari per strutturare
il layout come da screenshot allegato.

Al caricamento della pagina, effettuate una chiama ajax all'API di Yu Gi Oh 
(per chi non li conosce, é na cosa tipo pockemon :faccia_con_mano_sopra_la_bocca: :deluso:

https://db.ygoprodeck.com/api/v7/cardinfo.php e con i dati restituiti, stampate una card per ogni carta.

ATTENZIONE:
l’api restituisce tutti i risultati in un colpo solo :gatto_che_urla:.

:uomo_anziano: Per evitare attese e/o rallentamenti nelle richieste, 
potete diminuire il numero di risultati sfruttando i parametri num e offset

https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0 
(Dai comunque una letta alla documentazione dell'API di YGO)

Bonus:
Creare un componente loader da visualizzare fintantoché i risultati non sono pronti.
Documentazione (README :puntare_in_basso:):
https://ygoprodeck.com/api-guide/

*/