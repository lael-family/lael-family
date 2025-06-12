<script lang="ts" setup>
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, Moon, Sun, Sunrise } from 'lucide-vue-next'
import Separator from '../ui/separator/Separator.vue'

const prayers = [
  {
    topic: 'sample prayer topic',
    prayer_point: 'sample prayer point',
    verses: ['verse 1', 'verse 2'],
    icon: Sun,
    date: 'June 6, 2025',
    color: 'amber',
  },
  {
    topic: 'sample prayer topic',
    prayer_point: 'sample prayer point',
    verses: ['verse 1', 'verse 2'],
    icon: Sunrise,
    date: 'June 6, 2025',
    color: 'red',
  },
  {
    topic: 'sample prayer topic',
    prayer_point: 'sample prayer point',
    verses: ['verse 1', 'verse 2'],
    icon: Moon,
    date: 'June 6, 2025',
    color: 'blue',
  },
  {
    topic: 'sample prayer topic',
    prayer_point: 'sample prayer point',
    verses: ['verse 1', 'verse 2'],
    icon: BookOpen,
    date: 'June 6, 2025',
    color: 'purple',
  },
]
</script>
<template>
  <div class="flex justify-between items-center">
    <div>
      <h2 class="font-semibold text-xl">Prayer Board</h2>
      <p class="text-lg">
        Find out what is on God’s todo list and let’s join hands to pray it into physical
        manifestation
      </p>
    </div>
    <RouterLink to="/" class="text-xl font-semibold underline" style="color: var(--dark-turquoise)">
      See more
    </RouterLink>
  </div>
  <div class="grid grid-cols-4 py-4 gap-4">
    <Card
      v-for="prayer in prayers"
      :key="prayer.topic"
      class="hover:shadow-2xl transition delay-100 duration-300 ease-in-out"
    >
      <CardHeader class="flex flex-col items-center justify-center">
        <div
          :class="[
            'w-15 h-15 rounded-4xl flex items-center justify-center',
            `bg-${prayer.color}-100`,
          ]"
        >
          <component :is="prayer.icon" :class="[`text-${prayer.color}-500`]"></component>
        </div>
        <CardTitle class="">{{ prayer.topic }}</CardTitle>
      </CardHeader>
      <CardContent class="text-gray-700 text-center">
        <p class="pb-2">
          {{ prayer.prayer_point }}
        </p>
        <Separator />
      </CardContent>
      <CardFooter class="text-gray-600 flex justify-between">
        <p>
          {{ prayer.verses.join('; ') }}
        </p>
        <p>
          {{ prayer.date }}
        </p>
      </CardFooter>
    </Card>
  </div>
</template>
