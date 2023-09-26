        

<script >
import { store } from '../store.js';

export default {
    name: 'AppMain',
    data() {
        return {
            store,
        }
    },
    created() {
        store.fetchData();
    }
}


</script>

<template>

    <div class="container_all_cards">
banner
        <div class="">Founded 39</div>
        
        <div class="row">
            <div v-for="card in store.cards" class="col">
                <div class="card">
                    <img class="card_deck"  :src="card.card_images[0].image_url" alt="">
                    <h5>{{ card.name }}</h5>
                    <p><small>{{ card.archetype }}</small></p>
                </div>
            </div>
        </div>
    
    </div>

</template>

<style scoped>
.container_all_cards {
    width: 80%;
    margin: 0 auto;
    border: 2px solid black;
    background-color: orange;
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
    background-color: aqua;
}

.col {
    width: calc(100% / 12 * 2);
    margin: 0 1rem 0 0;
}

.card {
    background-color: white;
    width: 180px;
    height: 400px;
    text-align: center;
    & img {
        width: 100%;
    }
}





</style>