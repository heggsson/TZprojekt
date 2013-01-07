
      // Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(on_load);

      function on_load() {
        $.getJSON('/reportedHours', drawBars);
        $.getJSON('/occupancy', drawOcc)
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

      function drawOcc(occupancy_data) {

        var data = google.visualization.arrayToDataTable(occupancy_data);

        var options = {
          title:"Personalöversikt",
          width:600, height:400,
          vAxis: {title: "Alternativ"},
          hAxis: {title: "Timmar (h)"}}          
        
        var chart = new google.visualization.BarChart(document.getElementById('occupancy_div'));
        
        chart.draw(data, options);
        }



      