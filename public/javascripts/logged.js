var giCount =1;
var tableele =1;
$(document).ready(function() {
	$("#posturl").html('<b>Note POST the logs to this URL '+document.URL+'</b>');
    tableele = $('#logs').dataTable( {
        "sDom": "<'row'<'span6'l><'span6'f>r>t<'row'<'span6'i><'span6'p>>",
        "sPaginationType": "full_numbers"
    } );
} );
$.extend( $.fn.dataTableExt.oStdClasses, {
    "sWrapper": "dataTables_wrapper form-inline"
} );

 

function addlog(data){
	var jlog = JSON.stringify(data.log);
	$('#logs').dataTable().fnAddData( [jlog,data.time,data.level] );
	document.getElementById("logs").style.width="100%;"
  	giCount++;
}

function flush(){
	 tableele.fnClearTable();
}