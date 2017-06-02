$.ajax({
  type: "GET",
  url:"https://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&stationid=GHCND:USC00040232&startdate=2017-04-15&enddate=2017-05-10&limit=1000",
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
  dates.push(data[0].date);
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
      dates.push(currentDate);
      currentDate = dataPoint.date;
    }
  });
  parsedData = {
    dates: dates,
    minTemps: minTemps,
    maxTemps: maxTemps,
  };

  // $("#response").html(JSON.stringify(parsedDataArray));
  makeGraph(parsedData);
}
