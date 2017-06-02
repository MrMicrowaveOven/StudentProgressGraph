

// require.config({
//   baseUrl: '/js',
//   paths: {
//     d3: "http://d3js.org/d3.v3.min"
//   }
// });

function makeGraph(data) {
  // require(["d3", "c3"], function(d3, c3) {
  // console.log(data);

  // console.log(data.dates);
  var dataArray = [
    ["date"].concat(data.dates),
    ["MinTemps"].concat(data.minTemps),
    // ["MaxTemps"].concat(data.maxTemps)
  ];
  console.log(dataArray[0]);
    c3.generate({
      bindto: '#chart',
      data: {
        x: "date",
        x_format : '%Y%m%d',
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
          // tick: {
          //   fit: false
          // },
          label: 'Date',
          position: 'outer-middle'
        }
      }
    });
  // });
}
