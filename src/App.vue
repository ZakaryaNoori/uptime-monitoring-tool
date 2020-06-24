<template>
  <div id="app">
    <transition name="fade" appear mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
