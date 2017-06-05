function displayLoadingStatus() {
  $("#response").removeClass("invisible");
}

function noDataErrorStatus() {
  $("#noDataErrorDisplay").removeClass("hide");
  $("#chart").addClass("invisible");
}

function invalidDateRangeErrorStatus() {
  $("#invalidDateRangeErrorDisplay").removeClass("hide");
  $("#chart").addClass("invisible");
}

function displayProperGraphStatus() {
  $("#noDataErrorDisplay").addClass("hide");
  $("#invalidDateRangeErrorDisplay").addClass("hide");
  $("#response").addClass("invisible");
  $("#chart").removeClass("invisible");
}
