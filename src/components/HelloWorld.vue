<template>
  <div style="width: 50%;height: 400px;float:left">
    <div id="cengkeBar" style="width: 100%;height: 100%"></div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        option: []
      }
    },
    mounted: function () {
      this.option = {
        backgroundColor: '#0f375f',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['line', 'bar'],
          textStyle: {
            color: '#ccc'
          }
        },
        xAxis: {
          data: [],
          axisLine: {
            lineStyle: {
              color: '#ccc'
            }
          },
          axisLabel:{
            rotate : 30,
            margin:20
          }
        },
        yAxis: {
          splitLine: {show: false},
          axisLine: {
            lineStyle: {
              color: '#ccc'
            }
          }
        },
        series: [{
          name: 'line',
          type: 'line',
          smooth: true,
          showAllSymbol: true,
          symbol: 'emptyCircle',
          symbolSize: 15,
          data: []
        }, {
          name: 'line',
          type: 'bar',
          barGap: '-100%',
          barWidth: 10,
          itemStyle: {
            normal: {
              color: new this.$echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  {offset: 0, color: 'rgba(20,200,212,0.5)'},
                  {offset: 0.2, color: 'rgba(20,200,212,0.2)'},
                  {offset: 1, color: 'rgba(20,200,212,0)'}
                ]
              )
            }
          },
          z: -12,
          data: []
        }, {
          name: 'dotted',
          type: 'pictorialBar',
          symbol: 'rect',
          itemStyle: {
            normal: {
              color: '#0f375f'
            }
          },
          symbolRepeat: true,
          symbolSize: [12, 4],
          symbolMargin: 1,
          z: -10,
          data: []
        }]
      };
      var charts = this.$echarts.init(document.getElementById('cengkeBar'));
      this.$axios.get('http://mockjs/cengkeTop20').then(res => {
        // res.data.Entry.keys(value).sort();
        var name = [];
        var num = [];
        res.data.Entry.sort(function (a,b) {
          return b.y-a.y;
        });
        for (var i = 0; i < res.data.Entry.slice(0,10).length; i++) {
          name.push(res.data.Entry[i].category);
          num.push(res.data.Entry[i].y);
        }
        this.option.xAxis.data = name;
        this.option.series[0].data = num;
        this.option.series[1].data = num;
        this.option.series[2].data = num;
        charts.setOption(this.option);

      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
