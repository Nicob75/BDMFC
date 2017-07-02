/*!
 * BDM FC website javascript (customized from Start Bootstrap - Creative Bootstrap Theme)
 * Index page js
 */

var current_team = 'a-team';

var aTopSection = '#calendar';
var amountScrolled = 100;

$(window).scroll(function() {
    btn_back_to_top(aTopSection);
});

 
  // jQuery ready function. Specify a function to 
  // execute when the DOM is fully loaded.

$(document).ready( function ()
{
	btn_back_to_top(aTopSection);
	// get_ranking_from_FLA();
	toggleEquipeA();
	//season_controls_toggle_init();
	$('#ranking-iframe').hide();
});

// function season_controls_toggle_init()
// {
// 	  $('.season-controls-select').change(function(e){
// 	 	season_controls_toggle();
// 	  });
// 	  season_controls_toggle();
// }

// DEPRECATED
// function season_controls_toggle()
// {
// 	var selection = $('.season-controls-select').val();
// 	$('#results-panel').hide();
// 	$('#ranking-panel').hide();
// 	$('#calendar-panel').hide();
// 	if (selection == 'results') 
// 		$('#results-panel').show();
// 	else if (selection == 'ranking') 
// 		$('#ranking-panel').show();
// 	else if (selection == 'calendar') 
// 		$('#calendar-panel').show();
// 	else alert('Erreur !');
// }// DEPRECATED

function toggleEquipeA() {
	current_team = 'a-team';
	$('#results-panel-team-label').text('Equipe A - 3e division B');
	$('#ranking-panel-team-label').text('Equipe A - 3e division B');
	get_team_results();
	// $('#calendar-panel > div.row > iframe').attr('src','https://calendar.google.com/calendar/embed?title=BDM%20FC&amp;showTitle=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=nmdqsuk9p91r3ggp1e4fcjt9o4%40group.calendar.google.com&amp;color=%236B3304&amp;src=aq9djiobq8f9ogudso1cjr66ig%40group.calendar.google.com&amp;color=%2342104A&amp;src=l8r2rkc4t12r16cgsqgb7d42gs%40group.calendar.google.com&amp;color=%23711616&amp;ctz=Europe%2FParis');
	// $('#calendar-panel > div.row > iframe').attr('src','https://calendar.google.com/calendar/embed?src=l8r2rkc4t12r16cgsqgb7d42gs%40group.calendar.google.com&ctz=Europe/Paris&showTitle=0');
	//$('#calendar-panel > div.row > iframe').attr('src','https://calendar.google.com/calendar/embed?title=BDM%20FC&showTitle=0&mode=WEEK&height=600&wkst=2&bgcolor=%23FFFFFF&src=nmdqsuk9p91r3ggp1e4fcjt9o4%40group.calendar.google.com&color=%236B3304&src=aq9djiobq8f9ogudso1cjr66ig%40group.calendar.google.com&color=%2342104A&src=l8r2rkc4t12r16cgsqgb7d42gs%40group.calendar.google.com&color=%23711616&ctz=Europe/Paris');
}

function toggleEquipeB() {
	current_team = 'b-team';
	$('#results-panel-team-label').text('Equipe B - 5e division B');
	$('#ranking-panel-team-label').text('Equipe B - 5e division B');
	get_team_results();
	//$('#calendar-panel > div.row > iframe').attr('src','https://calendar.google.com/calendar/embed?src=aq9djiobq8f9ogudso1cjr66ig%40group.calendar.google.com&ctz=Europe/Paris');
}

function get_team_results() {
	if (current_team == 'a-team') {
		results = a_team_results;
	} else if (current_team == 'b-team') {
		results = b_team_results;
	} else {
		alert('Erreur dans get_team_results !');
	}

	// for(var result in results) {
	// 	$('#results-panel > row > div > table > tbody').append('<tr>');
	// }
	$('#results-tbody').text('');
	for (i = results.length-1; i >= 0; i--) {
		var current_color;
		var forfait = results[i].Forfait;
		switch (results[i].Resultat) {
			case "V":
				current_color = "result-victory";
				break;
			case "N":
				current_color = "result-draw";
				break;
			case "D":
				current_color = "result-defeat";
				break;
			default:
				current_color = "";
		}

		// adapter l'ordre d'affichage en fonction du lieu (domicile/exterieur)
		if (results[i].Lieu == "Exterieur") {
			var nomEquipe1Tmp = results[i].NomEquipe1;
			var scoreEquipe1Tmp = results[i].ScoreEquipe1;
			results[i].NomEquipe1 = results[i].NomEquipe2;
			results[i].ScoreEquipe1 = results[i].ScoreEquipe2;
			results[i].NomEquipe2 = nomEquipe1Tmp;
			results[i].ScoreEquipe2 = scoreEquipe1Tmp;
		}

		// adapter l'affichage des journées de coupe
		switch (results[i].Journee) {
			case 50:
				results[i].Journee = "1er tour";
				break;
			case 51:
				results[i].Journee = "2e tour";
				break;
			case 52:
				results[i].Journee = "1/16e";
				break;
			case 53:
				results[i].Journee = "1/8e";
				break;
			case 54:
				results[i].Journee = "1/4";
				break;
			case 55:
				results[i].Journee = "1/2";
				break;
			case 56:
				results[i].Journee = "finale";
				break;
			default:
				break;
		}

		var current_row = '<tr class=\"' + current_color + ((forfait=="")?'':' result-withdraw') + '\">'
			+ '<td class="text-nowrap">' + results[i].Journee + '</td>'
			+ '<td>' + results[i].NomEquipe1 + '</td>'
			+ '<td class="text-nowrap">' + results[i].ScoreEquipe1 + '</td>'
			+ '<td>-</td>'
			+ '<td class="text-nowrap">' + results[i].ScoreEquipe2 + '</td>'
			+ '<td>' + results[i].NomEquipe2 + '</td>'
			+ '</tr>';
		$('#results-tbody').append(current_row);
	}
}

function toggleRanking() {
	if ($('#display-ranking-button').val() == 'Afficher' ) {
		if ($('#ranking-iframe').attr('src') == '' ) {
			$('#ranking-iframe').attr('src','http://www.football-loisir-amateur.com/Home/Classement#rank');
		}
		$('#display-ranking-button').val('Masquer');
		$('#ranking-iframe').show();
	} else {
		$('#display-ranking-button').val('Afficher');
		$('#ranking-iframe').hide();
	}
}