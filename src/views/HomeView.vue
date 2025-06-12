<script setup lang="ts">
import BookSection from '@/components/home/BookSection.vue'
import FaithAcademySection from '@/components/home/FaithAcademySection.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import PrayerBoardSection from '@/components/home/PrayerBoardSection.vue'
</script>

<template>
  <HeroSection />
  <div class="p-7 flex flex-col gap-y-5">
    <PrayerBoardSection />
    <BookSection />
  </div>
  <FaithAcademySection />
</template>
