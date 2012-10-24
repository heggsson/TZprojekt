    


      // Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});
      google.load('visualization', '1', {'packages':['gauge']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(on_load);

      function on_load() {
        $.getJSON('/forsaljning', drawPie);
        drawLine();
        drawGauge()
      }

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawPie(pie_data) {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        //data.addRows(app.write());
        data.addRows(pie_data);

        // Set chart options
        var options = {'title':'Forsaljningsandelar charken ICA',
                       'width':800,
                       'height':600};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('pie_div'));
        chart.draw(data, options);
      }
      // Callback that creates and populates a data table,
      // instantiates the line chart, passes in the data and
      // draws it.
      function drawLine() {
        
        // Create the data table.
        var data = new google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2004', 10000, 12000],
          ['2005', 12000, 900],
          ['2006', 9000, 5000],
          ['2007', 13000, 10000]
          ]);

        var options = {
          title: 'Company Performance',
          'width':900,
          'height':500
        };

        var chart = new google.visualization.LineChart(document.getElementById('line_div'));
        chart.draw(data,options);
      }

      // Callback that creates and populates a data table,
      // instantiates the gauge chart, passes in the data and
      // draws it.
      function drawGauge() {

        //Create the data table
        var data = new google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Mkr', 80]
          ]);

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



