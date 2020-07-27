<template>
  <div id="app">
    <transition name="dropdown-transition" appear mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
