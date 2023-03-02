// VUE
import { createApp } from 'vue/dist/vue.esm-bundler.js'
import titleComp from '../src/welcome.vue'

import Prueba from '../vue/Prueba.vue';

import Perfil from '../vue/Perfil.vue';

import MyProfile from '../vue/MyProfile.vue';

const app = createApp({})

app.component('andrei-prova', Prueba)

app.component('perfil', Perfil)

app.component('my-profile', MyProfile)

// BREEZE
import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();