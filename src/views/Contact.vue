<template>
  <Navbar/>
  <section class="contact">
    <h2>Contact Us</h2>
    <p>
      We would love to hear from you! Whether you have a question about your
      trip, need assistance with a booking, or just want to share your travel
      experiences, feel free to reach out.
    </p>
    <p>
      Our team is available to assist you Monday to Friday from 9 AM to 5 PM.
      Please fill out the form below, and we will get back to you as soon as
      possible.
    </p>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input type="text" v-model="name" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label for="message">Message:</label>
        <textarea v-model="message" required></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>
    <p>
      Alternatively, you can reach us at:
      <br />
      <strong>Email:</strong> support@travelmate.com
      <br />
      <strong>Phone:</strong> +X (XXX) XXX-XXX
    </p>
  </section>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  name: 'Contact',
  components: {
    Navbar
  },
  data () {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    submitForm () {
      alert(`Message sent! \nName: ${this.name} \nEmail: ${this.email} \nMessage: ${this.message}`)
      this.name = ''
      this.email = ''
      this.message = ''
    }
  }
}
</script>

<style scoped>
.contact {
  padding: 2rem;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input,
textarea {
  margin: 0.5rem 0;
  padding: 0.5rem;
  width: 300px;
}

button {
  padding: 0.5rem 1rem;
  background-color: #28a745;
  color: white;
  border: none;
  cursor: pointer;
}</style>
