<template>
  <div class="markdown-body">
    <router-view></router-view>
  </div>
</template>
<script>
import 'highlight.js/styles/github.css'
import './styles/github-markdown.css'
import '../src/style'
</script>
<style>
  .markdown-body {
      box-sizing: border-box;
      min-width: 200px;
      max-width: 980px;
      margin: 0 auto;
      padding: 45px;
  }
</style>