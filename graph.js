function makeGraph(data) {
  var dataArray = [
    ["date"].concat(data.dates),
    ["MinTemps"].concat(data.minTemps),
    ["MaxTemps"].concat(data.maxTemps)
  ];
  c3.generate({
    bindto: '#chart',
    data: {
      x: "date",
      xFormat : '%Y%m%d',
      columns: dataArray
    },
    axis: {
      y: {
        label: { // ADD
          text: 'Temperature (F)',
          position: 'outer-middle'
        }
      },
      x: {
        type: 'timeseries',
        tick: {
          format: '%m/%d/%y'
        },
        label: 'Date',
        position: 'outer-middle'
      }
    }
  });
}
