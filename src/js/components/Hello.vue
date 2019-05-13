<template>
  <div>
    <button @click="handleClick">
      click
    </button>
    <p v-if="this.isActive">Hello {{ this.name }}!</p>
  </div>
</template>

<style lang="scss" scoped>
button {
  background: $buttonColor;
  cursor: pointer;
}
</style>

<script>
export default {
  name: "Hello",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isActive: ""
    }
  },
  methods: {
    handleClick() {
      this.isActive = !this.isActive
    }
  }
}
</script>
