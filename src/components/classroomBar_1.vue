<template>
  <div class="panel-body" style="width: 50%;height: 400px;float:left">
    <div id="classroomBar_1" style="width: 100%;height: 100%"></div>
  </div>
</template>

<script>
  export default {
    name: "classroom-bar_1",
    data() {
      return {
        option: {},
        chart: {}
      }
    },
    created() {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.randerChart();
    },
    mounted: function () {
      this.option = {
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220]
          }
        ]
      };
      this.charts = this.$echarts.init(document.getElementById('classroomBar_1'));
      // this.randerChart();
      setInterval(() => {
          this.randerChart();
        }
        , 3000);
    },
    methods: {
      randerChart() {
        this.$axios.get('http://mockjs/classroomBar_1').then(res => {
          // debugger;
          var xAxis = [];
          var yAxis = [];
          res.data.Entry.sort(function (a, b) {
            return b.y - a.y;
          });
          for (var i = 0; i < res.data.Entry.length; i++) {
            xAxis.push(res.data.Entry[i].category);
            yAxis.push(res.data.Entry[i].y);
          }

          this.option.xAxis[0].data = xAxis;
          this.option.series[0].data = yAxis;
          this.charts.setOption(this.option);
        })
      }

    }
  }
</script>

<style scoped>

</style>
