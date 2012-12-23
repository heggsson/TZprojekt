// Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(on_load);

      function on_load() {
        dataPos();
        $.getJSON('/personalYear/HEGGSON/2012', drawPersonal_II);
        $.getJSON('/personalProjectHoursYear/HEGGSON/2012', drawPersonalProjectHours);
        $.getJSON('/projectstatuspersonal', drawStatuspersonal);
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
                       'width':450,
                       'height':300};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('personal_divII'));
        chart.draw(data, options);
      }


      function dataPos(){
        var year = document.getElementById('b1');
        var month = document.getElementById('b2');
        var week = document.getElementById('b3');
            year.onclick = drawYear;
            month.onclick = drawMonth;
            week.onclick = drawWeek;
      }

      function drawYear(){
        $.getJSON('/personalYear/HEGGSON/2012', drawPersonal_II);
        $.getJSON('/personalProjectHoursYear/HEGGSON/2012', drawPersonalProjectHours);
      }

      function drawMonth(){
        $.getJSON('/personalMonth/HEGGSON/2012/01', drawPersonal_II);
        $.getJSON('/personalProjectHoursMonth', drawPersonalProjectHours);  
      }

      function drawWeek(){
        $.getJSON('/personalWeek', drawPersonal_II);
        $.getJSON('/personalProjectHoursWeek', drawPersonalProjectHours);
      }

      function drawPersonal_II(personal) {
          

          var data = google.visualization.arrayToDataTable(personal);

          var options = {
            title: 'Personöversikt',
            hAxis: {slantedText:true}, //title: '', titleTextStyle: {color: 'black'}, 
            width: 1100, height: 700,
            isStacked: true
          };

          var chart = new google.visualization.ColumnChart(document.getElementById('person_II'));
          chart.draw(data, options);
      }
      /*function drawPersonal_II(personal) {
          var data = google.visualization.arrayToDataTable(personal);

          var options = {
            title: 'Personöversikt',
            hAxis: {title: 'Månad', titleTextStyle: {color: 'black'}, slantedText:true},
            width: 1100, height: 700
          };

          var chart = new google.visualization.ColumnChart(document.getElementById('person_II'));
          chart.draw(data, options);
      }*/

      function drawStatuspersonal(projectstatuspersonal) {
        var data = google.visualization.arrayToDataTable(projectstatuspersonal);

        var options = {
          title: 'Projektstatus',
          hAxis: {title: 'Vecka'},
          vAxis: {title: 'Timbudget'},
          'width':600,
          'height':400,
          colors: ['green']
        };

      
        var chart = new google.visualization.AreaChart(document.getElementById('projectstatuspersonal_div'));
        chart.draw(data, options);
      }