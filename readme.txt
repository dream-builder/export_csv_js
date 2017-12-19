Export Json to CSV file


Install
Add this line at the bottom of html file, before closing </body>     

<script type="text/javascript" src="sci_export.js"></script>


Use

Create an object from sci_export class;
var ex = new SCI_Export();

Create a json object
js={
	"head": ["COl 1", "COL 2", "COL 3", "COL 4", "COL 5", "COL 6"],
		
	"row" : [
			["COl 1 data 1", "COL 2 data 1", "COL 3 data 1", "COL 4 data 1", "COL 5 data 1", "COL 6 data 1"],
			["COl 1 data 2", "COL 2 data 2", "COL 3 data 2", "COL 4 data 2", "COL 5 data 2", "COL 6 data 2"],
			["COl 1 data 3", "COL 2 data 3", "COL 3 data 3", "COL 4 data 3", "COL 5 data 3", "COL 6 data 3"],	
		]
};

Call export function
ex.exportToExcel("data.csv",js);