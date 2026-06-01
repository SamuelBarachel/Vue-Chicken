<template>
  <main>
    <div class="about">
      <h1>About Vue Chicken</h1>
      <p>This project is built with:</p>
      <ul>
        <li>Vue 3</li>
        <li>Vite</li>
        <li>TypeScript</li>
        <li>Pinia (state management)</li>
        <li>Vue Router</li>
      </ul>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 60px);
}

.about {
  padding: 2rem;
  max-width: 480px;
}

h1 {
  font-size: 2rem;
  color: #42b883;
  margin-bottom: 1rem;
}

p {
  color: #aaa;
  margin-bottom: 0.75rem;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  padding: 0.4rem 0;
  color: #e0e0e0;
}

ul li::before {
  content: '✓ ';
  color: #42b883;
}
</style>
