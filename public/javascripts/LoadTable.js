$(document).ready(function(){
  $(".url").each(function(){
    var $tr = $(this),
    anchor = $tr.text();
    $tr.text("").append(anchor);
  });
  $(".datatable").dynatable();
});

function drawTable(data) {
  for (var i = 0; i < data.length; i++) {
    drawRow(data[i]);
  }
}

function drawRow(rowData) {
  var row = $("<tr />");
  $("#datatable").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
  row.append($("<td>" + rowData.id + "</td>"));
  row.append($("<td>" + rowData.firstName + "</td>"));
  row.append($("<td>" + rowData.lastName + "</td>"));
}
