<template>
  <div class="about">
    <h1>About Instinct Bits</h1>
    
    <div class="deployment-section">
      <h2>How We Built This Site</h2>
      <p class="deployment-intro">
        This site is built with 
        <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
        <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue3</a> and deployed on Netlify.
      </p>
      <pre><code>## commands to follow
sudo npm init vue@latest .
npm install
npm run dev
git status
git add .
git commit -m "initial commit"
git push
gh auth login
sudo apt install gh
gh auth login
gh repo view --web
npm install netlify-cli -g
sudo npm install netlify-cli -g
netlify init
git status
git add .
git commit -m "added netlify config"
git push
netlify open:site</code></pre>
    </div>

    <div class="work-with-us-section">
      <h2>Work With Us</h2>
      <p class="intro">
        Ready to bring clarity to your ideas, projects, or next steps? Book a personalized 1:1 session 
        and gain the direction you need to move forward with confidence.
      </p>

      <div class="consultancy-section">
      <h2>Consultancy & Mentorship</h2>
      <p class="section-intro">
        Gain clarity, direction, and actionable strategies through personalized 1:1 sessions. 
        Whether you're navigating challenges, exploring new ideas, or seeking focused guidance, 
        we're here to help you move forward with confidence.
      </p>
      
      <div class="services-grid">
        <div class="service-card">
          <h3>🎯 Quick Clarity Session</h3>
          <p class="service-duration">15 minutes · Free</p>
          <p class="service-description">
            A focused session to gain clarity, direction, and actionable next steps.
          </p>
        </div>

        <div class="service-card">
          <h3>💬 AMA: 1:1 Clarity Session</h3>
          <p class="service-duration">30 minutes · ₹99</p>
          <p class="service-description">
            An open conversation to ask questions, explore ideas, and gain clarity.
          </p>
        </div>

        <div class="service-card">
          <h3>🎓 Personal Guidance Session</h3>
          <p class="service-duration">60 minutes · ₹299</p>
          <p class="service-description">
            A guided session to gain clarity, direction, and grounded next steps.
          </p>
        </div>
      </div>

      <div class="booking-links">
        <a href="https://superprofile.bio/instinctbits" target="_blank" rel="noopener" class="booking-btn primary">
          View Full Profile
        </a>
        <a href="https://superprofile.bio/bookings/instinctbits" target="_blank" rel="noopener" class="booking-btn secondary">
          Book a Session
        </a>
      </div>
    </div>
    </div>
  </div>
</template>

<style scoped>
.about {
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
  text-align: center;
}

.deployment-section {
  margin-top: 2rem;
  padding: 2rem;
  background: var(--color-background);
  border-radius: 12px;
  border: 1px solid var(--color-border);
}

.deployment-section h2 {
  font-size: 1.5rem;
  color: var(--color-heading);
  margin-bottom: 1rem;
}

.deployment-intro {
  margin-bottom: 1.5rem;
  line-height: 1.6;
  color: var(--color-text);
}

.deployment-intro a {
  color: var(--color-heading);
  font-weight: 600;
}

.deployment-section pre {
  background: var(--color-background-soft);
  padding: 1.5rem;
  border-radius: 8px;
  overflow-x: auto;
  border: 1px solid var(--color-border);
}

.deployment-section code {
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--color-text);
}

.work-with-us-section {
  margin-top: 3rem;
}

.work-with-us-section h2 {
  font-size: 1.8rem;
  color: var(--color-heading);
  margin-bottom: 1rem;
  text-align: center;
}

.work-with-us-section .intro {
  text-align: center;
}

.consultancy-section {
  margin: 2rem 0;
  padding: 2rem;
  background: var(--color-background-soft);
  border-radius: 12px;
  border: 1px solid var(--color-border);
}

.consultancy-section h2 {
  font-size: 1.8rem;
  color: var(--color-heading);
  margin-bottom: 1rem;
  text-align: center;
}

.section-intro {
  text-align: center;
  line-height: 1.7;
  color: var(--color-text);
  margin-bottom: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.services-grid {
  display: grid;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.service-card {
  background: var(--color-background);
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--color-border);
  transition: transform 0.2s, box-shadow 0.2s;
}

.service-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.service-card h3 {
  font-size: 1.3rem;
  color: var(--color-heading);
  margin-bottom: 0.5rem;
}

.service-duration {
  font-size: 0.9rem;
  color: var(--color-text);
  opacity: 0.8;
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.service-description {
  line-height: 1.6;
  color: var(--color-text);
}

.booking-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.booking-btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1rem;
  transition: opacity 0.2s, transform 0.2s;
}

.booking-btn:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

.booking-btn.primary {
  background: var(--color-heading);
  color: var(--color-background);
}

.booking-btn.secondary {
  background: transparent;
  color: var(--color-heading);
  border: 2px solid var(--color-heading);
}

@media (min-width: 768px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .about {
    padding: 2rem;
  }

  h1 {
    font-size: 2.5rem;
  }
}
</style>
