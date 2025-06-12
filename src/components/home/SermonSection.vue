<script lang="ts" setup>
import { AudioLines } from 'lucide-vue-next'
import Card from '../ui/card/Card.vue'
import CardContent from '../ui/card/CardContent.vue'

const sermons = [
  '3 Kinds of Wisdom',
  '3 Kinds of Knowledge',
  '2 Important Laws',
  'Pursue the Healer and be Healed',
  'The 3rd Day',
  'Fight the Good Fight of Faith',
]
</script>
<template>
  <div class="flex justify-between items-center">
    <div>
      <h2 class="font-semibold text-xl">Sermons</h2>
      <p class="text-lg">
        Listen to messages that builds faith in your heart as you see Jesus expounded in the
        scriptures
      </p>
    </div>
    <RouterLink to="/" class="text-xl font-semibold underline" style="color: var(--dark-turquoise)">
      See more
    </RouterLink>
  </div>
  <div class="grid grid-cols-6 py-4 gap-4">
    <div
      class="flex items-center flex-col justify-center gap-y-3"
      v-for="sermon in sermons"
      :key="sermon"
    >
      <Card
        :class="[
          'transition delay-100 duration-300 ease-in-out hover:shadow-2xl cursor-pointer',
          'flex justify-center items-center',
          'w-50 h-50',
          'border-2',
        ]"
        style="border-radius: 50%; background-color: var(--light-orange)"
      >
        <CardContent class="flex justify-center items-center gap-4">
          <AudioLines class="w-14 h-14" style="color: var(--dark-brown)" />
        </CardContent>
      </Card>
      <p>{{ sermon }}</p>
    </div>
  </div>
</template>
