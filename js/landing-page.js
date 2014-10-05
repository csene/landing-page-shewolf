function onResize() {
	if ($(window).width() > 1024 ) {
		setMarginAchat();
	} else {
		$('h3').css('margin-top', 30);
	}
}

function setMarginAchat() {
	var logoHeight = $('#logo').innerHeight();
	var achatHeight = $('#achat-billets').innerHeight();
	
	$('#achat-billets').css('margin-top', (logoHeight - achatHeight) * 1/2);
	$('#achat-billets').css('margin-bottom', (logoHeight - achatHeight) * 1/2);
};

$(document).ready(function() {
  $(window).resize(onResize);
  $(window).trigger("resize");
});