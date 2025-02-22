<template>
  <div class="about">
    <h1>How we deployed this Simple Site with 
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue3</a>.
      <!-- following this youtube video: -->
      <!-- <a href="https://www.youtube.com/watch?v=vmqGPEeFcnE" target="_blank" rel="noopener">YouTube</a> -->
    </h1>
    <br />
    <pre>
      <code>
        ## commands to follow
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
        netlify open:site
      </code>
    </pre>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
