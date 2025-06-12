<script lang="ts" setup>
import Card from '../ui/card/Card.vue'
import CardContent from '../ui/card/CardContent.vue'

const books = [
  {
    title: 'The Power of Right Believing',
    subtitle: '7 Keys to Freedom from Fear, Guilt, and Addiction',
    cover: '/img/hero.jpg',
  },
  {
    title: 'sample book title',
    subtitle: 'sample book subtitle',
    cover: '/img/hero.jpg',
  },
  {
    title: 'sample book title',
    subtitle: 'sample book subtitle',
    cover: '/img/hero.jpg',
  },
  {
    title: 'sample book title',
    subtitle: 'sample book subtitle',
    cover: '/img/hero.jpg',
  },
  {
    title: 'sample book title',
    subtitle: 'sample book subtitle',
    cover: '/img/hero.jpg',
  },
  {
    title: 'sample book title',
    subtitle: 'sample book subtitle',
    cover: '/img/hero.jpg',
  },
]
</script>
<template>
  <div class="flex justify-between items-center">
    <div>
      <h2 class="font-semibold text-xl">Books</h2>
      <p class="text-lg">Find in-depth materials on specific topics on your journey of faith</p>
    </div>
    <RouterLink to="/" class="text-xl font-semibold underline" style="color: var(--dark-turquoise)">
      See more
    </RouterLink>
  </div>
  <div class="grid grid-cols-6 py-4 gap-4">
    <Card
      v-for="book in books"
      :key="book.title"
      :class="[
        `bg-[url(${book.cover})]`,
        'transition delay-100 duration-300 ease-in-out hover:shadow-2xl cursor-pointer',
        'bg-cover h-96 w-64',
      ]"
    >
      <CardContent class="pt-64 px-2">
        <p class="font-semibold">{{ book.title }}</p>
        <p class="text-sm">{{ book.subtitle }}</p>
      </CardContent>
    </Card>
  </div>
</template>
