
window.onload=function(){
	var table=document.getElementById("table1");
	var rows=table.rows;
	for (var i = 0; i < rows.length; i++) {
		var tr=rows[i];
		tr.onmouseover=changecolor;
		tr.onmouseout=clearchange;
		tr.cells[1].onmouseover=showhand;

	}
}

function changecolor() {
	/*alert(event);
	alert(event.srcElement);
	alert(event.srcElement.tagname);*/
	var td =event.srcElement;
	var tr =td.parentElement;
	tr.style.background ="green";
	var tds=tr.cells;
	for (var i = 0; i < tds.length; i++) {
		tds[i].style.color="red";
		}
	}

	function clearchange(){
		var td =event.srcElement;
	var tr =td.parentElement;
	tr.style.background ="white";
	tr.style.color="black";
	}

	function showhand(){
		var td =event.srcElement;
		td.style.cursor="hand";
	}