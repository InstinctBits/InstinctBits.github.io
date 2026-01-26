<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>🦄 Building Instinct Bits</template>
    Crafting diverse ecosystems—APIs to communities to gaming—under one unified brand.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>🏗️ The Instinct Bits Communities Ecosystem</template>

    Building interconnected communities that empower real-world collaboration:
    <br /><br />
    🎓 <strong>Edusync</strong> — Educational data infrastructure & school networks across India
    <br />
    🏢 <strong>PropSync</strong> — Property tech collaboration hub
    <br />
    💻 <strong>TechSync</strong> — Developer & tech innovator community
    <br /><br />
    <em>All powered by Discourse, in collaboration with <a href="https://digitechnomads.com/" target="_blank" rel="noopener">Digitechnomads</a></em>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>🔬 Instinct Bits Lab</template>

    Innovation hub for experimental projects, cutting-edge technologies, and creative explorations:
    <br /><br />
    🚀 <strong>ConvergioAI</strong> — AI-Powered Convergence Platform (In Development)
    <br />
    <em>Revolutionizing how AI technologies converge with modern development workflows</em>
    <br /><br />
    🔧 Research & Development — Exploring emerging technologies
    <br />
    🧪 Experimental Projects — Testing bold ideas and prototypes
    <br />
    📚 Knowledge Sharing — Technical insights and community learning
    <br /><br />
    <em>Supported and Sponsored by <a href="https://digitechnomads.com" target="_blank" rel="noopener"><img src="https://digitechnomads.com/wp-content/uploads/2025/09/favicon.png" alt="Digitech Nomads" style="width: 16px; height: 16px; vertical-align: middle; margin-right: 4px;" />Digitech Nomads</a></em>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>🎮 Pixel Strike Force</template>

    Creating a vibrant gaming ecosystem with content, community, and creative storytelling:
    <br /><br />
    📺 <a href="https://www.youtube.com/@pixelstrikeforce" target="_blank" rel="noopener">YouTube Channel</a> — Gaming content & playthroughs
    <br />
    🎥 <a href="https://www.twitch.tv/pixelstrikeforce" target="_blank" rel="noopener">Twitch Streams</a> — Live gaming sessions
    <br /><br />
    Building engaged communities around gameplay, strategy, and digital adventures.
    <br /><br />
    Follow Pixel Strike Force:
    <a href="https://www.facebook.com/PixelStrikeForce" target="_blank" rel="noopener">Facebook</a>
    |
    <a href="https://www.instagram.com/pixelstrikeforce/" target="_blank" rel="noopener">Instagram</a>
    |
    <a href="https://x.com/PixelStrikeForc" target="_blank" rel="noopener">X</a>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>🔗 Join Us!</template>

    Be part of a growing ecosystem where every bit counts.
    <br /><br />
    Follow Instinct Bits:
    <a href="https://www.facebook.com/instinctbit" target="_blank" rel="noopener">Facebook</a>
    |
    <a href="https://github.com/InstinctBits" target="_blank" rel="noopener">GitHub</a>
  </WelcomeItem>
</template>
