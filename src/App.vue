<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <word-cloud></word-cloud>
    <classroom-bar_1></classroom-bar_1>
    <!--<classroom-circle></classroom-circle>-->
    <shebei></shebei>
    <router-view/>
  </div>
</template>

<script>
import WordCloud from "./components/wordCloud";
import Shebei from "./components/shebei";
import ClassroomBar_1 from "./components/classroomBar_1";
import ClassroomCircle from "./components/classroomCircle";


export default {
  components: {
    ClassroomCircle,
    ClassroomBar_1,
    Shebei,
    WordCloud},
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;*/
  background-color: #0f375f;
  margin-top: 60px;
}
</style>
