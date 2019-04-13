$.getJSON(
    'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/usdeur.json',
    function (data) {

        Highcharts.chart('chart-container', {
            colors: ['#D10078'],

            chart: {
                zoomType: 'x',
                style: {
                    fontFamily: '\'Roboto\', sans-serif',
                    fontSize: '16px'
                },
                backgroundColor: 'transparent',
                spacing:[10, 0, 15, 0]
            },
            title: {
                text: ' '
            },
            // subtitle: {
            //     text: document.ontouchstart === undefined ?
            //         'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
            // },

            xAxis: {
                labels: {
                    style: {
                        color: '#ffffff'
                    }
                }
            },
            yAxis: {
                title: {
                    text: ' '
                },
                labels: {
                    style: {
                        color: '#ffffff'
                    }
                }
            },
            legend: {
                enabled: false
            },
            series: [{
                type: 'area',
                name: 'PM1',
                data: data
            }]
        });
    }
);
