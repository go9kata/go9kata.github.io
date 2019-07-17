// Data
var d = [[
          {axis:"Omics",value:0.9},
          {axis:"IT infrastructure",value:0.65},
          {axis:"Arduino / Microcontrollers",value:0.8},
          {axis:"Machine learning",value:0.6},
          {axis:"Image processing",value:0.95},
          {axis:"Video acquisition",value:0.9},
          {axis:"Signal processing",value:0.65},
          {axis:"Statistics",value:0.55},
          {axis:"Bioinformatics tools",value:0.9},
          {axis:"Molecular biology",value:0.85},
          {axis:"Neuroscience techniques",value:0.75}
        ]];

//Options for the Radar chart, other than default
var mycfg = {
w: 400,
h: 400,
maxValue: 1.0,
levels: 5,
ExtraWidthX: 300,
color: d3.scale.ordinal().range(["#1E90FF"])
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart_experience", d, mycfg);
