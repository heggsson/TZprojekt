// Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(on_load);

      function on_load() {
        $.getJSON('/personalHours', drawPersonalHours);
        $.getJSON('/personalProjectHours', drawPersonalProjectHours);
        $.getJSON('/personalOvertime', drawPersonalOvertime);
        $.getJSON('/personalUndertime', drawPersonalUndertime);
        $.getJSON('/personalUnreported', drawPersonalUnreported);
      }

      
      function drawPersonalHours(personalHours) {
        var data = google.visualization.arrayToDataTable(personalHours);

        var options = {
          title: 'Arbetad tid',
          hAxis: {title: 'Tidsperiod', titleTextStyle: {color: 'red'}},
          'width':600,
          'height':400
          
          
        };

        var chart = new google.visualization.ColumnChart(document.getElementById('personal_div'));
        chart.draw(data, options);
      }

      function drawPersonalProjectHours(personalProjectHours) {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Onions');
        data.addRows(personalProjectHours);

        // Set chart options
        var options = {'title':'Arbetade timmar per projekt',
                       'width':600,
                       'height':400};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('personal_divII'));
        chart.draw(data, options);
      }

      function drawPersonalOvertime(personalOvertime) {
        var data = google.visualization.arrayToDataTable(personalOvertime);

        var options = {
          title: 'Övertid',
          hAxis: {title: 'Tidsperiod', titleTextStyle: {color: 'red'}},
          'width':600,
          'height':400
          
        };

        var chart = new google.visualization.ColumnChart(document.getElementById('personal_divIII'));
        chart.draw(data, options);
      }

      function drawPersonalUndertime(personalUndertime) {
        var data = google.visualization.arrayToDataTable(personalUndertime);

        var options = {
          title: 'Frånvaro',
          hAxis: {title: 'Tidsperiod', titleTextStyle: {color: 'red'}},
          'width':600,
          'height':400,
          colors: ['red']
          
        };

        var chart = new google.visualization.ColumnChart(document.getElementById('personal_divIV'));
        chart.draw(data, options);
      }

      function drawPersonalUnreported(personalUnreported) {
        var data = google.visualization.arrayToDataTable(personalUnreported);

        var options = {
          title: 'Orapporterade pass',
          hAxis: {title: 'Antal pass'},
          'width':700,
          'height':100,
          colors: ['red']
        };

        var chart = new google.visualization.BarChart(document.getElementById('personal_divV'));
        chart.draw(data, options)
      }