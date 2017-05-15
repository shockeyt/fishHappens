console.log("Chartin' off right.");

// import Chart from './node_modules/chart.js';

var x = document.getElementById("test");
let myChart = new Chart(x, {
    type: 'bar',
    data: {
    labels: Temps, // this array is passed in only to provide a label for each piece of 
    // flow data, and then the labels are hidden. This is to comply with how chart.js sets up their charts
    datasets: [{
        label: chartLabel,
        data: [86,42],
        backgroundColor: '#cee1ff',
        borderColor: [
            '#3c79d8',
        ],
        borderWidth: 1
    },]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:false
                }
            }],
            xAxes: [{
                display: false
            }]
        }
    }
});