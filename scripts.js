/* use jQuery to create grid/gameboard */
$('<table>').appendTo('section');
var rows = ['A','B','C','D','E','F','G','H'];
var columns = ['1','2','3','4','5','6','7','8'];
for(var i=0; i < rows.length; i++){
    var tRow = $('<tr>').attr({row: rows[i]});
    tRow.appendTo('table');
}
for(var j=0; j < columns.length; j++){
    var tCol = $('<td>').attr({col: columns[j]});
    tCol.appendTo('tr');
}

