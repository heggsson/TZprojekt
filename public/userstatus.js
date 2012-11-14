
google.load('visualization', '1.0', {'packages':['corechart']});
google.setOnLoadCallback(on_load);

function on_load(){
  $.getJSON('/users', drawChart);
}


function drawChart(userData) {
  // Create and populate the data table.
  var data = google.visualization.arrayToDataTable(userData);

  // Create and draw the visualization.
  new google.visualization.LineChart(document.getElementById('user_div')).
      draw(data, {curveType: "function",
                  width: 500, height: 400,
                  vAxis: {maxValue: 12}}
          );
}