
/*
 * GET users listing.
 */

var students = [
    { name: 'Dima' },
    { name: 'Grisha ' },
    { name: 'Artur' },
    { name: 'Oleg' }
];

var predmets = [
	{ name: "Maths" },
	{ name: "Programming" },
	{ name: "Testing"}
];

exports.list = function(req, res){
	var result = "<table><tr><th>Students</th>";
	for (var i = 0; i < predmets.length; i++) {
		result += "<th>" + predmets[i].name + "</th>";
	};
	result += "</tr>"
	for (var i = 0; i < students.length; i++) {
		result += "<tr><td>" + students[i].name + "</td>";
		for (var j = 0; j < predmets.length; j++) {
			result += "<td>Somemark</td>";
		};
		result += "</tr>";
	};
	result += "</table>"
	res.end(result);
};