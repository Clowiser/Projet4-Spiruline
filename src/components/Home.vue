<template>
  <h1>{{ msg }}</h1>
</template>

<script>
export default {
  props: ["msg"],
  data() {
    return {
      count: 1,
    };
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>