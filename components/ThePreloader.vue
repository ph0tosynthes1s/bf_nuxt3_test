<template>
    <div class="page-loader" v-if="!isloaded">
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
    </div> 
</template>
  
<script>
    export default {
        data: () => {
        return {
            isloaded: false
        }
        },
        mounted() {
        document.onreadystatechange = () => {
            if (document.readyState == "complete") { 
            this.isloaded = true;
            } 
        }
        },
    }
</script>