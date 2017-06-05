$(".graph-input").on("change", function() {
  refreshGraph();
});

function refreshGraph() {
  var inputData = getInputs();
  inputData.stationId = inputData.stationId || "GHCND:USC00040232";
  loading();
  makeTempDataRequest(inputData);
}

function makeTempDataRequest(inputData) {
  $.ajax({
    type: "GET",
    url:"https://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&"
      + "units=" + inputData.unit + "&"
      + "stationid=" + inputData.stationId + "&"
      + "startdate=" + inputData.startDate + "&"
      + "enddate=" + inputData.endDate + "&limit=1000",
    beforeSend: function(xhr){
      xhr.setRequestHeader('token', 'TDslBowwDzKucWUwYmhdEiaKhBLVBmDB');
    },
    success: function (res) {
      displayProperGraph();
      makeArraysOfData(res.results);
    },
    error: function (xhr, status, error) {
      $("#response").addClass("invisible");
      if (xhr.status === 400) {
        invalidDateRangeError();
      }
    }
  });
}
function getInputs() {
  return {
    startDate: $("#startDate")[0].value,
    endDate: $("#endDate")[0].value,
    stationId: $("#stationDropdown")[0].value,
    unit: $("#unitsDropdown")[0].value,
  };
}

$("#startDate")[0].value = ("2017-01-30");
$("#endDate")[0].value = ("2017-04-30");

refreshGraph();

function makeArraysOfData(data) {
  // No data for that location in that range.
  if (!data) {
    noDataError();
    return;
  }
  var currentDate = data[0].date;
  var dates = [];
  var minTemps = [];
  var maxTemps = [];
  data.forEach(function(dataPoint) {
    if (dataPoint.datatype === "TMAX") {
      maxTemps.push(dataPoint.value);
    } else if (dataPoint.datatype === "TMIN") {
      minTemps.push(dataPoint.value);
    }
    if (currentDate !== dataPoint.date) {
      dates.push(parseDate(currentDate));
      currentDate = dataPoint.date;
    }
  });
  dates.push(parseDate(data[data.length - 1].date));

  // There is data, but not Temperature data that matches the request.
  if (minTemps.length === 0) {
    noDataError();
    return;
  }
  makeGraph({
    dates: dates,
    minTemps: minTemps,
    maxTemps: maxTemps,
  });
}

function parseDate(date) {
  return date.slice(0,4) + date.slice(5,7) + date.slice(8,10);
}

function loading() {
  $("#response").removeClass("invisible");
}

function noDataError() {
  $("#noDataErrorDisplay").removeClass("hide");
  $("#chart").addClass("invisible");
}

function invalidDateRangeError() {
  $("#invalidDateRangeErrorDisplay").removeClass("hide");
  $("#chart").addClass("invisible");
}

function displayProperGraph() {
  $("#noDataErrorDisplay").addClass("hide");
  $("#invalidDateRangeErrorDisplay").addClass("hide");
  $("#response").addClass("invisible");
  $("#chart").removeClass("invisible");
}
