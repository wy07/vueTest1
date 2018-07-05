const Mock = require('mockjs');

const cengke = [
  "网页设计",
  "电商运营\n管理",
  "创意思维",
  "服装艺术",
  "网络金融\n与支付",
  "计算机网络",
  "考研英语\n辅导",
  "心理学与自我",
  "摄影与图片\n处理",
  "电子商务\n概论",
  "中国饮食\n文化",
  "英语电影\n欣赏",
  "网络营销",
  "新媒体与\n网络传播",
  "漫谈摄影",
  "计算机组装\n与维护",
  "设计思维",
  "申论",
  "趣味逻辑学",
  "工业机器人\n基础"
];
const ip = [
  "59.44.211.75",
  "111.19.92.206",
  "1.80.144.167",
  "182.140.213.103",
  "77.72.82.189",
  "180.96.16.234",
  "183.131.19.21",
  "183.136.223.166",
  "74.91.113.30",
  "119.188.113.169",
  "47.94.37.195",
  "202.108.16.79",
  "133.28.255.218",
  "183.131.19.20",
  "202.38.75.150",
  "111.19.32.95"
];
const classroomBar = [
  "医学院", "艺术设计学院", "经济与管理学院", "文化传媒学院", "国际教育学院",
  "建筑工程学院", "信息工程学院", "动画学院", "机械与能源工程学院", "音乐学院"];
const classroomCircle = [
  "2015级会计学", "2015级土木工程", "2015级信息与计算科学", "2015级建筑学", "2015级计算机科学与技术",
  "2015级机械电子工程", "2015级数学与应用数学", "2014级生物工程", "2015级商务英语", "2014级思想政治教育专业"
];
const tsjyMeigui = [
  "哲学类", "社会科学", "军事科学", "中国文学", "外国文学", "财经管理", "计算机技术", "自然科学", "文化教育", "国际教育学院",
  "美术雕塑", "机械与能源工程学院", "生物与食品工程学院", "外国语学院", "信息工程学院", "数学与统计学院", "艺术设计学院",
  "建筑工程学院", "经济与管理学院", "文化传媒学院", "2014级文化传媒学院", "2015级经济管理", "2015级艺术设计学院", "2016级建筑工程学院",
  "2016级数学统计学院", "2015级建筑工程学院", "2015级文化传媒学院", "2016级经济管理"
];


Mock.mock('http://test/api/data.json', {
  "xAxis": cengke,
  'yAxis|20': ['@NATURAL(60, 100)'],
});

Mock.mock('http://test/api/data.json', {
  "xAxis": cengke,
  'yAxis|20': ['@NATURAL(60, 100)'],
});
//学生蹭课TOP20，象形图
Mock.mock("http://mockjs/cengkeTop20", {
  "Entry|20": [
    {
      "category|+1": cengke,
      "y|50-500": 10
    }
  ]
});

//ip词云图
Mock.mock("http://mockjs/ip", {
  "Entry|16": [
    {
      "name|+1": ip,
      "value|50-500": 10
    }
  ]
});
//设备
Mock.mock("http://mockjs/shebei", {
  "Entry": [
    {
      "name": "jieru",
      "value|800-1000": 100
    },
    {
      "name": "yunxing",
      "value|600-800": 100
    },
    {
      "name": "daiji",
      "value|50-100": 100
    },
    {
      "name": "guzhang",
      "value|10-50": 10
    },
    {
      "name": "weixiu",
      "value|10-30": 10
    },
    {
      "name": "CPU",
      "value": "704"
    },
    {
      "name": "neicun",
      "value": "4096"
    },
    {
      "name": "cunchu",
      "value": "300"
    },
    {
      "name": "daikuan",
      "value": "700"
    }
  ]
});

//自习室预约TOP10-学院-bar
Mock.mock("http://mockjs/classroomBar_1", {
  "Entry|10": [
    {
      "category|+1": classroomBar,
      "y|15000-30000": 16939
    }
  ]
});
//自习室预约TOP10-年级-circle
Mock.mock("http://mockjs/classroomCircle", {
  "Entry|10": [
    {
      "value": 3014,
      "name|+1": classroomCircle
    },
  ]
});

//图书借阅
Mock.mock("http://mockjs/tsjyMeigui", {
  "Entry|28": [
    {
      "category|+1": tsjyMeigui,
      "value|1200-3000": 1600
    }
  ]
});

/*
mock文件中
const Mock = require('mockjs');
引入mockData
require('./mockData');


排序
res.data.Entry.sort(function (a, b) {
  return b.y - a.y;
});
tsjy 截取
res.data.Entry.slice(0,10)
*/
