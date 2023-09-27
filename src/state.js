
import axios from 'axios';

import { reactive } from 'vue';


export const state = reactive({

    info: null,

    cards: null,

    base_url: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",

    fetchData(){
        //collego axios
        axios(this.base_url)
        .then(response => {
            console.log(response.data.data);
            //permette di accedere in modo semplice saltando il data.data
            this.cards = response.data.data;
        })
    },


})