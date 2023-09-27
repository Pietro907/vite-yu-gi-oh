        

<script >
import { state } from '../state.js';

export default {
    name: 'AppMain',
    data() {
        return {
            state,
        }
    },
    created() {
        state.fetchData();
    }
}


</script>

<template>
    <main>

        <div class="contain_options">

            <label class="label_title" for="type">Choose a type:</label>
            <div>
                <select class="label_option" name="cars" id="cars">
                    <option value="alien">Alien</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
            
        </div>


        <div class="container_all_cards">




            <div class="banner">Founded 39</div>

            <div class="row">
                <div v-for="card in state.cards" class="col">
                    <div class="card">
                        <img class="card_deck" :src="card.card_images[0].image_url" alt="">
                        <h4>{{ card.name }}</h4>
                        <p><small>{{ card.archetype }}</small></p>
                    </div>
                </div>
            </div>

        </div>
    </main>
</template>

<style scoped>
main {
    background-color: orange;
    padding: 3rem 0;
}
.contain_options {
 padding: 1rem 6rem;
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

.label_title {
    margin: 0.5rem 0;
}

.label_option {
    width: 10%;
    margin: 0.5rem 0;
    padding: 0.2rem;
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

.col {
    width: calc(100% / 12 * 2);
    margin: 0 1rem 0 0;
}

.card {
    background-color: orange;
    width: 180px;
    height: 400px;
    text-align: center;

    & img {
        width: 100%;
    }

    & h4 {
        color: white;
    }
}
</style>../state.js