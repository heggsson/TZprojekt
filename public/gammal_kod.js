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




          <!--<ul class="nav nav-tabs">
            <li class="active">
              <a href="#pie_content" data-toggle="tab">Resursfördelning</a></li>
            <li><a href="#overtime_content" data-toggle="tab">Övertid</a></li>
            <li><a href="#absence_content" data-toggle="tab">Frånvaro</a></li>
            <li><a href="#reportedHours_content" data-toggle="tab">Status tidrapporter</a></li>
            <li><a href="#unreportedHours_content" data-toggle="tab">Orapporterade tidrapporter</a></li>
            
          <!--<li><a href="#user_div" data-toggle="tab">Status användare</a></li>-->
          <!--<li><a href="#line_div" data-toggle="tab">Förändring tidrapporter</a></li>-->
          <!--<li><a href="#gauge_div" data-toggle="tab">Gauge</a></li>-->
            <!--<li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#">
              <b class="caret"></b>
              Timrapporter
            </a>
          <ul class="dropdown-menu">
            <li><a href="#reportedHours_div" data-toggle="tab">Status tidrapporter</a></li>
            <li><a href="#user_div" data-toggle="tab">Status användare</a></li>
            <li><a href="#line_div" data-toggle="tab">Förändring tidrapporter</a></li>
            <li><a href="#gauge_div" data-toggle="tab">Gauge</a></li>
          </ul>
          </li>
            <li><a href="#projectstatus_content" data-toggle="tab">Projektstatus</a></li>
            <li><a href="#personal_content" data-toggle="tab">Personlig översikt</a></li>


          </ul>-->


          /*app.get('/dagsForsalj', function(req, res) {
  res.send([
          ['Label', 'Value'],
          ['Mkr', 80]
          ]);
});*/


/*app.get('/companyPerformance', function(req, res) {
  res.send([ 
    ['Tid', 'Lisa', 'Kalle', 'Bengt'],
        ['2004', 20, 100, -10 ],
        ['2005', 12, 90, 20],
        ['2006', -32, 5, 0],
        ['2007', 13, 10, 0],
        ['2008', 20, 100, -10 ],
        ['2009', 12, 90, 20],
        ['2010', -32, 5, 0],
        ['2011', 13, 10, 0],
        ['2012', 20, 100, -10 ],
        ['2013', 12, 90, 20],
        ['2014', -32, 5, 0],
        ['2015', 13, 10, 0]
         ]);
});*/


/*
        $.getJSON('/personalHours', drawPersonalHours);
        $.getJSON('/personalOvertime', drawPersonalOvertime);
        $.getJSON('/personalUndertime', drawPersonalUndertime);
        $.getJSON('/personalUnreported', drawPersonalUnreported);*/



        function drawPersonalProjectHours(personalProjectHours) {

          // Create the data table.
          var data = new google.visualization.DataTable();
          data.addColumn('string', 'Timmar');
          data.addColumn('number', 'Andel');
          data.addRows(personalProjectHours);

          // Set chart options
          var options = {'title':'Arbetade timmar per projekt',
                         'width':600,
                         'height':400};

          // Instantiate and draw our chart, passing in some options.
          var chart = new google.visualization.PieChart(document.getElementById('personal_divII'));
          chart.draw(data, options);
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