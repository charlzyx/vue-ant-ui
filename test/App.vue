<template>
  <div class="markdown-body">
    <router-view></router-view>
  </div>
</template>
<script>
import 'highlight.js/styles/github.css'
import 'github-markdown-css'
</script>
<style>
  .markdown-body {
      box-sizing: border-box;
      min-width: 200px;
      max-width: 100%;
      margin: 0 auto;
      padding: 45px;
  }
</style>