$.ajax({
  type: "GET",
  url:"https://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&stationid=GHCND:USC00040232&startdate=2017-01-30&enddate=2017-04-30&limit=1000",
  beforeSend: function(xhr){xhr.setRequestHeader('token', 'TDslBowwDzKucWUwYmhdEiaKhBLVBmDB');},
  success: function (res) {
    // console.log("Success!");

      // console.log(res.results);
      makeArraysOfData(res.results);
      // makeGraph(res);
  },
  error: function (xhr, status, error) {
    console.log(error);
  }
});

function makeArraysOfData(data) {
  // console.log(data);
  var parsedData = [];
  var currentDateObject = {};
  var currentDate = data[0].date;
  var dates = [];
  var minTemps = [];
  var maxTemps = [];
  data.forEach(function(dataPoint) {
    // console.log(dataPoint);
    if (dataPoint.datatype == "TMAX") {
      maxTemps.push(dataPoint.value);
      // currentDateObject["TMAX"] = dataPoint.value;
      // currentDateObject["date"] = dataPoint.date;
    } else if (dataPoint.datatype == "TMIN") {
      minTemps.push(dataPoint.value)
      // currentDateObject["TMIN"] = dataPoint.value;
      // currentDateObject["date"] = dataPoint.date;
    }
    if (currentDate !== dataPoint.date) {
      dates.push(currentDate.slice(0,4) + currentDate.slice(5,7) + currentDate.slice(8,10));
      currentDate = dataPoint.date;
    }
  });
  dates.push(data[data.length - 1].date.slice(0,4) + data[data.length - 1].date.slice(5,7) + data[data.length - 1].date.slice(8,10));
  // console.log(parsedData.dates);
  parsedData = {
    dates: dates,
    minTemps: minTemps,
    maxTemps: maxTemps,
  };

  // $("#response").html(JSON.stringify(parsedDataArray));
  makeGraph(parsedData);
}
