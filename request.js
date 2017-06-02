$("#startDate").on("change", function(e) {
  refreshGraph();
});
$("#endDate").on("change", function(e) {
  refreshGraph();
});

function refreshGraph() {
  var startDate = $("#startDate")[0].value;
  var endDate = $("#endDate")[0].value;
  $("#response").removeClass("invisible");
  $.ajax({
    type: "GET",
    url:"https://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&stationid=GHCND:USC00040232&"
      + "startdate=" + startDate + "&"
      + "enddate=" + endDate + "&limit=1000",
    beforeSend: function(xhr){xhr.setRequestHeader('token', 'TDslBowwDzKucWUwYmhdEiaKhBLVBmDB');},
    success: function (res) {
      $("#response").addClass("invisible");
      makeArraysOfData(res.results);
    },
    error: function (xhr, status, error) {
      $("#response").addClass("invisible");
      console.log(error);
    }
  });
}
$("#startDate")[0].value = ("2017-01-30")
$("#endDate")[0].value = ("2017-04-30")

refreshGraph()

function makeArraysOfData(data) {
  // console.log(data);
  var parsedData = [];
  var currentDateObject = {};
  var currentDate = data[0].date;
  var dates = [];
  var minTemps = [];
  var maxTemps = [];
  data.forEach(function(dataPoint) {
    if (dataPoint.datatype == "TMAX") {
      maxTemps.push(dataPoint.value);
    } else if (dataPoint.datatype == "TMIN") {
      minTemps.push(dataPoint.value);
    }
    if (currentDate !== dataPoint.date) {
      dates.push(currentDate.slice(0,4) + currentDate.slice(5,7) + currentDate.slice(8,10));
      currentDate = dataPoint.date;
    }
  });
  dates.push(data[data.length - 1].date.slice(0,4) + data[data.length - 1].date.slice(5,7) + data[data.length - 1].date.slice(8,10));

  parsedData = {
    dates: dates,
    minTemps: minTemps,
    maxTemps: maxTemps,
  };

  makeGraph(parsedData);
}
