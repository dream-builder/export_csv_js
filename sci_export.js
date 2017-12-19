 var SCI_Export = function (){
	 
	this.exportToExcel=function(filename, text) {
	  var element = document.createElement('a');

	  //Header of the table
	  body_text = text.head + '\r\n';
	  
	  text.row.forEach(function(ele){
		  body_text +=ele +'\r\n';
	  });
	  
	  body_text =encodeURIComponent(body_text);
	  
	  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + body_text );
	  element.setAttribute('download', filename);
	
	  //element.style.display = 'none';
	  document.body.appendChild(element);
	
	  element.click();
	
	  document.body.removeChild(element);
	};

}