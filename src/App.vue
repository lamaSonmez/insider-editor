<template>
  <router-view v-slot="{ Component }">
    <editorFormComponent></editorFormComponent>
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
import editorFormComponent from "@/components/editor-form/editor-form.component.vue"
export default {
  name: 'App',
  components: {
    editorFormComponent
  }
}
</script>

<style >
@import "assets/sass/app.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
