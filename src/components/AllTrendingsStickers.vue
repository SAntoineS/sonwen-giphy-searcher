<template>
    <div class="flex flex-col space-y-20 justify-center items-center w-full text-white border-2d">
        <div class="flex flex-col justify-center text-white w-4/5">
            <div class="flex items-center justify-between mb-5">
                <span class="text-3xl"><fa :icon="['fa', 'poll']" class="mr-3 text-red-400"/>Trending GIFs</span>
                <router-link to="/stickers" class="text-lightGrayPalette hover:text-white cursor-pointer">
                    Return to STICKERs <fa :icon="['fa', 'angle-right']"/>
                </router-link>
            </div>            
            <div class="flex">
                <div class="flex justify-between items-center flex-wrap">
                    <img @click="goToSticker(sticker.id)" class="h-52 mb-4 rounded-xl cursor-pointer hover:scale-105" v-for="sticker in trendingStickers" :src="'https://media.giphy.com/media/' + sticker.id +'/giphy.gif'">
                </div>
            </div>
        </div>
    </div>
</template>

<!-- Javascript -->
<script>
import axios from 'axios'

  export default {
    name: 'AllTrendingsStickers',
    data() {
      return { 
          api_key: "dMXbI0PkrzUxh1d7Fm9VH0rVe9kv8F2t",
          limit: 100,
          trendingStickers: [],
      }
    },
    methods: {
        searchTrending(){
            axios.get('http://api.giphy.com/v1/stickers/trending', {
                params: {
                api_key: this.api_key,
                limit: this.limit
                }
            })
            .then((response) => {
                console.log(response);
                this.trendingStickers = response.data.data;
            })
            .catch(function (error) {
                console.log(error);
            })
        },
        goToSticker(id){
          this.$router.push('/sticker/' + id)  
        }
    },
    beforeMount(){
    	this.searchTrending()
    }
  }

</script>

<style>

</style>
