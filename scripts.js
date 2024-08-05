document.addEventListener('DOMContentLoaded', function() {
    const createChart = (id, type, data, options) => {
        const ctx = document.getElementById(id).getContext('2d');
        return new Chart(ctx, {
            type,
            data,
            options
        });
    };

    createChart('revenueTrendChart', 'bar', {
        labels: ['Q1 Act', 'Q2 BE', 'Q2 BE', 'Q2 ', 'Q2 '],
        datasets: [{
            label: 'Revenue',
            data: [286.1, 284.5, -152.4, 132.1],
            backgroundColor: ['#1a73e8', '#1a73e8', '#e8711a', '#1a73e8', '#1a73e8']
        }]
    }, {
        responsive: true,
        plugins: {
            legend: { display: false }
        }
    });



    createChart('utilizationChart', 'bar', {
        labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [
            { label: 'Total HC', data: [17703, 17601, 17494, 17548, 17577, 17583], backgroundColor: '#1a73e8' },
            { label: 'Leave', data: [310, 310, 310, 310, 310, 310], backgroundColor: '#e8711a' },
            { label: 'Pre-Production', data: [820, 820, 820, 820, 820, 820], backgroundColor: '#34a853' },
            { label: 'Prod', data: [8225, 8225, 8225, 8225, 8225, 8225], backgroundColor: '#fbbc05' }
        ]
    }, {
        responsive: true,
        plugins: { legend: { display: true } }
    });

    createChart('peakProdChart', 'line', {
        labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [{
            label: 'Peak Prod HC',
            data: [14928, 14928, 14928, 14928, 14928, 14928],
            borderColor: '#1a73e8',
            fill: false
        }]
    }, {
        responsive: true,
        plugins: { legend: { display: true } }
    });

    createChart('onsiteBenchChart', 'bar', {
        labels: ['<= 7 days', '8-30 days', '31-60 days', '> 60 days'],
        datasets: [{
            label: 'Onsite Bench',
            data: [106, 24, 30, 29],
            backgroundColor: ['#e8711a', '#fbbc05', '#34a853', '#1a73e8']
        }]
    }, {
        responsive: true,
        plugins: { legend: { display: true } }
    });

    // New Charts
    createChart('pendingBillingChart', 'doughnut', {
        labels: ['T&M', 'FP'],
        datasets: [{
            data: [22562, 71008],
            backgroundColor: ['#1a73e8', '#e8711a']
        }]
    }, {
        responsive: true,
        plugins: { legend: { display: true } }
    });

    createChart('preProductionChart', 'pie', {
        labels: ['BGV', 'Client onboarding', 'Evaluating', 'Not Updated'],
        datasets: [{
            data: [50, 76, 321, 436],
            backgroundColor: ['#1a73e8', '#34a853', '#fbbc05', '#e8711a']
        }]
    }, {
        responsive: true,
        plugins: { legend: { display: true } }
    });

    createChart('roleMixChart', 'bar', {
        labels: ['JL6', 'JL5', 'JL4', 'JL3A', 'JL3B'],
        datasets: [
            { label: 'Role Mix', data: [18, 40, 24, 12.3, 5.8], backgroundColor: '#1a73e8' },
            { label: 'Ideal Mix', data: [8, 23, 23, 23, 23], backgroundColor: '#e8711a' }
        ]
    }, {
        responsive: true,
        plugins: { legend: { display: true } }
    });

    createChart('demandDataChart', 'doughnut', {
        labels: ['Open', 'Abandon', 'Closed', 'Expired', 'Fulfilled'],
        datasets: [{
            data: [524, 1819, 2649, 126, 1077],
            backgroundColor: ['#1a73e8', '#fbbc05', '#34a853', '#e8711a', '#964B00']
        }]
    }, {
        responsive: true,
        plugins: { legend: { display: true } }
    });

    createChart('visaUtilizationChart', 'bar', {
        labels: ['May', 'Jun', 'Jul', 'Curr Week'],
        datasets: [
            { label: 'Valid Visa', data: [71.7, 72.5, 72.3, 69.5], backgroundColor: '#1a73e8' },
            { label: 'Valid Petition', data: [17.7, 17.7, 17.7, 17.7], backgroundColor: '#e8711a' }
        ]
    }, {
        responsive: true,
        plugins: { legend: { display: true } }
    });


});
function resizeChartContainers() {
    const chartContainers = document.querySelectorAll('.chart-container');

    chartContainers.forEach(container => {
        const chart = container.querySelector('canvas');
        container.style.height = `${chart.clientHeight + 50}px`; // Adjust the height based on the chart's height
    });
}

window.addEventListener('resize', resizeChartContainers);
window.addEventListener('load', resizeChartContainers);

// Initialize charts and then call resizeChartContainers after charts are rendered
window.onload = function() {
    // Your Chart.js initialization code here...

    resizeChartContainers();
};

