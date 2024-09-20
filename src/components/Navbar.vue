<template>
    <header class="header">
        <h1>TravelMate</h1>
        <nav>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About Us</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </nav>
    </header>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.header {
    background-color: #007bff;
    color: white;
    padding: 1rem;
    text-align: center;
    margin: 0
}

nav ul {
    list-style: none;
    padding: 0;
}

nav li {
    display: inline;
    margin: 0 1rem;
}
</style>
