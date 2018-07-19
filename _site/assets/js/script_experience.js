var w = 500,
h = 500;

var colorscale = d3.scale.category10();
//var colorscale = d3.interpolatePurples(0.5)

// Data
var d = [[
          {axis:"embeded C",value:0.7},
          {axis:"C++",value:0.8},
          {axis:"Perl",value:0.9},
          {axis:"Matlab",value:0.95},
          {axis:"AWK/GREP/SED",value:0.9},
          {axis:"Shell Script",value:0.65},
          {axis:"R",value:0.55},
          {axis:"HTML/JavaScript/CSS",value:0.2},
          {axis:"Java",value:0.15},
          {axis:"Python",value:0.35},
          {axis:"Git",value:0.75}
        ]];

//Options for the Radar chart, other than default
var mycfg = {
w: w,
h: h,
maxValue: 1.0,
levels: 5,
ExtraWidthX: 300
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart_experience", d, mycfg);
