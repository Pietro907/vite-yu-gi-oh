
<script>
import { store } from '../store.js';

export default {
    name: 'AppHeader',
}


</script>


<template>

    <div class="container_head">
        <div class="row">

            <div class="col">
                <div class="card logo">
                    <div class="debug"></div>
                </div>
            </div>

            <div class="col">
                <div class="card title_page">
                    <h1>YU-GI-OH API</h1>
                </div>
            </div>
        </div>

    </div>
   


</template>


<style scoped>

.container_head > .row{
    display: flex;
    justify-content: start;
    align-content: center;
}
.title_page{
    margin: 0 1rem 0;
}
.debug {
    background-color: red;
    width: 50px;
    height: 50px;
}

</style>