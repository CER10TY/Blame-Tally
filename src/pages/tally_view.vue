<template>
    <div class="container">
        <h3>Tally View</h3>
        
    </div>
</template>

<script>
    import Vue from "vue";
    
    export default {
        mounted() {
            Vue.http.get("/api/1/list").then((response) => {
                   this.tallies = response.body;
               }, (response) => {
                   console.log("Error in GET", response);
               })
        },
       data () {
           return {
               tallies: this.tallies
           }
       }
    }
</script>   