<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { RouterLink } from 'vue-router'

const nav_items: { title: string; href: string }[] = [
  {
    title: 'Prayer Board',
    href: '/',
  },
  {
    title: 'Testimonies',
    href: '/',
  },
  {
    title: 'Faith Academy',
    href: '/',
  },
  {
    title: 'Soul Winning',
    href: '/',
  },
]

const sublinks: { title: string; href: string; description: string }[] = [
  {
    title: 'Sermons',
    href: '/',
    description: 'Listen to messages that shows Jesus in the scriptures',
  },
  {
    title: 'Articles',
    href: '/',
    description: 'Read interesting pieces that challenge you to read the scriptures for yourself',
  },
  {
    title: 'Music Diet',
    href: '/',
    description: 'Enjoy music that tells you about Christ and your identity in Him',
  },
  {
    title: 'Books',
    href: '/',
    description: 'Find in-depth materials on specific topics on your journey of faith',
  },
  {
    title: 'Discipleship Guide',
    href: '/',
    description: 'Learn how to disciple new believers the Bible way',
  },
  {
    title: 'Christian History',
    href: '/',
    description: 'Learn about the faith and work of those who came before us',
  },
  {
    title: 'Research',
    href: '/',
    description: 'Discover the deceptions the enemy has normalised on the earth',
  },
  {
    title: 'Podcast',
    href: '/',
    description: 'Enjoy conversations about our Lord Jesus Christ',
  },
]
</script>

<template>
  <header class="flex items-center justify-between px-5">
    <RouterLink to="/" class="flex items-center justify-center">
      <img src="/img/logo.png" class="object-contain w-16" alt="lael family logo" />
      <h2 class="scroll-m-20 text-xl font-semibold tracking-tight transition-colors first:mt-0">
        Lael Family
      </h2>
    </RouterLink>
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger class="font-medium text-md">Digital Library</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <li v-for="link in sublinks" :key="link.title">
                <NavigationMenuLink as-child>
                  <RouterLink
                    :to="link.href"
                    class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div class="text-md font-semibold leading-none">{{ link.title }}</div>
                    <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      {{ link.description }}
                    </p>
                  </RouterLink>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem v-for="item in nav_items" :key="item.title">
          <RouterLink
            active-class="underline underline-offset-8"
            :to="item.href"
            :class="navigationMenuTriggerStyle()"
            >{{ item.title }}</RouterLink
          >
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </header>
</template>
