/*!
 * BDM FC website javascript (customized from Start Bootstrap - Creative Bootstrap Theme)
 * Get ranking from FLA js
 */

function get_ranking_from_FLA() {
	var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
	// // xmlhttp.open("POST", "/json-handler");
	xmlhttp.open("POST", "http://www.football-loisir-amateur.com/Home/GetClassement/11293");
	xmlhttp.setRequestHeader("Accept", "*/*");
	xmlhttp.setRequestHeader("Accept-Encoding", "gzip, deflate");
	xmlhttp.setRequestHeader("User-Agent", "runscope/0.1");
	xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xmlhttp.send(JSON.stringify({championnatId:"1129", saisonId:"2"}));
	if (xmlhttp.responseText == "") {
		alert('reponse nulle !')
	}
	else {
		alert(xmlhttp.responseText);
	}

	// $.get('http://example.com', function(responseText) {
	//     alert(responseText);
	// });

	// $.post("http://www.football-loisir-amateur.com/Home/GetClassement/11293", { json_string:JSON.stringify({name:"John", time:"2pm"}) });
	// $.post("http://www.football-loisir-amateur.com/Home/GetClassement/11293", { json_string:JSON.stringify({championnatId:"1129", saisonId:"2"}) }, function(d){alert(d)});
}

// POST http://www.football-loisir-amateur.com/Home/GetClassement/11293

// Content-Type
//    application/json;charset=utf-8

// Accept
//    application/json, text/plain

// {
// 	"championnatId":"1129",
// 	"saisonId":"3"
// }