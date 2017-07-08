function makeGraph(data) {
  var dataArray = [
    ["date"].concat(data.dates),
    ["Susan"].concat(data.minTemps),
    ["Bob"].concat(data.maxTemps)
  ];
  var units = "standard";
  var unitAbrev;
  if (units === "standard") {
    unitAbrev = "F";
  } else if (units === "metric") {
    unitAbrev = "C";
  }
  var dateLines = [
    new Date("02/09/17"),
    new Date("02/30/17"),
    new Date("03/19/17"),
    new Date("04/10/17"),
  ];
  var notes = [
    "Added new target",
    "Decision made: use prompt hierarchy V-G-M.  Use Ipad for first one and for last 9 use non-reinforcer item.  Need to confirm tactic change at next parent-teacher conference.",
    'Teacher decision: "all" and "on", write down and use red marker for ending sound.',
    'Added generalization target'
  ];
  var proctors = [
    "Smith, Bob",
    "Bulgary, Mike",
    "Delgato, Susan",
    "Delgato, Ally"
  ];

  var lineData = [];
  var legendData = [];

  dateLines.forEach(function(el, ind) {
    lineData.push(
      {
        value: dateLines[ind],
        text: notes[ind].slice(0, 20) + "..."
      }
    );
    legendData.push(
      {
        date: dateLines[ind],
        text: notes[ind],
        proctor: proctors[ind]
      }
    );
  });

  c3.generate({
    bindto: '#chart',
    data: {
      x: "date",
      xFormat : '%Y%m%d',
      columns: dataArray
    },
    axis: {
      y: {
        label: {
          text: 'Percent Correct',
          position: 'outer-middle'
        }
      },
      x: {
        type: 'timeseries',
        tick: {
          format: '%m/%d/%y'
        },
        label: 'Date',
        position: 'outer-middle'
      }
    },
    grid: {
      x: {
        lines: lineData
      },
      // y: {
      //   lines: [
      //     {value: 50, text: 'Phase change'}
      //   ]
      // },
    },
    // onmouseover: function(d) {
    //   console.log ("yo" + d);
    // },
  });

  legendData.forEach(function(legend) {
    $("#legend").append(
      "<div class='legendBit hide' id=" + legend.date.toDateString().replace(" ", "").slice(0,6) + "><div id='dateDisplay'>" + legend.date.toDateString() + ": </div>" + legend.text + "<br>- " + legend.proctor + "<br><br></div>"
    );
  });
  addLineHoverFunctionality();
}

function addLineHoverFunctionality() {
  $("#chart text").on("mouseenter", function(e) {
    var dateOfHover = e.target.parentNode.__data__.value;
    // $("#" + dateOfHover.toDateString().replace(" ", "").slice(0,6)).addClass("bolder");
    if (dateOfHover) {
      $("#" + dateOfHover.toDateString().replace(" ", "").slice(0,6)).removeClass("hide");
    }
  });
  $("#chart text").on("mouseleave", function(e) {
    var dateOfHover = e.target.parentNode.__data__.value;
    // $("#" + dateOfHover.toDateString().replace(" ", "").slice(0,6)).removeClass("bolder");
    if (dateOfHover) {
      $("#" + dateOfHover.toDateString().replace(" ", "").slice(0,6)).addClass("hide");
    }
  });
  $("#chart text").on("mouseenter", function(e) {
    // console.log(e.target.parentNode.__data__.value);
    var dateOfHover = e.target.parentNode.__data__.value;
    // $("#" + dateOfHover.toDateString().replace(" ", "").slice(0,6)).addClass("bolder");
    if (dateOfHover) {
      $("#" + dateOfHover.toDateString().replace(" ", "").slice(0,6)).removeClass("hide");
    }
  });
  $("#chart text").on("mouseleave", function(e) {
    var dateOfHover = e.target.parentNode.__data__.value;
    // $("#" + dateOfHover.toDateString().replace(" ", "").slice(0,6)).removeClass("bolder");
    if (dateOfHover) {
      $("#" + dateOfHover.toDateString().replace(" ", "").slice(0,6)).addClass("hide");
    }
  });
}

addLineHoverFunctionality();

$("#showAllToggle").on("change", function() {
  if ($("#showAllToggle")[0].checked) {
    $(".legendBit").removeClass("hide");
    $("#chart text").off('mouseenter mouseleave');
  } else {
    $(".legendBit").addClass("hide");
    addLineHoverFunctionality();
  }
});
