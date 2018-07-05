<template>
  <div class="panel-body" style="width: 50%;height: 400px;float:left">
    <div id="classroomCircle" style="width: 100%;height: 100%"></div>
  </div>
</template>

<script>
    export default {
        name: "classroom-circle",
      data() {
        return {
          option: {}
        }
      },
      mounted: function () {
        this.option = {};

        var charts = this.$echarts.init(document.getElementById('classroomCircle'));
        this.$axios.get('http://mockjs/classroomCircle').then(res => {
          // debugger;
          this.option.series[0].data = res.data.Entry;
          charts.setOption(this.option);
        })
      }
    }
</script>

<style scoped>

</style>
