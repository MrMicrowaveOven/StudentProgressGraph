# Climate Change Data

Just a simple project working with the National Centers for Environmental Information API.

This was made using the https://www.ncdc.noaa.gov api, with a C3 graphing library.

## Difficulties I Encountered

While the National Centers for Environmental Information API was quick and easy to use, most of my time was actually spent on getting the graphing library to work.  After spending time getting D3 to work, I discovered the C3 extension.  Much more bare-bones.  D3 seems to be better with visualization, and C3 better for simple charts (which is what I wanted).  Even better, C3 is much friendlier with turning simple arrays of data into charts.

Currently the Date as the x-axis is not working.  According to the documentation there is a 'timeseries' datatype that I can use to show days in a proper date format (this is preferable to formatting it myself).  However, it is having difficulty converting my string (even though it's in '%Y%m%d' as specified).  I'm going to play around with it a bit to see if I can get it to work, then parse the date myself as a last resort.
