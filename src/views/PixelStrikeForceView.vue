<script setup>
import WelcomeItem from '../components/WelcomeItem.vue'
import ToolingIcon from '../components/icons/IconTooling.vue'
</script>

<template>
  <div class="pixel-strike-force">
    <h1>Pixel Strike Force</h1>
    <p class="intro">
      Creating a vibrant gaming ecosystem with content, community, and creative storytelling.
      Building engaged communities around gameplay, strategy, and digital adventures.
    </p>

    <div class="content-grid">
      <WelcomeItem>
        <template #icon>
          <ToolingIcon />
        </template>
        <template #heading>YouTube Channel</template>
        <p class="tagline">Gaming content & playthroughs</p>
        <p>
          Dive into our collection of gaming videos, walkthroughs, and entertaining content.
          From indie gems to blockbuster titles, we cover it all with passion and personality.
        </p>
        <ul>
          <li>Game playthroughs and let's plays</li>
          <li>Tips, tricks, and strategy guides</li>
          <li>Game reviews and first impressions</li>
          <li>Behind-the-scenes content</li>
        </ul>
        <p class="cta">
          <a href="https://www.youtube.com/@pixelstrikeforce" target="_blank" rel="noopener">
            Subscribe on YouTube
          </a>
        </p>
      </WelcomeItem>

      <WelcomeItem>
        <template #icon>
          <ToolingIcon />
        </template>
        <template #heading>Twitch Streams</template>
        <p class="tagline">Live gaming sessions</p>
        <p>
          Join us live for interactive gaming sessions! Chat with us in real-time,
          participate in community events, and be part of the action as it happens.
        </p>
        <ul>
          <li>Live gameplay streams</li>
          <li>Interactive community sessions</li>
          <li>Special gaming events</li>
          <li>Real-time chat and engagement</li>
        </ul>
        <p class="cta">
          <a href="https://www.twitch.tv/pixelstrikeforce" target="_blank" rel="noopener">
            Follow on Twitch
          </a>
        </p>
      </WelcomeItem>

      <WelcomeItem>
        <template #icon>
          <ToolingIcon />
        </template>
        <template #heading>Community & Social</template>
        <p class="tagline">Connect with fellow gamers</p>
        <p>
          Stay connected with the Pixel Strike Force community across all platforms.
          Get updates, share your gaming moments, and join the conversation.
        </p>
        <div class="social-grid">
          <a href="https://www.facebook.com/PixelStrikeForce" target="_blank" rel="noopener">
            Facebook
          </a>
          <a href="https://www.instagram.com/pixelstrikeforce/" target="_blank" rel="noopener">
            Instagram
          </a>
          <a href="https://x.com/PixelStrikeForc" target="_blank" rel="noopener">
            X (Twitter)
          </a>
        </div>
      </WelcomeItem>

      <WelcomeItem>
        <template #icon>
          <ToolingIcon />
        </template>
        <template #heading>Discord Server</template>
        <p class="tagline">Join our gaming community</p>
        <p>
          Connect with fellow gamers in real-time on our Discord server. Chat, share tips,
          organize gaming sessions, and be part of the daily conversation.
        </p>
        <div class="discord-widget">
          <iframe src="https://discord.com/widget?id=1343277918306041978&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        </div>
      </WelcomeItem>
    </div>

    <div class="cta-section">
      <h2>Join the Force</h2>
      <p>
        Whether you're a casual gamer or a hardcore enthusiast, there's a place for you
        in the Pixel Strike Force community. Subscribe, follow, and become part of our
        growing gaming family.
      </p>
      <div class="main-links">
        <a href="https://www.youtube.com/@pixelstrikeforce" target="_blank" rel="noopener" class="btn">
          YouTube
        </a>
        <a href="https://www.twitch.tv/pixelstrikeforce" target="_blank" rel="noopener" class="btn">
          Twitch
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pixel-strike-force {
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

.cta {
  margin-top: 1rem;
}

.cta a {
  color: var(--color-heading);
  font-weight: 500;
}

.social-grid {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;
}

.social-grid a {
  color: var(--color-heading);
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.2s;
}

.social-grid a:hover {
  background-color: var(--color-background-soft);
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

.main-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: var(--color-heading);
  color: var(--color-background);
  text-decoration: none;
  border-radius: 6px;
  font-weight: 500;
  transition: opacity 0.2s;
}

.btn:hover {
  opacity: 0.9;
}

.discord-widget {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
}

.discord-widget iframe {
  max-width: 100%;
  border-radius: 8px;
}

@media (min-width: 1024px) {
  .pixel-strike-force {
    padding: 2rem;
  }

  h1 {
    font-size: 2.5rem;
  }
}
</style>
