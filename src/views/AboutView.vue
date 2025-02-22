<template>
  <div class="about">
    <h1>How we deployed this Simple Site with 
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>
     </h1>
     <h3> Refer to the following video for more information:
       <a href="https://www.youtube.com/watch?v=vmqGPEeFcnE" target="_blank" rel="noopener">You Tube</a>
      </h3> 
          <!-- <h3>
   
      We used the following commands to deploy this site:
      
      sudo npm init vue@latest . 
      npm install
      npm run dev
      git status
      git add .
      git commit -m "inital commit"
      git push
      gh auth login
      sudo apt  install gh
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
      
   
  </h3> -->
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
