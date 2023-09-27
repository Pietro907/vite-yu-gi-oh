        
<script>
import { state } from '../state.js';

export default {
    name: 'ContainerCard',
    props: ['card'],
    data() {
        return {
            state,

        }
    }
}

</script>


<template>

    <div class="col">
        <div class="card">
            <img class="card_deck" :src="card.card_images[0].image_url" alt="">
            <h4>{{ card.name }}</h4>
            <p><small>{{ card.archetype }}</small></p>
        </div>
    </div>
    
</template>

<style scoped>
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
</style>

