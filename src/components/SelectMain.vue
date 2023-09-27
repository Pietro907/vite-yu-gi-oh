<script>
import { state } from '../state.js'
export default {
    name: 'SelectMain',
    data() {
        return {
            state,
            
        }
    }
}
</script>


<template>
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