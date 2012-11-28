// Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(on_load);

      function on_load() {
        $.getJSON('/projectstatus', drawStatus);
      }

      function drawStatus(projectstatus) {
        var data = google.visualization.arrayToDataTable(projectstatus);

        var options = {
          title: 'Projektstatus',
          hAxis: {title: 'Vecka'},
          vAxis: {title: 'Timbudget'},
          'width':800,
          'height':600,
          colors: ['green']
        };



      
        var chart = new google.visualization.AreaChart(document.getElementById('projectstatus_div'));
        chart.draw(data, options);
      }