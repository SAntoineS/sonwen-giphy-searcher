import { createApp } from 'vue'
import './index.css'

import Notifications from 'notiwind'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import {createRouter, createWebHashHistory}  from 'vue-router'

import Home from './components/Home.vue'
import Gifs from './components/Gifs.vue'
import Gif from './components/Gif.vue'
import Stickers from './components/Stickers.vue'
import Sticker from './components/Sticker.vue'
import AllTrendingsGifs from './components/AllTrendingsGifs.vue'
import AllTrendingsStickers from './components/AllTrendingsStickers.vue'

import Search from './components/Search.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

library.add(fas, fab);

const routes = [
  { path: '/home', name: 'Home', component: Home, redirect: "GIFs"},  
  { path: '/gifs', name: 'GIFs', component: Gifs },
  { path: '/gif/:id', name: 'Gif', component: Gif },
  { path: '/stickers', name: 'STICKERs', component: Stickers },
  { path: '/sticker/:id', name: 'Sticker', component: Sticker },
  { path: '/allTrendingsGifs', name: 'AllTrendingsGifs', component: AllTrendingsGifs},
  { path: '/allTrendingsStickers', name: 'AllTrendingsStickers', component: AllTrendingsStickers},

  { path: '/search/:str', name: 'SearchSTR', component: Search }

]
  
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })

const myApp = createApp(Home)
myApp.component('fa', FontAwesomeIcon)
myApp.use(router);
myApp.use(Notifications);
myApp.use(VueAxios, axios)

// now we're ready to mount
myApp.mount('#app');
