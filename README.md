# Climate Change Data

Just a simple project working with the National Centers for Environmental Information API.

Click [here](https://mrmicrowaveoven.github.io/ClimateChangeGraph/) to see the live project.

This was made using the https://www.ncdc.noaa.gov api, with a C3 graphing library.

## Difficulties I Encountered

While the National Centers for Environmental Information API was quick and easy to use, most of my time was actually spent on getting the graphing library to work.  After trying to get D3 to display a simple line graph, I discovered the C3 extension.  Much more bare-bones.  D3 seems to be better with visualization, and C3 better for simple charts (which is what I wanted).  Even better, C3 is much friendlier with turning simple arrays of data into charts.

There was some difficulty parsing the Date as the x-axis.  The date format of the API had to be regexed exactly as the C3 library requires, and even then it could be a little frustrating.

## Further Plans

1) User input for dates.  I don't know if I can make it draggable, but at the very least I can give the user DateTime fields so they can adjust the data.

2) Conversion to Celsius.  For the rest of the world's viewing convenience.

3) Allowing the user to choose a station, since there are many.  Probably a dropdown menu.
