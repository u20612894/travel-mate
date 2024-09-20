<template>
    <section class="hero">
        <h2>Explore the World</h2>
        <p>Your adventure starts here.</p>
        <button @click.prevent="bookNow">Book Now</button>
    </section>
</template>

<script>
export default {
  name: 'HeroSection',
  methods: {
    bookNow () {
      alert('Redirecting to booking page...')
    }
  }
}
</script>

<style scoped>
.hero {
    background-image: url('../assets/hero.jpg');
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
}

button {
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    background-color: #28a745;
    color: white;
    border: none;
    cursor: pointer;
}
</style>
