# Climate Change Data

Just a simple project working with the National Centers for Environmental Information API.

Click [here](https://mrmicrowaveoven.github.io/ClimateChangeGraph/) to see the live project.

This was made using the https://www.ncdc.noaa.gov api, with a C3 graphing library.

## Difficulties I Encountered

While the National Centers for Environmental Information API was quick and easy to use, most of my time was actually spent on getting the graphing library to work.  After trying to get D3 to display a simple line graph, I discovered the C3 extension.  Much more bare-bones.  D3 seems to be better with visualization, and C3 better for simple charts (which is what I wanted).  Even better, C3 is much friendlier with turning simple arrays of data into charts.

There was some difficulty parsing the Date as the x-axis.  The date format of the API had to be regexed exactly as the C3 library requires, and even then it could be a little frustrating.

One of the challenges was to include a Station Selection input.  The primary issue: there are 125207 worldwide.  I considered adding a search bar (this could be a deep rabbit hole), but eventually decided to only do locations within the Antioch range (FIPS:06013).
