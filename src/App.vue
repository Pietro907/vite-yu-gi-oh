
<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';



export default {
 

  components: { 
    AppHeader,
    AppMain,

   },
  data() {
    return {
    

    }

  },

}

</script>


<template>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
</template>



<style lang="sass" scoped>
//@use 'percorso bootstrap'  va tolto lo scoped
</style>