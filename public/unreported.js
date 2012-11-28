      // Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(on_load);

      function on_load() {
        $.getJSON('/unreportedHours', drawColumns);
      }

      function drawColumns(unreported_hours) {
        var data = google.visualization.arrayToDataTable(unreported_hours);

        var options = {
          title: 'Orapporterade pass',
          hAxis: {title: 'Antal pass'},
          'width':800,
          'height':600,
          colors: ['red']
        };

        var chart = new google.visualization.BarChart(document.getElementById('unreportedHours_div'));
        chart.draw(data, options);
      }