// Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(on_load);

      function on_load() {
        $.getJSON('/personalProjectHours', drawPersonalProjectHours);
      }

function drawPersonalProjectHours(personalProjectHours) {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Onions');
        //data.addRows(app.write());
        data.addRows(personalProjectHours);

        // Set chart options
        var options = {'title':'Resursfördelning: Attesterade h per projekt',
                       'width':550,
                       'height':400};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('personal_divII'));
        chart.draw(data, options);
      }