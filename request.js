$.ajax({
  type: "GET",
  url:"https://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&stationid=GHCND:USC00040232&startdate=2017-04-15&enddate=2017-05-10&limit=1000",
  beforeSend: function(xhr){xhr.setRequestHeader('token', 'TDslBowwDzKucWUwYmhdEiaKhBLVBmDB');},
  success: function (res) {
    console.log("Success!");
      $("#response").html(JSON.stringify(res));
      // console.log(res.results);
      makeArraysOfData(res.results);
      // makeGraph(res);
  },
  error: function (xhr, status, error) {
    console.log(error);
  }
});

function makeArraysOfData(data) {
  console.log(data);
  var parsedData = [];
  var currentDateObject = {};
  var currentDate = data[0].date;
  data.forEach(function(dataPoint) {
    console.log(dataPoint);
    if (dataPoint.datatype == "TMAX") {
      currentDateObject["TMAX"] = dataPoint.value;
      currentDateObject["date"] = dataPoint.date;
    } else if (dataPoint.datatype == "TMIN") {
      currentDateObject["TMIN"] = dataPoint.value;
      currentDateObject["date"] = dataPoint.date;
    }
    if (currentDate !== dataPoint.date) {
      parsedData.push(currentDateObject);
      currentDate = dataPoint.date;
      currentDateObject = {};
    }
  });
  makeGraph(parsedData);
}
