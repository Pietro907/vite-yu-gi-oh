<script>
import { state } from '../state.js'
export default {
    name: 'SelectMain',
    emits: ['archeType'], //aggiungere dopo @change
    
    data() {
        return {
            state,
            
            
        }
    },
    created() {
        state.fetchData();
    },
}
</script>


<template>

    <div class="contain_options">

        <label class="label_title" for="type" >Choose a type:</label>
     
        <div>
            <select class="label_option" name="cars" id="cars" @change="$emit('archeType')" v-model="state.arch"> <!-- Aggiungere change con valore emits -->
                <option disabled value="">Select</option>
                <option value="alien">Alien</option>
                <option value="pippo">pippo</option>
                <option value="paperino">Paperino</option>
                
            </select>
        </div>

    </div>

</template>


<style scoped>

.contain_options {
    padding: 1rem 6rem;
}
.label_title {
    margin: 0.5rem 0;
}

.label_option {
    width: 10%;
    margin: 0.5rem 0;
    padding: 0.2rem;
}

</style>