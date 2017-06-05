function makeGraph(data) {
  var dataArray = [
    ["date"].concat(data.dates),
    ["Minimum Temperature"].concat(data.minTemps),
    ["Maximum Temperature"].concat(data.maxTemps)
  ];
  var units = $("#unitsDropdown")[0].value;
  var unitAbrev;
  if (units === "standard") {
    unitAbrev = "F";
  } else if (units === "metric") {
    unitAbrev = "C";
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
        label: {
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
