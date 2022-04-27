
 $(document).ready(function(){
 	$('#Hotel-form').show();
   	$('#Hiking-form').hide();
   	$('#Paragliding-form').hide();
 });

//search form code start here
$(document).ready(function(){
  
   $('#Hotel-form').show();
   $('#Hiking-form').hide();
   $('#Paragliding-form').hide();

   $('#Hotel-item span').addClass('line');

   //click on Hiking
   $('#Hiking-item').click(function(){
      
     $('#Hotel-form').hide();
     $('#Hiking-form').show();
     $('#Paragliding-form').hide();
    
    $('#Hotel-item span').removeClass('line');
    $('#Hiking-item span').addClass('line');
    $('#Paragliding-item span').removeClass('line');

   });

    //click on Paragliding
   $('#Paragliding-item').click(function(){
      
     $('#Hotel-form').hide();
     $('#Hiking-form').hide();
     $('#Paragliding-form').show();
    
    $('#Hotel-item span').removeClass('line');
    $('#Hiking-item span').removeClass('line');
    $('#Paragliding-item span').addClass('line');

   });

     //click on Hotel
   $('#Hotel-item').click(function(){
      
     $('#Hotel-form').show();
     $('#Hiking-form').hide();
     $('#Paragliding-form').hide();
    
    $('#Hotel-item span').addClass('line');
    $('#Hiking-item span').removeClass('line');
    $('#Paragliding-item span').removeClass('line');

   });
     
});


