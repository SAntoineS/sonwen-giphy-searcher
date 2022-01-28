<template>
    <div class="flex flex-col space-y-20 justify-center items-center w-full text-white border-2d">
        <div class="flex flex-col justify-center text-white w-4/5">
            <div class="flex items-center justify-between mb-5">
                <span class="text-3xl"><fa :icon="['fa', 'poll']" class="mr-3 text-red-400"/>Trending GIFs</span>
                <router-link to="/gifs" class="text-lightGrayPalette hover:text-white cursor-pointer">
                    Return to GIFs <fa :icon="['fa', 'angle-right']"/>
                </router-link>
            </div>            
            <div class="flex">
                <div class="flex justify-between items-center flex-wrap">
                    <img @click="goToGif(gif.id)" class="h-52 mb-4 rounded-xl cursor-pointer hover:scale-105" v-for="gif in trendingGifs" :src="'https://media.giphy.com/media/' + gif.id +'/giphy.gif'">
                </div>
            </div>
        </div>
    </div>
</template>

<!-- Javascript -->
<script>
import axios from 'axios'

  export default {
    name: 'AllTrendingsGifs',
    data() {
      return { 
          api_key: "dMXbI0PkrzUxh1d7Fm9VH0rVe9kv8F2t",
          limit: 100,
          trendingGifs: [],
      }
    },
    methods: {
        searchTrending(){
            axios.get('http://api.giphy.com/v1/gifs/trending', {
                params: {
                api_key: this.api_key,
                limit: this.limit
                }
            })
            .then((response) => {
                console.log(response);
                this.trendingGifs = response.data.data;
            })
            .catch(function (error) {
                console.log(error);
            })
        },
        goToGif(id){
          this.$router.push('/gif/' + id)  
        }
    },
    beforeMount(){
    	this.searchTrending()
    }
  }

</script>

<style>

</style>
