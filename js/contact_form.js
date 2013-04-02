$( init );
function init() {
	$('#contactForm').submit( submitForm );
}
function submitForm() {
		var contactForm = $(this);
		/* check if the iput types are valid */
		if ( !$('#name').val() || !$('#email').val() || !$('#message').val() ) {
			$('#submit').html('error');
		} else {
			$('#submit').html('sending');
			$.ajax( {
	      url: contactForm.attr( 'action' ) + "?ajax=true",
	      type: contactForm.attr( 'method' ),
	      data: contactForm.serialize(),
	      success: submitFinished
	    } );
		}
    return false;
}
function submitFinished( response ) {
  	response = $.trim( response );
  	if ( response == "success" ) {
  		$('#submit').html('sent');
	} else {
		$('#submit').html('error');
	}
}