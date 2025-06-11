<script setup lang="ts">
const links = [
  {
    title: 'Get in touch',
    external: true,
    children: [
      { name: 'X-Twitter', href: '/' },
      { name: 'WhatsApp', href: '/' },
      { name: 'Email', href: '/' },
    ],
  },
  {
    title: 'Digital Library',
    external: false,
    children: [
      { name: 'Sermons', href: '/' },
      { name: 'Articles', href: '/' },
      { name: 'Music Diet', href: '/' },
      { name: 'Books', href: '/' },
      { name: 'Salvation Materials', href: '/' },
      { name: 'Discipleship Guide', href: '/' },
      { name: 'Christian History', href: '/' },
      { name: 'Research', href: '/' },
      { name: 'Podcast', href: '/' },
    ],
  },
  {
    title: 'Faith Academy',
    external: false,
    children: [
      { name: 'Faith Fundamentals', href: '/' },
      { name: 'The Christian Journey', href: '/' },
      { name: 'The Ministry of the Holy Spirit', href: '/' },
      { name: 'Declaration of Faith', href: '/' },
      { name: 'Soul Winning', href: '/' },
      { name: 'Partakers', href: '/' },
    ],
  },
  {
    title: 'Get Involved',
    external: true,
    children: [
      { name: 'Volunteer', href: '/' },
      { name: 'Donate', href: '/' },
    ],
  },
]
</script>

<template>
  <footer class="w-full flex justify-center items-center flex-col h-96">
    <p>&copy; 2025 The Lael Family</p>
    <div class="w-full flex justify-evenly text-sm/normal pt-8">
      <div v-for="link in links" :key="link.title" class="flex flex-col">
        <h3 class="font-bold">{{ link.title }}</h3>
        <span v-for="child in link.children" :key="child.name">
          <a v-if="link.external" :href="child.href"> {{ child.name }}</a>
          <RouterLink :to="child.href" v-else>{{ child.name }}</RouterLink>
        </span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: var(--light-orange);
}
</style>
