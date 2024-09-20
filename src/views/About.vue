<template>
  <Navbar />
  <section class="about">
    <h2>About Us</h2>
    <p>
      Welcome to TravelMate, your ultimate travel companion! We are passionate
      about helping you explore the world and create unforgettable memories.
    </p>
    <p>
      Founded in [Year], TravelMate has grown from a small startup to a
      trusted platform for travelers around the globe. Our team of dedicated
      travel enthusiasts is committed to providing you with the best deals,
      insider tips, and personalized experiences to make your journey seamless.
    </p>
    <h3>Our Mission</h3>
    <p>
      Our mission is to empower travelers by offering comprehensive resources
      and support, making travel accessible and enjoyable for everyone. We
      believe that exploring new places enriches our lives and fosters
      connections between cultures.
    </p>
    <h3>What We Offer</h3>
    <ul>
      <li>
        <strong>Customized Itineraries:</strong> Tailor your travel plans to fit
        your unique preferences and interests.
      </li>
      <li>
        <strong>Exclusive Deals:</strong> Enjoy special offers and discounts
        from our trusted partners.
      </li>
      <li>
        <strong>24/7 Customer Support:</strong> Our team is here for you, ready to
        assist you at any time, day or night.
      </li>
      <li>
        <strong>Travel Guides and Tips:</strong> Access valuable insights and
        recommendations to enhance your travel experience.
      </li>
    </ul>
    <p>
      Join our community of passionate travelers and start your adventure with
      TravelMate today! Whether you're planning a weekend getaway or a
      round-the-world trip, we're here to help you every step of the way.
    </p>
  </section>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: {
    Navbar
  },
  name: 'About'
}
</script>

<style scoped>
.about {
  padding: 2rem;
  text-align: center;
}

ul {
  text-align: left;
  display: inline-block;
  margin-top: 1rem;
}
</style>
