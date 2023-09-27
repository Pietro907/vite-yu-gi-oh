        

<script >
import { state } from '../state.js';
import SelectMain from './SelectMain.vue';
import ContainerCard from './ContainerCard.vue';


export default {
    name: 'AppMain',
    components: {
        SelectMain,
        ContainerCard,
    },
    data() {
        return {
            state,

        }

    },

    created() {
        state.fetchData();
    },
    methods: {
        filterArcheType() {

            axios(this.state.arch)
                .then(response => {
                    console.log(response.arch = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=alien&num=20&offset=0');
                    //permette di accedere in modo semplice saltando il data.data
                    //this.cards = response.data.data;
                })
        },
        

    /*     console.log(state.arch);

        this.arch = 'https://db.ygoprodeck.com/api/v7/cardinfo.php' + '?archetype=alien';
        console.log(this.arch);
 */
    }


}




</script>

<template>
    <main>

        <SelectMain @arche-type="filterArcheType()" /> <!-- nome emits con nome funzione() -->


        <div class="container_all_cards">

            <div class="banner">Founded 39</div>

            <div class="row">

                <ContainerCard v-for="card in state.cards" :card="card" />

            </div>

        </div>

    </main>
</template>

<style scoped>
main {
    background-color: orange;
    padding: 3rem 0;
}

.container_all_cards {
    width: 80%;
    margin: 0 auto 0;
    border: 2px solid black;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 2rem;
}



.row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
}

.banner {
    background-color: black;
    color: white;
    padding: 1rem;
    margin: 2rem 0 0;
}
</style>
