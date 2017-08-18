jQuery(document).ready(function($) {
	$("#add_event").on("click",function() {
		var requestForm=$('#add_event_form');                      
		if(!requestForm[0].checkValidity() ) {
			requestForm[0].reportValidity();
			return;
		} else {  
		   	ajax_add_event_form();
			$('#add_event_form').trigger('reset');
		}
	});

	function ajax_add_event_form() {
		var add_event_form ="action=add_event&"+$('#add_event_form').serialize();
		$.ajax({
			type: 'POST',
			url:PARAMS.ajaxurl,
			data:add_event_form,
			success:function(e){
				alert("event has been added");
			}
		});
	}

    $("#add_guest").on("click",function(){
       var requestForm=$('#add_guest_form');                      
       if(!requestForm[0].checkValidity()){
        requestForm[0].reportValidity();
          return; 
        } else {  
          ajax_add_guest_form();
          $('#add_guest_form').trigger('reset');
        } 
    });

    function ajax_add_guest_form(){
     var add_guest_form ="action=add_guest&"+$('#add_guest_form').serialize();
     console.log(add_guest_form);
     $.ajax({
          type: 'POST',
          url:PARAMS.ajaxurl,
          data:add_guest_form,
          success:function(e){
              alert("Guest has been added");
            }
        });
    }
});