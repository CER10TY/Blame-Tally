<template>
    <div class="container-fluid">
        <h3>Tally View</h3>
        <p> {{ selected }} </p>
        <select id="tallyList" v-model.lazy="selected" multiple>
            <option v-for="(tally, index) in tallies" v-bind:value="index">
                {{ index }}
            </option>
        </select>
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
               });
        },
        data () {
           return {
               tallies: this.tallies,
               pInfo: this.tally,
               selected: []
           }
       }
    }
</script>   