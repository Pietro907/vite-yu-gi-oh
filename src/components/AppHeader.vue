
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
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Yu-Gi-Oh%21_%28Logo%29.jpg/1200px-Yu-Gi-Oh%21_%28Logo%29.jpg" alt="">
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
.col > .card {
    display: flex;
    align-items: center;
}
.title_page{
    margin: 0 1rem 0;
}
.logo > img {
    width: 50px;
}
.card .logo {
    margin: 4rem 0 0;
}

</style>