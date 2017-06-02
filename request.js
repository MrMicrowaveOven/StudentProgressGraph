$.ajax({
  type: "GET",
  url:"https://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&stationid=GHCND:USC00040232&startdate=2017-04-15&enddate=2017-05-10&limit=1000",
  beforeSend: function(xhr){xhr.setRequestHeader('token', 'TDslBowwDzKucWUwYmhdEiaKhBLVBmDB');},
  success: function (res) {
    console.log("Success!");
      $("#response").html(JSON.stringify(res));
      console.log(res);
  },
  error: function (xhr, status, error) {
    console.log(error);
  }
});
