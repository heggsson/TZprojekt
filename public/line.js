// Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});

            // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(on_load);

      function on_load() {
        $.getJSON('/companyPerformance', drawLine);
      }

function drawLine(line_data) {
        
        // Create the data table.
        var data = new google.visualization.arrayToDataTable(line_data);

        var options = {
          title: 'Company Performance',
          'width':900,
          'height':500
        };

        var chart = new google.visualization.LineChart(document.getElementById('line_div'));
        chart.draw(data,options);
      }