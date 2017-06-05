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
