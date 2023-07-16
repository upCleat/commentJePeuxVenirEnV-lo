<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import CommunityIcon from './icons/IconCommunity.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>

    "Comment je peux venir en vélo" est une application web écrite avec
    <a href="https://vuejs.org/" target="_blank" rel="noopener">VueJs</a>. Pour savoir comment
    modifier cette application vous pouvez consulter la page
    <a href="/docs" target="_blank" rel="noopener">suivante</a>.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Outils</template>

    This project is served and bundled with
    <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener">Vite</a>. The
    recommended IDE setup is
    <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">VSCode</a> +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener">Volar</a>. If
    you need to test your components and web pages, check out
    <a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a> and
    <a href="https://on.cypress.io/component" target="_blank">Cypress Component Testing</a>.

    <br />

    More instructions are available in <code>README.md</code>.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Communauté</template>

    Vous voulez participer ? Proposer des évolutions ? Les "Push Request" sont les bienvenue. Si
    vous avez un trajet à partager ou un point de passage n'hésité pas à consulter la documentation
    <a href="/docs" target="_blank" rel="noopener">ici</a>.
  </WelcomeItem>
</template>
