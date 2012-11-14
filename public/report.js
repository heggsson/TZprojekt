      google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(on_load);

      function on_load(){
          $.getJSON('/report', drawChart);       
      }



      function drawChart(reportData) {
        var data = google.visualization.arrayToDataTable([reportData]);

        var options = {
          title: 'Company Performance',
          hAxis: {title: 'Year', titleTextStyle: {color: 'red'}}
        };

        var chart = new google.visualization.ColumnChart(document.getElementById('report_div'));
        chart.draw(data, options);
      }
