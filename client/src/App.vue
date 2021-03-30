<template>
   <div id="q-app">
      <router-view />
   </div>
</template>

<script>
export default {
   name: 'App',
}
</script>

<style>
body.cordova {
   padding-top: constant(safe-area-inset-top);
   padding-top: env(safe-area-inset-top);
   padding-bottom: constant(safe-area-inset-bottom);
   padding-bottom: env(safe-area-inset-bottom);
}
</style>
