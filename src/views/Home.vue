<template>
  <div>
    <Navbar />
    <HeroSection />
    <Destinations />
  </div>
</template>

<script>
import HeroSection from '../components/HeroSection.vue'
import Destinations from '../components/Destinations.vue'
import Navbar from '../components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    HeroSection,
    Destinations,
    Navbar
  }
}
</script>
