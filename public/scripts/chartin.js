console.log("Chartin' off right.");

// import Chart from './node_modules/chart.js';

var ctx = document.getElementById("myChart");
let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Yesterday", "Current"],
        datasets: [{
            label: 'Past 7 days',
            data: [12, 19.2, 3, 5, 2, 3],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: [
                'rgba(255,99,132,1)',
            ],
            borderWidth: 1
        },
            {label: 'temerature',
            data: [2, 4, 19, 5, 17, 3],
            backgroundColor: [
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
            ],
            borderWidth: 1
        },

        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});