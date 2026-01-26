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
          Digitech Nomads
        </a>
      </p>
    </div>

    <div class="featured-product">
      <h2>Featured Innovation</h2>
      <div class="product-card">
        <h3>ConvergioAI</h3>
        <p class="product-tagline">AI-Powered Convergence Platform</p>
        <p class="product-description">
          ConvergioAI is our flagship product currently in conceptualization phase, designed to 
          revolutionize how AI technologies converge with modern development workflows. This ambitious 
          project aims to bridge the gap between artificial intelligence and practical software solutions, 
          creating seamless integration points for developers and businesses.
        </p>
        <div class="product-status">
          <span class="status-badge">In Development</span>
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
      <p class="community-info">
        Join our <strong>TechSync</strong> community and stay updated with the latest innovations.
      </p>
      <div class="subscribe-form">
        <input 
          type="email" 
          placeholder="Enter your email" 
          class="email-input"
        />
        <button class="subscribe-btn">Subscribe</button>
      </div>
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

.community-info {
  font-size: 1.1rem;
  margin-top: 1.5rem;
}

.subscribe-form {
  display: flex;
  gap: 0.5rem;
  max-width: 500px;
  margin: 1.5rem auto 0;
  flex-wrap: wrap;
  justify-content: center;
}

.email-input {
  flex: 1;
  min-width: 250px;
  padding: 0.75rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  background: var(--color-background);
  color: var(--color-text);
  font-size: 1rem;
}

.email-input:focus {
  outline: none;
  border-color: var(--color-heading);
}

.subscribe-btn {
  padding: 0.75rem 1.5rem;
  background: var(--color-heading);
  color: var(--color-background);
  border: none;
  border-radius: 6px;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: opacity 0.2s;
}

.subscribe-btn:hover {
  opacity: 0.9;
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
}

.sponsor-link:hover {
  opacity: 0.8;
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
