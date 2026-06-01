<template>
  <div id="app">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<style scoped>
nav {
  padding: 1rem;
  display: flex;
  gap: 1rem;
}
nav a {
  color: #42b883;
  text-decoration: none;
  font-weight: bold;
}
nav a:hover {
  text-decoration: underline;
}
</style>
