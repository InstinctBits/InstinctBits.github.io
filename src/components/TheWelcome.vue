<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>🚀 Welcome to Instinct Bits</template>
    At Instinct Bits, we’re crafting a dynamic ecosystem that brings together entertainment, e-commerce, and community-driven discussions—all in one place. Whether you're a gaming enthusiast, a knowledge seeker, or a digital shopper, there’s something here for you!
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>🎮 Gaming & Content Creation</template>

    🎥 Pixel Strike Force (YouTube & Twitch) delivers high-energy gameplay, live streams, and expert insights into the gaming world.
    <br />
    📲 Follow us on:
    <a href="https://www.youtube.com/@pixelstrikeforce" target="_blank" rel="noopener">YouTube</a> 
    |
    <a href="https://www.twitch.tv/pixelstrikeforce" target="_blank" rel="noopener">Twitch</a> 
    | 
    <a href="https://www.facebook.com/PixelStrikeForce" target="_blank" rel="noopener">Facebook</a>
    | 
    <a href="https://www.instagram.com/pixelstrikeforce/" target="_blank" rel="noopener">Instagram</a>
    | 
    <a href="https://x.com/PixelStrikeForc" target="_blank" rel="noopener">x</a>. 
    <!-- If you need to test your components and web pages, check out
    <a href="https://vitest.dev/" target="_blank" rel="noopener">Vitest</a>
    and
    <a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a>
    /
    <a href="https://playwright.dev/" target="_blank" rel="noopener">Playwright</a>. -->

    <!-- <br /> -->

    <!-- More instructions are available in
    <a href="javascript:void(0)" @click="openReadmeInEditor"><code>README.md</code></a
    >. -->
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>🛒 E-commerce Hub</template>
    Merch Store - Coming Soon ! 
    <br />
    Premium cashews delivered to your doorstep - Coming Soon !
    <!-- Get official tools and libraries for your project:
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
    <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
    <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a>, and
    <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>. If
    you need more resources, we suggest paying
    <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a>
    a visit. -->
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>💡 Our Communities – Connect, Learn & Grow</template>

    We foster discussions and collaborations through our vibrant online communities: - Coming Soon !
    tic-tac-toe (Technology)
    + 
    edusync (Education)
    +
    healthsync (Healthcare)
    +
    re-tthink (Current Trends & Social Impact)
    <!-- <br />
    - Tic-Tac-Toe (Technology) – Dive into the latest innovations and tech trends. - Coming Soon !
    <br />
    - EduSync (Education) – A hub for students, educators, and Parents. - Coming Soon !
    <br />
    - HealthSync (Wellness) – Your space for health, fitness, and mindful living. - Coming Soon !
    <br />
    - Re-TThink (Current Trends & Social Impact) – Meaningful discussions on society’s evolving landscape. -coming soon !
    <br /> -->
    <!-- <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>
    (our official Discord server), or
    <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener"
      >StackOverflow</a
    >. You should also follow the official
    <a href="https://bsky.app/profile/vuejs.org" target="_blank" rel="noopener">@vuejs.org</a>
    Bluesky account or the
    <a href="https://x.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
    X account for latest news in the Vue world. -->
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>🔗 Join Us!</template>

    Explore, engage, and be part of a dynamic digital space where ideas thrive and passions turn into reality. 
    You can follow us on
    <!-- <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">X</a>, -->
    <a href="https://www.facebook.com/instinctbit" target="_blank" rel="noopener">Facebook</a>,
    <a href="https://github.com/InstinctBits" target="_blank" rel="noopener">Github</a>
    <!-- <a href="https://www.linkedin.com/company/vuejs" target="_blank" rel="noopener">LinkedIn</a>, -->
    <!-- <a href="https://www.youtube.com/channel/UC9Yrrh9FwOGpU6k8QbUJbPw" target="_blank" rel="noopener">Instagram</a> -->
  </WelcomeItem>
</template>
