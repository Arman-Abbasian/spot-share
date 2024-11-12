<script setup lang="ts">
import { ref} from 'vue'

interface NavOption {
  name: string
  label: string
}

const navOptions: NavOption[] = [
  { name: 'profile', label: 'Profile' },
  { name: 'create', label: 'create' },
  { name: 'blogs', label: 'Blogs' }
]

const currentOption = ref<string>('home')
const isSlideOverOpen = ref<boolean>(false)
const isMobile = ref<boolean>(window.innerWidth <= 768);

const closeSlideOver=()=>{
  isSlideOverOpen.value=false
} 

const toggleSlideOver = () => {
  isSlideOverOpen.value = !isSlideOverOpen.value
}


</script>

<template>
    <div class="admin-panel">
      <!-- Mobile Navigation Toggle Button -->
      <button :v-show="isMobile" class="mobile-menu-button" @click="toggleSlideOver">
        ☰
      </button>
  
      <!-- Slide-Over Menu for Mobile -->
      <v-container v-if="isSlideOverOpen" class="slide-over bg-purple-lighten-2" @click.self="toggleSlideOver">
        <div class="slide-over-content bg-purple-lighten-5">
          <button class="close-button" @click="toggleSlideOver">✕</button>
          <nav>
            <ul>
              <li class="" key="home">
            <router-link to='/admin-panel'>
              Home
            </router-link>
          </li>
          <li v-for="option in navOptions" :key="option.name">
            <router-link :to='`/admin-panel/${option.name}`' 
            :onclick="closeSlideOver"
            :class="{ active: currentOption === option.name }">
              {{ option.label }}
            </router-link>
          </li>
            </ul>
          </nav>
        </div>
      </v-container>
  
      <!-- Sidebar for Desktop -->
      <nav class="sidebar bg-secondary-darken-1" v-if="!isMobile">
        <ul>
          <li key="home">
            <router-link to='/admin-panel'>
              Home
            </router-link>
          </li>
          <li v-for="option in navOptions" :key="option.name">
            <router-link :to='`/admin-panel/${option.name}`' :class="{ active: currentOption === option.name }">
              {{ option.label }}
            </router-link>
          </li>
        </ul>
      </nav>
  
      <!-- Main Content Area -->
        <v-container class="bg-primary p-4">
          <router-view />
        </v-container>

    </div>
  </template>
  
  <style scoped>
  .admin-panel {
    display: flex;
    min-height: 100vh;
  }
  
  .mobile-menu-button {
    display: none;
    padding: 10px;
    background-color: #333;
    color: #fff;
    border: none;
    cursor: pointer;
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 20;
  }
  
  @media (max-width: 768px) {
    .mobile-menu-button {
      display: block;
    }
  
    .sidebar {
      display: none;
    }
  }
  
  .slide-over {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .slide-over-content {
    background-color: #fff;
    width: 100%;
    height: 100%;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    position: relative;
  }
  
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
  
  .sidebar {
    width: 200px;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);

  }
  
  .sidebar ul {
    list-style: none;
    padding: 0;
  }
  
  .sidebar button.active {
    background-color: #ddd;
    font-weight: bold;
  }
  
  .content {
    flex: 1;
    padding: 20px;
  }
  </style>
  
  