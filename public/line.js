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
          title: 'Förändring av schemalagd tid',
          'width':900,
          'height':500,
          vAxis: {title: "Timmar"},
          hAxis: {title: "Tidsintervall (år)"}
          //hAxis.textPosition: 'none'
        };

        var chart = new google.visualization.LineChart(document.getElementById('line_div'));
        chart.draw(data,options);
      }