<template>
    <div class="container-fluid">
        <h3>Tally View</h3>
        <div class="container">
            <p> {{ selected[1] }} </p>
            <p> {{ selected[0] }}</p>
        </div>
        <select id="tallyList" v-model.lazy="selected">
            <option v-for="(tally, index) in tallies" v-bind:value="[tally, index]">
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
                    console.log(response);
                   this.tallies = response.body;
                   console.log(this.tallies);
               }, (response) => {
                   console.log("Error in GET", response);
               });
        },
        data () {
           return {
               tallies: this.tallies,
               selected: []
           }
       }
    }
</script>   