function makeGraph(data) {
  var dataArray = [
    ["date"].concat(data.dates),
    ["Minimum Temperature"].concat(data.minTemps),
    ["Maximum Temperature"].concat(data.maxTemps)
  ];
  var units = $("#unitsDropdown")[0].value;
  if (units === "standard") {
    var unitAbrev = "F";
  } else if (units === "metric") {
    var unitAbrev = "C";
  }
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
          text: 'Temperature (' + unitAbrev + ')',
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
