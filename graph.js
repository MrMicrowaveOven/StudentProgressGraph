

// require.config({
//   baseUrl: '/js',
//   paths: {
//     d3: "http://d3js.org/d3.v3.min"
//   }
// });

function makeGraph(data) {
  // require(["d3", "c3"], function(d3, c3) {
  // console.log(data);

  var dataArray = [
    // ["Dates"].concat(parsedData.dates),
    ["MinTemps"].concat(data.minTemps),
    ["MaxTemps"].concat(data.maxTemps)
  ];
    c3.generate({
      bindto: '#chart',
      data: {
        columns: dataArray
      },
      axis: {
        y: {
          label: { // ADD
            text: 'Temperature',
            position: 'outer-middle'
          }
        },
      }
    });
  // });
}
