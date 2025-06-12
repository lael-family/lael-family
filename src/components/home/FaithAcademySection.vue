<script lang="ts" setup>
import { Button } from '../ui/button'
</script>
<template>
  <div class="main__academy relative w-full h-max overflow-hidden flex flex-col justify-between">
    <div class="pl-8 pt-8">
      <h1 class="text-6xl">Faith Academy</h1>
      <p class="text-xl font-[400]">
        Building the foundations of your faith in Christ. No assumptions. Using only the Bible as
        the source of truth.
      </p>
    </div>
    <div class="pl-8 py-8">
      <h2 class="font-semibold text-2xl">What you will learn:</h2>
      <ul class="text-xl list-disc pl-10">
        <li>The building blocks of the renewed man: faith, hope & love.</li>
        <li>The deity of Christ.</li>
        <li>The gift & ministry of the Holy Spirit.</li>
        <li>The forgiveness of sin.</li>
        <li>Righteousness by faith.</li>
        <li>Partakers.</li>
        <li>Law vs Grace.</li>
      </ul>
      <p class="text-xl pt-2">and so much more...</p>
    </div>
    <div class="flex justify-evenly items-center pb-6">
      <p class="italic">
        Study to show thyself approved unto God, a workman who needeth not to be ashamed, rightly
        dividing the word of truth. - 2 Timothy 2:15.
      </p>
      <Button variant="dark_turquoise">Sign up for faith academy</Button>
    </div>
  </div>
</template>

<style scoped>
.main__academy {
  z-index: 1;
}

.main__academy::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('../img/academy.jpg') no-repeat center center;
  background-size: cover;
  opacity: 0.35;
  z-index: -1;
}
</style>
