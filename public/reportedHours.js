
      // Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(on_load);

      function on_load() {
        $.getJSON('/reportedHours', drawBars);
      }

      function drawBars(reported_hours) {
        var data = google.visualization.arrayToDataTable(reported_hours);

        var options = {
          title: 'Rapporterade timmar',
          hAxis: {title: 'Antal timmar'},
          'width':800,
          'height':600
        };

        var chart = new google.visualization.BarChart(document.getElementById('reportedHours_div'));
        chart.draw(data, options);
      }