$(function () {
    echart_1();
    echart_2();

    echart_3();
    echart_4();

    echart_map();
    echart_5();

    //echart_1上海货物收入
    function echart_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_1'));
        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c}万元"
            },
            legend: {
                x: 'center',
                y: '15%',
                data: ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
                icon: 'circle',
                textStyle: {
                    color: '#fff',
                }
            },
            calculable: true,
            series: [{
                name: '',
                type: 'pie',
                //起始角度，支持范围[0, 360]
                startAngle: 0,
                //饼图的半径，数组的第一项是内半径，第二项是外半径
                radius: [41, 100.75],
                //支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度
                center: ['50%', '40%'],
                //是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：
                // 'radius' 面积展现数据的百分比，半径展现数据的大小。
                //  'area' 所有扇区面积相同，仅通过半径展现数据大小
                roseType: 'area',
                //是否启用防止标签重叠策略，默认开启，圆环图这个例子中需要强制所有标签放在中心位置，可以将该值设为 false。
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        formatter: '{c}万人'
                    },
                    emphasis: {
                        show: true
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        length2: 1,
                    },
                    emphasis: {
                        show: true
                    }
                },
                data: [{
                    value: 1903.39,
                    name: '2016',
                    itemStyle: {
                        normal: {
                            color: '#f845f1'
                        }
                    }
                },
                {
                    value: 2130.55,
                    name: '2017',
                    itemStyle: {
                        normal: {
                            color: '#ad46f3'
                        }
                    }
                },
                {
                    value: 2325.82,
                    name: '2018',
                    itemStyle: {
                        normal: {
                            color: '#5045f6'
                        }
                    }
                },
                {
                    value: 2561.11,
                    name: '2019',
                    itemStyle: {
                        normal: {
                            color: '#4777f5'
                        }
                    }
                },
                {
                    value: 1348.77                    ,
                    name: '2020',
                    itemStyle: {
                        normal: {
                            color: '#44aff0'
                        }
                    }
                },
                {
                    value: 1398.91                    ,
                    name: '2021',
                    itemStyle: {
                        normal: {
                            color: '#45dbf7'
                        }
                    }
                },
                {
                    value: 812.37,
                    name: '2022',
                    itemStyle: {
                        normal: {
                            color: '#f6d54a'
                        }
                    }
                },
                {
                    value: 1412.14,
                    name: '2023',
                    itemStyle: {
                        normal: {
                            color: '#f69846'
                        }
                    }
                },
                {
                    value: 1515.45,
                    name: '2024',
                    itemStyle: {
                        normal: {
                            color: '#ff4343'
                        }
                    }
                },
                {
                    value: 0,
                    name: "",
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
                ]
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    //echart_2上海市地图
    function echart_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_2'));
        function showProvince() {
            myChart.setOption(option = {
                // backgroundColor: '#ffffff',
                visualMap: {
                    show: false,
                    min: 0,
                    max: 100,
                    left: 'left',
                    top: 'bottom',
                    text: ['高', '低'], // 文本，默认为数值文本
                    calculable: true,
                    inRange: {
                        color: ['yellow', 'lightskyblue', 'orangered']
                    }
                },
                series: [{
                    type: 'map',
                    mapType: '上海',
                    roam: true,
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderColor: '#389BB7',
                            areaColor: '#fff',
                        },
                        emphasis: {
                            areaColor: '#389BB7',
                            borderWidth: 1
                        }
                    },


                    animation: false,
                    data: [{
                        name: '静安区',
                        value: 100
                    }, {
                        name: '徐汇区',
                        value: 96
                    }, {
                        name: '黄浦区',
                        value: 98
                    }, {
                        name: '杨浦区',
                        value: 80
                    }, {
                        name: '浦东新区',
                        value: 88
                    }, {
                        name: '闵行区',
                        value: 79
                    }, {
                        name: '虹口区',
                        value: 78,
                    }, {
                        name: '闸北区',
                        value: 79
                    }, {
                        name: '普陀区',
                        value: 69,
                    }, {
                        name: '长宁区',
                        value: 66
                    }, {
                        name: '青浦区',
                        value: 22
                    }, {
                        name: '嘉定区',
                        value: 51
                    }, {
                        name: '宝山区',
                        value: 44
                    }, {
                        name: '松江区',
                        value: 9
                    },
                    {
                        name: '金山区',
                        value: 10
                    }, {
                        name: '奉贤区',
                        value: 11
                    }, {
                        name: '崇明县',
                        value: 12
                    },]
                }]
            });
        }


        var currentIdx = 0;
        showProvince();
        // 使用刚指定的配置项和数据显示图表。
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    // echart_map中国地图
    function echart_map() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_map'));

        var mapName = 'china'
        var data = []
        var toolTipData = [];

        /*获取地图数据*/
        myChart.showLoading();
        var mapFeatures = echarts.getMap(mapName).geoJson.features;
        myChart.hideLoading();
        var geoCoordMap = {
            '福州': [119.4543, 25.9222],
            '长春': [125.8154, 44.2584],
            '重庆': [107.7539, 30.1904],
            '西安': [109.1162, 34.2004],
            '成都': [103.9526, 30.7617],
            '南京': [118.80,32.06],
            '北京': [116.4551, 40.2539],
            '北海': [109.314, 21.6211],
            '海口': [110.3893, 19.8516],
            '长沙': [113.019455, 28.200103],
            '上海': [121.47,31.23],
            '郑州':[113.67,34.75],
            '呼和浩特': [111.75,40.84]
        };

        var GZData = [
            [{
                name: '上海'
            }, {
                name: '福州',
                value: 95
            }],
            [{
                name: '上海'
            }, {
                name: '长春',
                value: 80
            }],
            [{
                name: '上海'
            }, {
                name: '重庆',
                value: 70
            }],
            [{
                name: '上海'
            }, {
                name: '西安',
                value: 50
            }],
            [{
                name: '上海'
            }, {
                name: '成都',
                value: 50
            }],
            [{
                name: '上海'
            }, {
                name: '郑州',
                value: 60
            }],
            [{
                name: '上海'
            }, {
                name: '南京',
                value: 30
            }],
            [{
                name: '上海'
            }, {
                name: '北京',
                value: 90
            }],
            [{
                name: '上海'
            }, {
                name: '北海',
                value: 20
            }],
            [{
                name: '上海'
            }, {
                name: '海口',
                value: 10
            }],
            // [{
            //     name: '上海'
            // }, {
            //     name: '上海',
            //     value: 80
            // }],
            [{
                name: '上海'
            }, {
                name: '呼和浩特',
                value: 80
            }]
        ];

        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];
                var fromCoord = geoCoordMap[dataItem[0].name];
                var toCoord = geoCoordMap[dataItem[1].name];
                if (fromCoord && toCoord) {
                    res.push({
                        fromName: dataItem[0].name,
                        toName: dataItem[1].name,
                        coords: [fromCoord, toCoord]
                    });
                }
            }
            return res;
        };

        var color = ['#c5f80e'];
        var series = [];
        [
            ['', GZData]
        ].forEach(function (item, i) {
            series.push({
                name: item[0],
                type: 'lines',
                zlevel: 2,
                symbol: ['none', 'arrow'],
                symbolSize: 10,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0,
                    symbol: 'arrow',
                    symbolSize: 5
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 1,
                        opacity: 0.6,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            }, {
                name: item[0],
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    brushType: 'stroke'
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                symbolSize: function (val) {
                    return val[2] / 8;
                },
                itemStyle: {
                    normal: {
                        color: color[i]
                    }
                },
                data: item[1].map(function (dataItem) {
                    return {
                        name: dataItem[1].name,
                        value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                    };
                })
            });
        });

        option = {
            tooltip: {
                trigger: 'item'
            },
            formatter: function(params, ticket, callback) {
                if (params.seriesType == "effectScatter") {
                //   return "线路：" + params.data.name + "" + params.data.value[2];
                } else if (params.seriesType == "lines") {
                  return (
                    params.data.fromName +
                    ">" +
                    params.data.toName
                    // "<br />" +
                    // params.data.value
                  );
                } else {
                  return params.name;
                }
              },
            geo: {
                map: 'china',
                label: {
                    emphasis: {
                        show: false
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        borderColor: 'rgba(147, 235, 248, 1)',
                        borderWidth: 1,
                        areaColor: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.8,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(175,238,238, 0)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(47,79,79, .1)' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        },
                        shadowColor: 'rgba(128, 217, 248, 1)',
                        // shadowColor: 'rgba(255, 255, 255, 1)',
                        shadowOffsetX: -2,
                        shadowOffsetY: 2,
                        shadowBlur: 10
                    },
                    emphasis: {
                        areaColor: '#389BB7',
                        borderWidth: 0
                    }
                }
            },
            series: series
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });

    }

    //echart_3上海货物周转量
    function echart_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_3'));
        myChart.clear();
        option = {
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['铁路货物（万吨公里）', '民航货物（万吨公里）', '公路货物（十万吨公里）', '水运货物（亿吨公里）','总计（亿吨公里）'],
                textStyle: {
                    color: '#fff'
                },
                top: '8%'
            },
            grid: {
                top: '40%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            color: ['#FF4949', '#FFA74D', '#FFEA51', '#4BF0FF', '#44AFF0', '#4E82FF', '#584BFF', '#BE4DFF', '#F845F1'],
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['', '2020年', '2021年', '2022年', '2023年', ''],
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            yAxis: {
                name: '',
                type: 'value',
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            series: [
                {
                    name: '铁路货物（万吨公里）',
                    type: 'bar',
                    barWidth: "10%",

                    data: [0, 16000, 19000, 21000, 23000]
                },
                {
                    name: '民航货物（万吨公里）',
                    type: 'bar',
                    barWidth: "10%",

                    data: [0, 52000, 71000, 66000, 67000]
                },
                
                {
                    name: '公路货物（十万吨公里）',
                    type: 'bar', barWidth: "10%",
                    
                    data: [0, 68500, 103700, 84400, 98600]
                },
                {
                    name: '水运货物(亿吨公里)',
                    type: 'bar', barWidth: "10%",
                    
                    data: [0,32095, 33018, 31505, 32631]
                },
                {
                    name: '总计（亿吨公里）',
                    type: 'bar',
                    barWidth: "10%",
                    data: [0,32847, 34146, 32435, 33707]
                },
                
            ]
        };
        myChart.setOption(option);
    }
    //上海高速公路
    function echart_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_4'));

        myChart.setOption({
            series: [{
                type: 'map',
                mapType: '上海'
            }]
        });

        var geoCoordMap = {
            '上海市城区': [121.47,31.23],
            '上海松江区': [121.23,31.03],
            '上海浦东新区': [121.63,31.14],
            '上海崇明区': [121.40,31.62],

        };

        var goData = [
            //中括号为1个数据项
            [{
                name: '上海市城区'

            }, {
                id: 1,
                name: '上海松江区',
                value: 86
            }],
            //中括号为1个数据项
            [{
                name: '上海市城区'

            }, {
                id: 1,
                name: '上海浦东新区',
                value: 80
            }],

            [{
                name: '上海松江区'

            }, {
                id: 1,
                name: '上海浦东新区',
                value: 80
            }],

            [{
                name: '上海崇明区'

            }, {
                id: 1,
                name: '上海浦东新区',
                value: 80
            }],


        ];
        //值控制圆点大小
        var backData = [
            //中括号为1个数据项
            [{
                name: '上海市城区'

            }, {
                id: 1,
                name: '上海松江区',
                value: 80
            }],
            //中括号为1个数据项
            [{
                name: '上海浦东新区'

            }, {
                id: 1,
                name: '上海市城区',
                value: 80
            }],

            [{
                name: '上海崇明区'

            }, {
                id: 1,
                name: '上海市城区',
                value: 80
            }],

            [{
                name: '上海浦东新区'

            }, {
                id: 1,
                name: '上海崇明区',
                value: 80
            }],

        ];

        var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
        var arcAngle = function (data) {
            var j, k;
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];
                if (dataItem[1].id == 1) {
                    j = 0.2;
                    return j;
                } else if (dataItem[1].id == 2) {
                    k = -0.2;
                    return k;
                }
            }
        }

        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];
                var fromCoord = geoCoordMap[dataItem[0].name];
                var toCoord = geoCoordMap[dataItem[1].name];
                if (dataItem[1].id == 1) {
                    if (fromCoord && toCoord) {
                        res.push([{
                            coord: fromCoord,
                        }, {
                            coord: toCoord,
                            value: dataItem[1].value //线条颜色

                        }]);
                    }
                } else if (dataItem[1].id == 2) {
                    if (fromCoord && toCoord) {
                        res.push([{
                            coord: fromCoord,
                        }, {
                            coord: toCoord
                        }]);
                    }
                }
            }
            return res;
        };

        var color = ['#fff', '#FF1493', '#0000FF'];
        var series = [];
        [
            ['1', goData],
            ['2', backData]
        ].forEach(function (item, i) {
            series.push({
                name: item[0],
                type: 'lines',
                zlevel: 2,
                symbol: ['arrow', 'arrow'],
                //线特效配置
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0.1,
                    symbol: 'arrow', //标记类型
                    symbolSize: 5
                },
                lineStyle: {
                    normal: {
                        width: 1,
                        opacity: 0.4,
                        curveness: arcAngle(item[1]), //弧线角度
                        color: '#fff'
                    }
                },
                edgeLabel: {
                    normal: {
                        show: true,
                        textStyle: {
                            fontSize: 14
                        },
                        formatter: function (params) {
                            var txt = '';
                            if (params.data.speed !== undefined) {
                                txt = params.data.speed;
                            }
                            return txt;
                        },
                    }
                },
                data: convertData(item[1])
            }, {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                //波纹效果
                rippleEffect: {
                    period: 2,
                    brushType: 'stroke',
                    scale: 3
                },
                label: {
                    normal: {
                        show: true,
                        color: '#fff',
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                //终点形象
                symbol: 'circle',
                //圆点大小
                symbolSize: function (val) {
                    return val[2] / 8;
                },
                itemStyle: {
                    normal: {
                        show: true
                    }
                },
                data: item[1].map(function (dataItem) {
                    return {
                        name: dataItem[1].name,
                        value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                    };
                })

            });

        });

        option = {
            title: {
                text: '',
                subtext: '',
                left: 'center',
                textStyle: {
                    color: '#fff'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: '{b}'
            },
            //线颜色及飞行轨道颜色
            visualMap: {
                show: false,
                min: 0,
                max: 100,
                color: ['#31A031', '#31A031']
            },
            //地图相关设置
            geo: {
                map: '上海',
                //视角缩放比例
                zoom: 1,
                //显示文本样式
                label: {
                    normal: {
                        show: false,
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    emphasis: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                //鼠标缩放和平移
                roam: true,
                itemStyle: {
                    normal: {
                        //          	color: '#ddd',
                        borderColor: 'rgba(147, 235, 248, 1)',
                        borderWidth: 1,
                        areaColor: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.8,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(175,238,238, 0)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(	47,79,79, .2)' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        },
                        shadowColor: 'rgba(128, 217, 248, 1)',
                        // shadowColor: 'rgba(255, 255, 255, 1)',
                        shadowOffsetX: -2,
                        shadowOffsetY: 2,
                        shadowBlur: 10
                    },
                    emphasis: {
                        areaColor: '#389BB7',
                        borderWidth: 0
                    }
                }
            },
            series: series
        };
        myChart.setOption(option);

    }
    //上海飞机场
    function echart_5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_5'));

        function showProvince() {
            var geoCoordMap = {
                '上海浦东国际机场': [121.81,31.14],
                '上海虹桥国际机场': [121.34,31.20],
                
            };
            var data = [{
                name: '上海浦东国际机场',
                value: 100
            },
            {
                name: '上海虹桥国际机场',
                value: 100
            },
          
            ];
            var max = 480,
                min = 9; // todo
            var maxSize4Pin = 100,
                minSize4Pin = 20;
            var convertData = function (data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var geoCoord = geoCoordMap[data[i].name];
                    if (geoCoord) {
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value)
                        });
                    }
                }
                return res;
            };

            myChart.setOption(option = {
                title: {
                    top: 20,
                    text: '',
                    subtext: '',
                    x: 'center',
                    textStyle: {
                        color: '#ccc'
                    }
                },
                legend: {
                    orient: 'vertical',
                    y: 'bottom',
                    x: 'right',
                    data: ['pm2.5'],
                    textStyle: {
                        color: '#fff'
                    }
                },
                visualMap: {
                    show: false,
                    min: 0,
                    max: 500,
                    left: 'left',
                    top: 'bottom',
                    text: ['高', '低'], // 文本，默认为数值文本
                    calculable: true,
                    seriesIndex: [1],
                    inRange: {
                    }
                },
                geo: {
                    show: true,
                    map: '上海',
                    mapType: 'beijing',
                    label: {
                        normal: {
                        },
                        //鼠标移入后查看效果
                        emphasis: {
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    //鼠标缩放和平移
                    roam: true,
                    itemStyle: {
                        normal: {
                            //          	color: '#ddd',
                            borderColor: 'rgba(147, 235, 248, 1)',
                            borderWidth: 1,
                            areaColor: {
                                type: 'radial',
                                x: 0.5,
                                y: 0.5,
                                r: 0.8,
                                colorStops: [{
                                    offset: 0,
                                    color: 'rgba(175,238,238, 0)' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: 'rgba(	47,79,79, .2)' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                            shadowColor: 'rgba(128, 217, 248, 1)',
                            shadowOffsetX: -2,
                            shadowOffsetY: 2,
                            shadowBlur: 10
                        },
                        emphasis: {
                            areaColor: '#389BB7',
                            borderWidth: 0
                        }
                    }
                },
                series: [{
                    name: 'light',
                    type: 'map',
                    coordinateSystem: 'geo',
                    data: convertData(data),
                    itemStyle: {
                        normal: {
                            color: '#F4E925'
                        }
                    }
                },
                {
                    name: '点',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    symbol: 'pin',
                    symbolSize: function (val) {
                        var a = (maxSize4Pin - minSize4Pin) / (max - min);
                        var b = minSize4Pin - a * min;
                        b = maxSize4Pin - a * max;
                        return a * val[2] + b;
                    },
                    label: {
                        normal: {
                            // show: true,
                            // textStyle: {
                            //     color: '#fff',
                            //     fontSize: 9,
                            // }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#F62157', //标志颜色
                        }
                    },
                    zlevel: 6,
                    data: convertData(data),
                },
                {
                    name: 'light',
                    type: 'map',
                    mapType: 'chongqing',
                    geoIndex: 0,
                    aspectScale: 0.75, //长宽比

                    showLegendSymbol: false, // 存在legend时显示
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false,
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    roam: true,
                    itemStyle: {
                        normal: {
                            areaColor: '#031525',
                            borderColor: '#FFFFFF',
                        },
                        emphasis: {
                            areaColor: '#2B91B7'
                        }
                    },
                    animation: false,
                    data: data
                },
                {
                    name: ' ',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: convertData(data.sort(function (a, b) {
                        return b.value - a.value;
                    }).slice(0, 5)),
                    symbolSize: function (val) {
                        return val[2] / 10;
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#05C3F9',
                            shadowBlur: 10,
                            shadowColor: '#05C3F9'
                        }
                    },
                    zlevel: 1
                },

                ]
            });
        }
        showProvince();

        // 使用刚指定的配置项和数据显示图表。
        // myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }


    // //点击跳转
    // $('#chart_map').click(function(){
    //     window.location.href = './page/index.html';
    // });
    // $('.t_btn2').click(function(){
    //     window.location.href = "./page/index.html?id=2";
    // });
    // $('.t_btn3').click(function(){
    //     window.location.href = "./page/index.html?id=3";
    // });
    // $('.t_btn4').click(function(){
    //     window.location.href = "./page/index.html?id=4";
    // });
    // $('.t_btn5').click(function(){
    //     window.location.href = "./page/index.html?id=5";
    // });
    // $('.t_btn6').click(function(){
    //     window.location.href = "./page/index.html?id=6";
    // });
    // $('.t_btn7').click(function(){
    //     window.location.href = "./page/index.html?id=7";
    // });
    // $('.t_btn8').click(function(){
    //     window.location.href = "./page/index.html?id=8";
    // });
    // $('.t_btn9').click(function(){
    //     window.location.href = "./page/index.html?id=9";
    // });
});
