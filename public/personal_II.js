
google.load("visualization", "1", {packages:["corechart"]});

google.setOnLoadCallback(on_load);

function on_load(){
    $.getJSON('/personal_II', drawPersonal_II);       
}

      
      function drawPersonal_II(personal) {
        var data = google.visualization.arrayToDataTable(personal);

        var options = {
          title: 'Company Performance',
          hAxis: {title: 'Månad', titleTextStyle: {color: 'black'}, slantedText:true},
          width: 1100, height: 700
        };

        var chart = new google.visualization.ColumnChart(document.getElementById('person_II'));
        chart.draw(data, options);
      }


          
        