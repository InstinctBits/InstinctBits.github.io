<script setup>
import WelcomeItem from '../components/WelcomeItem.vue'
import CommunityIcon from '../components/icons/IconCommunity.vue'
</script>

<template>
  <div class="communities">
    <h1>The Instinct Bits Communities Ecosystem</h1>
    <p class="intro">
      Building interconnected communities that empower real-world collaboration.
      All powered by Discourse, in collaboration with
      <a href="https://digitechnomads.com/" target="_blank" rel="noopener">Digitechnomads</a>.
    </p>

    <div class="community-grid">
      <WelcomeItem>
        <template #icon>
          <CommunityIcon />
        </template>
        <template #heading>Edusync</template>
        <p class="tagline">Educational data infrastructure & school networks across India</p>
        <p>
          Edusync connects educational institutions, enabling seamless data sharing
          and collaboration between schools, teachers, and students. Our platform
          helps modernize education infrastructure across India.
        </p>
        <ul>
          <li>School network management</li>
          <li>Educational data synchronization</li>
          <li>Teacher and student collaboration tools</li>
          <li>Resource sharing between institutions</li>
        </ul>
      </WelcomeItem>

      <WelcomeItem>
        <template #icon>
          <CommunityIcon />
        </template>
        <template #heading>PropSync</template>
        <p class="tagline">Property tech collaboration hub</p>
        <p>
          PropSync brings together real estate professionals, property managers,
          and tech innovators to build the future of property technology.
        </p>
        <ul>
          <li>Real estate tech discussions</li>
          <li>Property management solutions</li>
          <li>Industry networking</li>
          <li>PropTech innovation hub</li>
        </ul>
      </WelcomeItem>

      <WelcomeItem>
        <template #icon>
          <CommunityIcon />
        </template>
        <template #heading>TechSync</template>
        <p class="tagline">Developer & tech innovator community</p>
        <p>
          TechSync is where developers, engineers, and tech enthusiasts come together
          to share knowledge, collaborate on projects, and push the boundaries of innovation.
        </p>
        <ul>
          <li>Developer discussions and support</li>
          <li>Open source collaboration</li>
          <li>Tech tutorials and resources</li>
          <li>Innovation showcases</li>
        </ul>
      </WelcomeItem>
    </div>

    <div class="cta-section">
      <h2>Join Our Communities</h2>
      <p>
        Be part of a growing ecosystem where every bit counts. Connect with like-minded
        individuals and contribute to building something meaningful.
      </p>
      <div class="social-links">
        <a href="https://www.facebook.com/instinctbit" target="_blank" rel="noopener">Facebook</a>
        |
        <a href="https://github.com/InstinctBits" target="_blank" rel="noopener">GitHub</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.communities {
  padding: 2rem 1rem;
  max-width: 900px;
  margin: 0 auto;
}

h1 {
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-heading);
  margin-bottom: 1rem;
}

.intro {
  font-size: 1.1rem;
  color: var(--color-text);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.intro a {
  color: var(--color-heading);
}

.community-grid {
  margin: 2rem 0;
}

.tagline {
  font-style: italic;
  color: var(--color-text);
  opacity: 0.8;
  margin-bottom: 0.5rem;
}

ul {
  margin-top: 1rem;
  padding-left: 1.5rem;
}

li {
  margin-bottom: 0.5rem;
  color: var(--color-text);
}

.cta-section {
  margin-top: 3rem;
  padding: 2rem;
  background: var(--color-background-soft);
  border-radius: 8px;
  text-align: center;
}

.cta-section h2 {
  font-size: 1.5rem;
  color: var(--color-heading);
  margin-bottom: 1rem;
}

.cta-section p {
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.social-links {
  font-size: 1.1rem;
}

.social-links a {
  color: var(--color-heading);
  padding: 0 0.5rem;
}

@media (min-width: 1024px) {
  .communities {
    padding: 2rem;
  }

  h1 {
    font-size: 2.5rem;
  }
}
</style>
