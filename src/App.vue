<template>
  <div id="main app">
    <div class="input">
      <div class="label">字段1:</div>
      <div class="raw"></div>
    </div>
    <div class="input">
      <div class="label">字段2:</div>
      <div class="raw"></div>
    </div>
    <div class="input">
      <div class="label">字段3:</div>
      <div class="raw"></div>
    </div>
    <hr>
    <router-view></router-view>
  </div>
</template>
<style>
.raw {
  background: yellow;
  padding: .1em;
  white-space: pre-line;
}

.raw::after {
  content: ' ';
}
</style>

