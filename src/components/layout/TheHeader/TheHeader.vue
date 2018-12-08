<template>
    <header class="header">
        <a href="/" class="header__logo">
            <!-- Logo -->
            <Logo />
        </a>
        
        <button @click="toggleNav" class="header__nav-trigger">
            <!-- Hamburger Icon -->
            <Hamburger />
        </button>

        <nav class="header__nav" :class="{ 'is-visible' : isVisible}">
            <a class="header__nav-link" href="/">
            Episodes
            </a>
            <a class="header__nav-link" href="/quiz">
            Quiz
            </a>
        </nav>
    </header>
</template>=

<script>

import Logo from '@/assets/logo.svg';
import Hamburger from '@/assets/icon-menu.svg';

export default {
  components: {
    Logo,
    Hamburger
  },
  data() {
      return {
          isVisible: false
      }
  },
  methods: {
      toggleNav(){
          this.isVisible = !this.isVisible
      }
  }
}
</script>
