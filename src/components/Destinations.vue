<template>
    <section id="destinations">
        <h2>Popular Destinations</h2>
        <div class="destination-list">
            <div class="destination" v-for="destination in destinations" :key="destination.id">
                <img :src="destination.image" :alt="destination.name" />
                <h3>{{ destination.name }}</h3>
                <p>{{ destination.description }}</p>
            </div>
        </div>
    </section>
</template>

<script>
import tokyo from '../assets/tokyo.jpg'
import paris from '../assets/paris.jpg'
import newyork from '../assets/newyork.jpg'
export default {
  name: 'Destinations',
  data () {
    return {
      destinations: [
        {
          id: 1,
          name: 'Paris',
          description: 'The city of lights and love.',
          image: paris
        },
        {
          id: 2,
          name: 'New York',
          description: 'The city that never sleeps.',
          image: newyork
        },
        {
          id: 3,
          name: 'Tokyo',
          description: 'A modern city with ancient traditions.',
          image: tokyo
        }
      ]
    }
  }
}
</script>

<style scoped>
.destination-list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.destination {
    width: 30%;
    margin: 1rem;
    text-align: center;
}

.destination img {
    width: 100%;
    height: auto;
}
</style>
