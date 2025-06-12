<script setup lang="ts">
import { Button } from '../ui/button'
</script>

<template>
  <div class="main__hero h-96 w-full overflow-hidden flex justify-center items-center relative">
    <img src="/img/logo.png" alt="lael family logo" style="object-fit: contain" width="421.49" />
    <div>
      <h1 class="text-6xl">The Lael Family</h1>
      <p class="text-xl font-[400] pb-4 pt-2">
        Raising the next generation of Christ's ambassadors
      </p>
      <div class="flex items-center justify-evenly">
        <Button variant="dark_brown">Explore the library</Button>
        <Button variant="dark_turquoise">Visit the prayer board</Button>
      </div>
    </div>
  </div>
  <p class="purpose__section pt-8 pb-2.5 font-medium text-center text-4xl">
    Bridging the gap between mankind and godkind<br />
    through the ministry of the <span>word</span> and <span>prayer</span>.
  </p>
  <div class="center-line"></div>
  <br />
  <br />
</template>

<style scoped>
.main__hero {
  z-index: 1;
}

.main__hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('/img/hero.jpg') no-repeat center center;
  background-size: cover;
  opacity: 0.6;
  z-index: -1;
}

.purpose__section > span {
  color: var(--dark-turquoise);
}

.center-line {
  width: 150px;
  height: 5px;
  background-color: var(--dark-brown);
  border-radius: 4px;
  margin: 0 auto; /* Centers the div horizontally */
}
</style>
