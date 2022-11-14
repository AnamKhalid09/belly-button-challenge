// Get the sample.json endpoint
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

//  Fetch the JSON data and console log it
d3.json(url).then((data) => console.log(data.samples));

// 2 Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

// Use sample_values as the values for the bar chart.

// Use otu_ids as the labels for the bar chart.

// Use otu_labels as the hovertext for the chart.

let sampleValues = Object.values(data.sample_values)
let otuIds = Object.values(data.otu_ids)
let otuLabels = Object.values(data.otu_labels)

// function init() {
let trace1 = {
    x: sampleValues,
    y: otuIds,
    type: 'bar',
    text: otuLabels,
    marker: {
      color: 'rgb(142,124,195)'
    }
  };
  
  var data = [trace1];
  
  var layout = {
    title: 'Number of Graphs Made this Week',
    font:{
      family: 'Raleway, sans-serif'
    },
    showlegend: false,
    xaxis: {
      tickangle: -45
    },
    yaxis: {
      zeroline: false,
      gridwidth: 2
    },
    bargap :0.05
  };
  
  Plotly.newPlot('myDiv', data, layout);

// }
// 3 Create a bubble chart that displays each sample.
// Use otu_ids for the x values.

// Use sample_values for the y values.

// Use sample_values for the marker size.

// Use otu_ids for the marker colors.

// Use otu_labels for the text values.


// 4 Display the sample metadata, i.e., an individual's demographic information.


// 5 Display each key-value pair from the metadata JSON object somewhere on the page.

// 6 Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:

// 7 Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo. Ensure that your repository has regular commits and a thorough README.md file