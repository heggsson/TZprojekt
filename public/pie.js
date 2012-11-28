    


      // Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(on_load);

      function on_load() {
        $.getJSON('/certifiedProjectHours', drawPieI);
        $.getJSON('/reportedProjectHours', drawPieII)
      }

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawPieI(pie_dataI) {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Onions');
        //data.addRows(app.write());
        data.addRows(pie_dataI);

        // Set chart options
        var options = {'title':'Resursfördelning: Attesterade h per projekt',
                       'width':550,
                       'height':400};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('pie_div'));
        chart.draw(data, options);
      }


      function drawPieII(pie_dataII) {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Onions');
        //data.addRows(app.write());
        data.addRows(pie_dataII);

        // Set chart options
        var options = {'title':'Resursfördelning: Rapporterade h per projekt',
                       'width':550,
                       'height':400};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('pie_divII'));
        chart.draw(data, options);
      }
      // Callback that creates and populates a data table,
      // instantiates the line chart, passes in the data and
      // draws it.
      

      // Callback that creates and populates a data table,
      // instantiates the gauge chart, passes in the data and
      // draws it.




