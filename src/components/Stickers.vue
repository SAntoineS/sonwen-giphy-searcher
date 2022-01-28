<template>
  <div class="flex flex-col space-y-20 justify-center items-center w-full text-black border-2d">
    <div class="flex flex-col justify-center text-white w-4/5">
        <div class="flex items-center justify-between">
          <span class="text-3xl dark:text-white text-black"><fa :icon="['fa', 'poll']" class="mr-3 text-red-400"/>Trending STICKERs</span>
          <router-link to="/allTrendingsStickers" class="text-lightGrayPalette hover:text-red-400 cursor-pointer">
            All trending STICKERs <fa :icon="['fa', 'angle-right']"/>
          </router-link>
        </div>
        <div class="flex">
          <div class="flex justify-center items-center p-4 space-x-5 overflow-auto">
            <img @click="goToSticker(sticker.id)" class="h-52 rounded-xl cursor-pointer hover:scale-105" v-for="sticker in trendingStickers" :src="'https://media.giphy.com/media/' + sticker.id +'/giphy.gif'">
          </div>
        </div>
    </div>
    <div class="flex flex-col justify-center text-white w-4/5">
        <div class="flex items-center justify-between">
          <span class="text-3xl dark:text-white text-black"><fa :icon="['fa', 'random']" class="mr-3 text-orange-400"/>Random GIFs</span>
        </div>
        <div class="flex">
          <div class="flex justify-center items-center p-4 space-x-5 overflow-auto">
            <img @click="goToSticker(sticker.id)" class="h-52 rounded-xl cursor-pointer hover:scale-105" v-for="sticker in randomStickers" :src="'https://media.giphy.com/media/' + sticker.id +'/giphy.gif'">
          </div>
        </div>
    </div>  
  </div>
</template>

<script>
import axios from 'axios'

  export default {
    name: 'Stickers',
    data() {
      return { 
          searchTerm: "",
          api_key: "dMXbI0PkrzUxh1d7Fm9VH0rVe9kv8F2t",
          trendingStickers: [],
          randomStickers: []
        }
    },
    methods: {
        searchTrending(){
            axios.get('http://api.giphy.com/v1/stickers/trending', {
                params: {
                api_key: this.api_key,
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
         searchRandom(){
           for (let pas = 0; pas < 25; pas++) {
              axios.get('http://api.giphy.com/v1/stickers/random', {
                params: {
                  api_key: this.api_key,
                }
                })
                .then((response) => {
                  console.log(response.data.data)
                    this.randomStickers.push(response.data.data);
                })
                .catch(function (error) {
                    console.log(error);
                })
            }
        },
        goToSticker(id){
          this.$router.push('/sticker/' + id)  
        }
    },
    beforeMount(){
        this.searchTrending()
        this.searchRandom()
    }
  }
</script>

<style>

</style>
