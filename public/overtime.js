  google.load('visualization', '1', {packages:['table']});
  google.setOnLoadCallback(on_load);


  function on_load() {
        $.getJSON('/overtime', writeTable);
      }

  function writeTable(tableData){

    var data = new google.visualization.DataTable(tableData);

    data.addColumn('string', 'Namn');
    data.addColumn('number', 'Januari');
    data.addColumn('number', 'Februari');
    data.addColumn('number', 'Mars');
    data.addColumn('number', 'April');
    data.addColumn('number', 'Maj');
    data.addColumn('number', 'Juni');
    data.addColumn('number', 'Juli');
    data.addColumn('number', 'Augusti');
    data.addColumn('number', 'September');
    data.addColumn('number', 'Oktober');
    data.addColumn('number', 'November');
    data.addColumn('number', 'December');

    data.addRows(tableData);
    var table = new google.visualization.Table(document.getElementById('overtime_div'));
  
 

    var formatter = new google.visualization.ColorFormat();
    formatter.addRange(0, 10, '#008F00', 'white');
    formatter.addRange(10, 500, 'red', 'none');
    formatter.format(data, 1); // Apply formatter to second column  
    formatter.format(data, 2);
    formatter.format(data, 3);
    formatter.format(data, 4);
    formatter.format(data, 5);
    formatter.format(data, 6);
    formatter.format(data, 7);
    formatter.format(data, 8);
    formatter.format(data, 9);
    formatter.format(data, 10);
    formatter.format(data, 11);
    formatter.format(data, 12);
  
  table.draw(data, {allowHtml: true, showRowNumber: true});

  };



