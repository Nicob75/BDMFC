/*!
 * BDM FC website javascript (customized from Start Bootstrap - Creative Bootstrap Theme)
 * Index page js
 */

var aTopSection = '#VND';
var amountScrolled = 100;

$(window).scroll(function() {
    btn_back_to_top(aTopSection);
});

 
  // jQuery ready function. Specify a function to 
  // execute when the DOM is fully loaded.

$(document).ready( function ()
{
	btn_back_to_top(aTopSection);
	$('#paiement-iframe').hide();
});

function togglePaiement() {
	if ($('#display-paiement-button').val() == 'Afficher' ) {
		if ($('#paiement-iframe').attr('src') == '' ) {
			$('#paiement-iframe').attr('src','https://docs.google.com/spreadsheets/d/1qmGADrFEm6GmoP2a66Gn-cIrgkJhV_J2mOEiIR2PpDA/edit?usp=sharing');
		}
		$('#display-paiement-button').val('Masquer');
		$('#paiement-iframe').show();
	} else {
		$('#display-paiement-button').val('Afficher');
		$('#paiement-iframe').hide();
	}
}