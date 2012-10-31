
      // Load the Visualization API and the piechart package.
      google.load('visualization', '1', {'packages':['gauge']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(on_load);

      function on_load() {
        $.getJSON('/dagsForsalj', drawGauge);
      }

      function drawGauge(gauge_data) {

        //Create the data table
        var data = new google.visualization.arrayToDataTable(gauge_data);

        var options = {
          width: 1000, height: 300,
          redFrom: 0, redTo: 25,
          greenFrom: 60, greenTo: 100,
          yellowFrom: 25, yellowTo: 60,
          minorTicks: 5
        };

        var chart = new google.visualization.Gauge(document.getElementById('gauge_div'));
        chart.draw(data,options);
      }