<script setup>
import WelcomeItem from '../components/WelcomeItem.vue'
import ToolingIcon from '../components/icons/IconTooling.vue'
</script>

<template>
  <div class="instinct-bits-lab">
    <h1>Instinct Bits Lab</h1>
    <p class="intro">
      Innovation hub for experimental projects, cutting-edge technologies, and creative explorations.
      Where ideas transform into digital reality.
    </p>

    <div class="sponsor-section">
      <p>
        Supported and Sponsored by 
        <a href="https://digitechnomads.com" target="_blank" rel="noopener" class="sponsor-link">
          <img src="https://digitechnomads.com/wp-content/uploads/2025/09/favicon.png" alt="Digitech Nomads" class="sponsor-icon" />
          Digitech Nomads
        </a>
      </p>
    </div>

    <div class="featured-product">
      <h2>Featured Innovation</h2>
      <div class="product-card">
        <h3><a href="https://convergio.digitechnomads.com/" target="_blank" rel="noopener">ConvergioAI</a></h3>
        <p class="product-tagline">Open-source AI CRM</p>
        <p class="product-description">
          ConvergioAI is an open-source, AI-powered omnichannel CRM for agencies and small businesses.
          It is live at convergio.digitechnomads.com.
        </p>
        <div class="product-status">
          <span class="status-badge">Live</span>
        </div>
      </div>
    </div>

    <div class="content-grid">
      <WelcomeItem>
        <template #icon>
          <ToolingIcon />
        </template>
        <template #heading>Research & Development</template>
        <p class="tagline">Exploring new technologies</p>
        <p>
          Our lab is dedicated to researching emerging technologies and developing innovative solutions.
          We experiment with the latest tools, frameworks, and methodologies to stay ahead of the curve.
        </p>
        <ul>
          <li>AI and machine learning experiments</li>
          <li>Web technology prototypes</li>
          <li>Open-source contributions</li>
          <li>Technical documentation</li>
        </ul>
      </WelcomeItem>

      <WelcomeItem>
        <template #icon>
          <ToolingIcon />
        </template>
        <template #heading>Experimental Projects</template>
        <p class="tagline">Testing bold ideas</p>
        <p>
          A playground for innovative concepts and experimental builds. From rapid prototypes to
          ambitious experiments, we push boundaries and learn through hands-on creation.
        </p>
        <ul>
          <li>Interactive demos and prototypes</li>
          <li>Tech stack evaluations</li>
          <li>Performance benchmarks</li>
          <li>Creative coding projects</li>
        </ul>
      </WelcomeItem>

      <WelcomeItem>
        <template #icon>
          <ToolingIcon />
        </template>
        <template #heading>Knowledge Sharing</template>
        <p class="tagline">Learning and teaching</p>
        <p>
          We believe in sharing knowledge and experiences with the developer community.
          Our lab serves as a platform for tutorials, insights, and collaborative learning.
        </p>
        <ul>
          <li>Technical blog posts</li>
          <li>Code snippets and examples</li>
          <li>Best practices and patterns</li>
          <li>Community contributions</li>
        </ul>
      </WelcomeItem>
    </div>

    <div class="cta-section">
      <h2>Join Our Innovation Journey</h2>
      <p>
        Interested in our experiments and projects? Follow our progress, contribute ideas,
        or collaborate on exciting new ventures.
      </p>
    </div>
  </div>
</template>

<style scoped>
.instinct-bits-lab {
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

.content-grid {
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
  margin-bottom: 1rem;
  line-height: 1.6;
}

.sponsor-section {
  text-align: center;
  margin: 1.5rem 0;
  padding: 1rem;
  background: var(--color-background-soft);
  border-radius: 8px;
}

.sponsor-section p {
  font-size: 1rem;
  color: var(--color-text);
}

.sponsor-link {
  color: var(--color-heading);
  font-weight: 600;
  text-decoration: none;
  border-bottom: 2px solid var(--color-heading);
  transition: opacity 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

.sponsor-link:hover {
  opacity: 0.8;
}

.sponsor-icon {
  width: 20px;
  height: 20px;
  vertical-align: middle;
}

.featured-product {
  margin: 2rem 0;
}

.featured-product h2 {
  font-size: 1.8rem;
  color: var(--color-heading);
  margin-bottom: 1.5rem;
  text-align: center;
}

.product-card {
  background: var(--color-background-soft);
  border-radius: 12px;
  padding: 2rem;
  border: 2px solid var(--color-border);
  transition: transform 0.2s, border-color 0.2s;
}

.product-card:hover {
  transform: translateY(-2px);
  border-color: var(--color-heading);
}

.product-card h3 {
  font-size: 1.8rem;
  color: var(--color-heading);
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.product-card h3 a {
  color: inherit;
  text-decoration: none;
}

.product-tagline {
  font-size: 1.1rem;
  color: var(--color-text);
  font-style: italic;
  opacity: 0.9;
  margin-bottom: 1rem;
}

.product-description {
  line-height: 1.7;
  color: var(--color-text);
  margin-bottom: 1.5rem;
}

.product-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.status-badge {
  display: inline-block;
  padding: 0.4rem 1rem;
  background: var(--color-heading);
  color: var(--color-background);
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

@media (min-width: 1024px) {
  .instinct-bits-lab {
    padding: 2rem;
  }

  h1 {
    font-size: 2.5rem;
  }
}
</style>
