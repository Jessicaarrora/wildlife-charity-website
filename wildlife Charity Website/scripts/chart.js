var xValues = [
  'Europe',
  'Asia',
  'South America',
  'Oceania',
  'Africa',
  'Central America',
];
var yValues1 = [33399, 18933, 4734, 4371, 2892, 1048];
var yValues2 = [87411, 63249, 12333, 29212, 5927, 2503];
var barColors = ['green', 'orange', 'brown', 'yellow', 'blue', 'grey'];

new Chart('my-chart', {
  type: 'bar',
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues1
      },
      {
        backgroundColor: barColors,
        data: yValues2,
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Continents',
          },
        },
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Number of Visitors',
          },
          ticks: {
            min: 0, //minimum value
            max: 90000, //maximum value
          },
        },
      ],
    },
    title: {
      display: true,
      text: 'Visitors comparison outside of North America in January 2022 and January 2023',
    },
    tooltips: {
      callback: {
        label: (item) => (new Date(item.ylabel*1000).toISOString().substring(11,19))
      }
    }
  },
});
