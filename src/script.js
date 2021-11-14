console.log('hello world');

const chart = LightweightCharts.createChart(document.getElementById('chart1'), { width: 900, height: 500 });
const lineSeries = chart.addLineSeries({
    priceScaleId: 'right',
    title: 'Line Series',
    scaleMargins: {
        top: 0.8,
        bottom: 0.8,
    }
});
chart.applyOptions({
    rightPriceScale: {
        scaleMargins: {
            top: 0.6,
            bottom: 0.05,
        }
    }
});
lineSeries.setData([
    { time: '2019-04-11', value: 80.01 },
    { time: '2019-04-12', value: 96.63 },
    { time: '2019-04-13', value: 76.64 },
    { time: '2019-04-14', value: 81.89 },
    { time: '2019-04-15', value: 74.43 },
    { time: '2019-04-16', value: 80.01 },
    { time: '2019-04-17', value: 96.63 },
    { time: '2019-04-18', value: 76.64 },
    { time: '2019-04-19', value: 81.89 },
    { time: '2019-04-20', value: 74.43 },
]);
