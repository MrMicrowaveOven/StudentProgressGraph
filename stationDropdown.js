$.ajax({
  type: "GET",
  url:"https://www.ncdc.noaa.gov/cdo-web/api/v2/stations?limit=1000&locationid=FIPS:06013",
  beforeSend: function(xhr){xhr.setRequestHeader('token', 'TDslBowwDzKucWUwYmhdEiaKhBLVBmDB');},
  success: function (res) {
    updateDropdown(res.results);
  },
  error: function (xhr, status, error) {
    console.log(error);
  }
});

function updateDropdown(stationList) {
  stationList.forEach(function(station) {
    if (station.id === "GHCND:USC00040232") {
      $("#stationDropdown").append("<option selected='selected' value=" + station.id + ">" + station.name + "</option>");
    } else {
      $("#stationDropdown").append("<option value=" + station.id + ">" + station.name + "</option>");
    }
  });
}
