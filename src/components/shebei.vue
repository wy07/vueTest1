<template>
  <div style="width: 50%;height: 400px;float:left">
    <ul>
      <li v-for="item in entry ">{{item.name}}:{{item.value}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "shebei",
    data() {
      return {
        entry: []
      }
    },
    mounted: function () {
      this.$axios.get('http://mockjs/shebei').then(res => {
        this.entry = res.data.Entry;
      })
    }
  }
</script>

<style scoped>

</style>
