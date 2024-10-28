$(function () {
    echart_1();
    echart_2();

    echart_3();
    echart_4();

    echart_map();
    echart_5();

    //echart_1重庆市客运量
    function echart_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_1'));
        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c}万人"
            },
            legend: {
                x: 'center',
                y: '15%',
                data: ['2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016'],
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
                    value: 22085,
                    name: '2024',
                    itemStyle: {
                        normal: {
                            color: '#f845f1'
                        }
                    }
                },
                {
                    value: 21617,
                    name: '2023',
                    itemStyle: {
                        normal: {
                            color: '#ad46f3'
                        }
                    }
                },
                {
                    value: 21149,
                    name: '2022',
                    itemStyle: {
                        normal: {
                            color: '#5045f6'
                        }
                    }
                },
                {
                    value: 35250,
                    name: '2021',
                    itemStyle: {
                        normal: {
                            color: '#4777f5'
                        }
                    }
                },
                {
                    value: 39797,
                    name: '2020',
                    itemStyle: {
                        normal: {
                            color: '#44aff0'
                        }
                    }
                },
                {
                    value: 63659,
                    name: '2019',
                    itemStyle: {
                        normal: {
                            color: '#45dbf7'
                        }
                    }
                },
                {
                    value: 63634,
                    name: '2018',
                    itemStyle: {
                        normal: {
                            color: '#f6d54a'
                        }
                    }
                },
                {
                    value: 63298,
                    name: '2017',
                    itemStyle: {
                        normal: {
                            color: '#f69846'
                        }
                    }
                },
                {
                    value: 63702,
                    name: '2016',
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

    //echart_2重庆市地图
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
                    mapType: '重庆',
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
                        name: '万州区',
                        value: 100
                    }, {
                        name: '黔江区',
                        value: 96
                    }, {
                        name: '涪陵区',
                        value: 98
                    }, {
                        name: '渝中区',
                        value: 80
                    }, {
                        name: '大渡口区',
                        value: 88
                    }, {
                        name: '江北区',
                        value: 79
                    }, {
                        name: '沙坪坝区',
                        value: 77,
                    }, {
                        name: '九龙坡区',
                        value: 33
                    }, {
                        name: '南岸区',
                        value: 69,
                    }, {
                        name: '北碚区',
                        value: 66
                    }, {
                        name: '渝北区',
                        value: 22
                    }, {
                        name: '巴南区',
                        value: 51
                    }, {
                        name: '长寿区',
                        value: 44
                    }, {
                        name: '江津区',
                        value: 9
                    },
                    {
                        name: '合川区',
                        value: 10
                    }, {
                        name: '永川区',
                        value: 11
                    }, {
                        name: '南川区',
                        value: 12
                    }, {
                        name: '綦江区',
                        value: 13
                    }, {
                        name: '大足区',
                        value: 20
                    }, {
                        name: '璧山区',
                        value: 25
                    }, {
                        name: '铜梁区',
                        value: 30
                    }, {
                        name: '潼南区',
                        value: 35
                    }, {
                        name: '荣昌区',
                        value: 40
                    }, {
                        name: '开州区',
                        value: 45
                    }, {
                        name: '梁平县',
                        value: 50
                    }, {
                        name: '武隆县',
                        value: 55
                    }, {
                        name: '城口县',
                        value: 20
                    },
                    {
                        name: '丰都县',
                        value: 40
                    },
                    {
                        name: '垫江县',
                        value: 60
                    }, {
                        name: '巫溪县',
                        value: 80
                    }, {
                        name: '巫山县',
                        value: 100
                    }, {
                        name: '垫江县',
                        value: 9
                    }, {
                        name: '奉节县',
                        value: 70
                    }, {
                        name: '云阳县',
                        value: 3
                    }, {
                        name: '忠县',
                        value: 20
                    }, {
                        name: '石柱土家族自治县',
                        value: 20
                    }, {
                        name: '秀山土家族苗族自治县',
                        value: 9
                    }, {
                        name: '酉阳土家族苗族自治县',
                        value: 44
                    }, {
                        name: '彭水苗族土家族自治县',
                        value: 80
                    }]
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
            '南京': [118.80, 32.06],
            '北京': [116.4551, 40.2539],
            '北海': [109.314, 21.6211],
            '海口': [110.3893, 19.8516],
            '长沙': [113.019455, 28.200103],
            '上海': [121.47, 31.23],
            '呼和浩特': [111.75, 40.84],
            '郑州': [113.67, 34.75]
        };

        var GZData = [
            [{
                name: '重庆'
            }, {
                name: '福州',
                value: 95
            }],
            [{
                name: '重庆'
            }, {
                name: '长春',
                value: 80
            }],
            // [{
            //     name: '重庆'
            // }, {
            //     name: '重庆',
            //     value: 70
            // }],
            [{
                name: '重庆'
            }, {
                name: '西安',
                value: 60
            }],
            [{
                name: '重庆'
            }, {
                name: '成都',
                value: 50
            }],
            [{
                name: '重庆'
            }, {
                name: '南京',
                value: 40
            }],
            [{
                name: '重庆'
            }, {
                name: '北京',
                value: 30
            }],
            [{
                name: '重庆'
            }, {
                name: '北海',
                value: 20
            }],
            [{
                name: '重庆'
            }, {
                name: '海口',
                value: 10
            }],
            [{
                name: '重庆'
            }, {
                name: '上海',
                value: 80
            }],
            [{
                name: '重庆'
            }, {
                name: '郑州',
                value: 90
            }],
            [{
                name: '重庆'
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
            formatter: function (params, ticket, callback) {
                if (params.seriesType == "effectScatter") {
                    // return "线路：" + params.data.name + "" + params.data.value[2];
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

    //echart_3货物周转量
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
                data: ['铁路货物', '公路货物', '水路货物', '总计货物'],
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
                data: ['', '2020年', '2021年', '2022年', '2023年', '2024年', ''],
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
                name: '亿吨公里',
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
                    name: '铁路货物',
                    type: 'bar',
                    barWidth: "10%",

                    data: [0, 196.61, 246.66, 292.17, 322.47, 368.96, 0]
                },
                {
                    name: '公路货物',
                    type: 'bar',
                    barWidth: "10%",

                    data: [0, 1055.45, 1155.84, 1063.30, 1167.34, 1148.30, 0]
                },
                {
                    name: '水路货物',
                    type: 'bar',
                    barWidth: "10%",
                    data: [0, 2270.47, 2435.94, 2513.22, 2646.72, 2613.49, 0]
                },
                {
                    name: '总计货物',
                    type: 'bar', barWidth: "10%",

                    data: [0, 3524.70, 3841.66, 3871.90, 4065.28, 3986.72, 0]
                },
                // {
                //     name: '公路货物',
                //     type: 'bar', barWidth: "10%",

                //     data: [0, 6133.47, 6577.89, 7019.56, 6821.48, 7294.59]
                // },
                // {
                //     name: '水运货物',
                //     type: 'bar', barWidth: "10%",

                //     data: [0, 509.60, 862.54, 1481.77, 1552.79, 1333.62]
                // }
            ]
        };
        myChart.setOption(option);
    }
    //重庆高速公路
    function echart_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_4'));

        myChart.setOption({
            series: [{
                type: 'map',
                mapType: 'chongqing'
            }]
        });

        var geoCoordMap = {
            '重庆市城区': [106.33, 29.35],
            '重庆市合川': [106.15, 30.02],
            '重庆市江津': [106.16, 29.18],
            '巫山县': [109.88554550703, 31.080518811736],

        };

        var goData = [
            //中括号为1个数据项
            [{
                name: '重庆市城区'

            }, {
                id: 1,
                name: '重庆市合川',
                value: 86
            }],
            //中括号为1个数据项
            [{
                name: '重庆市城区'

            }, {
                id: 1,
                name: '重庆市江津',
                value: 80
            }],

            [{
                name: '重庆市合川'

            }, {
                id: 1,
                name: '重庆市江津',
                value: 80
            }],

            [{
                name: '巫山县'

            }, {
                id: 1,
                name: '重庆市江津',
                value: 80
            }],


        ];
        //值控制圆点大小
        var backData = [
            //中括号为1个数据项
            [{
                name: '重庆市城区'

            }, {
                id: 1,
                name: '重庆市合川',
                value: 80
            }],
            //中括号为1个数据项
            [{
                name: '重庆市江津'

            }, {
                id: 1,
                name: '重庆市城区',
                value: 80
            }],

            [{
                name: '巫山县'

            }, {
                id: 1,
                name: '重庆市城区',
                value: 80
            }],

            [{
                name: '重庆市江津'

            }, {
                id: 1,
                name: '巫山县',
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
                map: '重庆',
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
    //重庆市飞机场
    function echart_5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_5'));

        function showProvince() {
            var geoCoordMap = {
                '重庆江北国际机场': [106.638184, 29.716311],
                '万州五桥机场': [108.436494, 30.799035],
                '黔江武陵山机场': [108.83539, 29.511777],
                '重庆巫山机场': [109.712168, 31.064604],
                '重庆仙女山机场': [107.700248, 29.463028],
            };
            var data = [{
                name: '重庆江北国际机场',
                value: 100
            },
            {
                name: '万州五桥机场',
                value: 100
            },
            {
                name: '黔江武陵山机场',
                value: 100
            },
            {
                name: '重庆巫山机场',
                value: 100
            },
            {
                name: '重庆仙女山机场',
                value: 100
            }
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
                    map: '重庆',
                    mapType: 'chongqing',
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


    //点击跳转
    $('#chart_map').click(function () {
        window.location.href = './page/index.html';
    });
    $('.t_btn2').click(function () {
        window.location.href = "./page/index.html?id=2";
    });
    $('.t_btn3').click(function () {
        window.location.href = "./page/index.html?id=3";
    });
    $('.t_btn4').click(function () {
        window.location.href = "./page/index.html?id=4";
    });
    $('.t_btn5').click(function () {
        window.location.href = "./page/index.html?id=5";
    });
    $('.t_btn6').click(function () {
        window.location.href = "./page/index.html?id=6";
    });
    $('.t_btn7').click(function () {
        window.location.href = "./page/index.html?id=7";
    });
    $('.t_btn8').click(function () {
        window.location.href = "./page/index.html?id=8";
    });
    $('.t_btn9').click(function () {
        window.location.href = "./page/index.html?id=9";
    });
});
