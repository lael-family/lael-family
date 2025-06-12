<script setup lang="ts">
import BookSection from '@/components/home/BookSection.vue'
import FaithAcademySection from '@/components/home/FaithAcademySection.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import PrayerBoardSection from '@/components/home/PrayerBoardSection.vue'
import SermonSection from '@/components/home/SermonSection.vue'
</script>

<template>
  <HeroSection />
  <div class="p-7 flex flex-col gap-y-5">
    <PrayerBoardSection />
    <BookSection />
    <SermonSection />
  </div>
  <FaithAcademySection />
</template>
