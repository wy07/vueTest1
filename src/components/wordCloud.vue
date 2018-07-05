<template>
  <div class="panel-body" style="width: 50%;height: 400px;float:left">
    <div id="ipWordCloud" style="width: 100%;height: 100%"></div>
  </div>
</template>

<script>
  export default {
    name: "word-cloud",
    data() {
      return {
        worldCloudoption: {},
        worldCloudcharts: {}
      }
    },
    mounted: function () {
      this.worldCloudoption = {
        title: {
          text: 'ip词云图',
          x: 'center',
          textStyle: {
            fontSize: 23,
            color: '#FFFFFF'
          }

        },
        tooltip: {
          show: true
        },
        series: [{
          name: '研发部邮件主题分析',
          type: 'wordCloud',
          sizeRange: [6, 66],
          rotationRange: [0, 0],
          textPadding: 0,
          autoSize: {
            enable: true,
            minSize: 6
          },
          textStyle: {
            normal: {
              color: function () {
                return 'rgb(' + [
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160)
                ].join(',') + ')';
              }
            },
            emphasis: {
              shadowBlur: 10,
              shadowColor: '#333'
            }
          },
          data: [{
            name: "Jayfee",
            value: 666
          }, {
            name: "Nancy",
            value: 520
          }]
        }]
      };
      this.worldCloudcharts = this.$echarts.init(document.getElementById('ipWordCloud'));
      setInterval(() => {
        this.randerChart();
      }, 1000)

    },
    methods: {
      randerChart() {
        this.$axios.get('http://mockjs/ip').then(res => {
          this.worldCloudoption.series[0].data = res.data.Entry
          this.worldCloudcharts.setOption(this.worldCloudoption);
        })
      }
    }
  }
</script>

<style scoped>

</style>
