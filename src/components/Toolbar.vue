<template>
    <div class="select-none flex justify-center items-center flex-col w-full bg-transparent mb-16">
      <div class="flex justify-center p-4">
        <div class="flex items-center text-xl ml-28">
            <router-link to="/gifs" class="cursor-pointer font-bold text-5xl mr-3">
              GIPHY
            </router-link>
        </div>
        <div class="flex items-center justify-center space-x-3 mr-28">
            <router-link to="/gifs" class="flex flex-col justify-center items-center border-2 border-transparent p-1 hover:bg-cyan-700 border-b-cyan-700">
                <span>GIFs</span>
            </router-link>
            <router-link to="/stickers" class="flex flex-col justify-center items-center border-2 border-transparent p-1 hover:bg-violet-700 border-b-violet-700">
                <span>STICKERs</span>
            </router-link>
            <div id="darkButton" @click="changeToDark" class="flex justify-center items-center border-2 border-transparent p-1 cursor-pointer">
                <fa :icon="['fa', 'moon']"/>
            </div>
            <div id="lightButton" @click="changeToLight" class="flex justify-center items-center border-2 border-transparent p-1 cursor-pointer">
                <fa :icon="['fa', 'sun']" class=""/>
            </div>
        </div>
      </div>
      <div class="flex justify-center items-center w-4/5">
        <input v-model="searchTerm" class="w-full text-2xl outline-none border-b-2 p-4 h-14 text-black" spellcheck="false" placeholder="Search a GIF here...">
        <div class="h-14 w-14 bg-gradient-to-tr from-violet-400 via-cyan-500 to-pink-500 flex justify-center items-center cursor-pointer">
            <fa :icon="['fa', 'search']" class="text-4xl"/>
        </div>
      </div>
    </div>
</template>

<!-- Javascript -->
<script>
import axios from 'axios'

  export default {
    name: 'Toolbar',
    data() {
      return { }
    },
    methods: {
      changeToDark: function(){
        localStorage.theme = 'dark';
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      },
      changeToLight: function(){
        localStorage.theme = 'light';
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      }  
    }
  }

</script>

<style>

</style>
