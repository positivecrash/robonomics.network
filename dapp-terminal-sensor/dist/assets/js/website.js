$.getJSON(
    'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/usdeur.json',
    function (data) {

        Highcharts.chart('chart-container', {
            // colors: ['#bbb606'],
            // colors: ['#28d26c'],
            // colors: ['#ff9b00'],
            // colors: ['#ff0e72'],
            // colors: ['#ff50c9'],
            colors: ['#ff9595'],

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
            plotOptions: {
                column: {
                    pointPadding: 0.01,
                    borderWidth: 0
                }
            },
            series: [{
                type: 'column',
                // type: 'area',
                name: 'PM1',
                data: [0,0,0,2,0,0,4,6,7,0,0,0,4,0,0,0,0,2,0,12,0,0,0,15,0,0,0,2,0,0,4,6,7,0,0,0,4,0,0,0,0,2,0,12,0,0,0,15,0,0,0,2,0,0,4,6,7,0,0,0,4,0,0,0,0,2,0,12,0,0,0,15,0,0,0,2,0,0,4,6,7,0,0,0,4,0,0,0,0,2,0,12,0,0,0,15,0,0,0,2,0,0,4,6,7,0,0,0,4,0,0,0,0,2,0,12,0,0,0,15,0,0,0,2,0,0,4,6,7,0,0,0,4,0,0,0,0,2,0,12,0,0,0,15,0,0,0,2,0,0,4,6,7,0,0,0,4,0,0,0,0,2,0,12,0,0,0,15,0,0,0,2,0,0,4,6,7,0,0,0,4,0,0,0,0,2,0,12,0,0,0,15,0,0,0,2,0,0,4,6,7,0,0,0,4,0,0,0,0,2,0,12,0,0,0,15,0,0,0,2,0,0,4,6,7,0,0,0,4,0,0,0,0,2,0,12,0,0,0,15,0,0,0,2,0,0,4,6,7,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,4,0,0,0,0,2,0,0,0,0,0,15]
            }]
        });
    }
);
