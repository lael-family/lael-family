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
    textColor: 'text-amber-500',
    bgColor: 'bg-amber-100',
  },
  {
    topic: 'sample prayer topic',
    prayer_point: 'sample prayer point',
    verses: ['verse 1', 'verse 2'],
    icon: Sunrise,
    textColor: 'text-red-500',
    bgColor: 'bg-red-100',
  },
  {
    topic: 'sample prayer topic',
    prayer_point: 'sample prayer point',
    verses: ['verse 1', 'verse 2'],
    icon: Moon,
    textColor: 'text-blue-500',
    bgColor: 'bg-blue-100',
  },
  {
    topic: 'sample prayer topic',
    prayer_point: 'sample prayer point',
    verses: ['verse 1', 'verse 2'],
    icon: BookOpen,
    textColor: 'text-purple-500',
    bgColor: 'bg-purple-100',
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
      class="hover:shadow-2xl cursor-pointer transition delay-100 duration-300 ease-in-out"
    >
      <CardHeader class="flex flex-col items-center justify-center">
        <div :class="['w-15 h-15 rounded-4xl flex items-center justify-center', prayer.bgColor]">
          <component :is="prayer.icon" :class="prayer.textColor"></component>
        </div>
        <CardTitle class="">{{ prayer.topic }}</CardTitle>
      </CardHeader>
      <CardContent class="text-gray-700 text-center">
        <p class="pb-2">
          {{ prayer.prayer_point }}
        </p>
        <Separator />
      </CardContent>
      <CardFooter class="text-gray-600">{{ prayer.verses.join('; ') }}</CardFooter>
    </Card>
  </div>
</template>
