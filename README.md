# Climate Change Data

Just a simple project working with the National Centers for Environmental Information API.

Click [here](https://mrmicrowaveoven.github.io/ClimateChangeGraph/) to see the live project.

This was made using the https://www.ncdc.noaa.gov api, with a C3 graphing library.

## Difficulties I Encountered

While the National Centers for Environmental Information API was quick and easy to use, most of my time was actually spent on getting the graphing library to work.  After trying to get D3 to display a simple line graph, I discovered the C3 extension.  Much more bare-bones.  D3 seems to be better with visualization, and C3 better for simple charts (which is what I wanted).  Even better, C3 is much friendlier with turning simple arrays of data into charts.

There was some difficulty parsing the Date as the x-axis.  The date format of the API had to be regexed exactly as the C3 library requires, and even then it could be a little frustrating.

One thing that I did not do is validate the data.  For example, this was the object given for the maximum temperature on 4/18/2017:  
{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"date": "2017-04-18T00:00:00",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"datatype": "TMAX",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"station": "GHCND:USC00040232",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"attributes": ",,7,0800",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"value": 222  
}

Notice the datatype is TMAX, implying max temperature.  The value is 222.  I actually was not able to find what this value implies.  Not being a scientist, I do not know if this number of "Max Temperature" is unreasonable as an earthly fahrenheit temperature.  However, I was able to display the values onto the chart.

## Further Plans

1) User input for dates.  I don't know if I can make it draggable, but at the very least I can give the user DateTime fields so they can adjust the data.

2) Conversion to Celsius.  For the rest of the world's viewing convenience.

3) Allowing the user to choose a station, since there are many.  Probably a dropdown menu.
