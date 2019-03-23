function attachEvents() {
   $('a.button').on('click', buttonClicked);
   
   function buttonClicked() {
      
      
      if($(this).hasClass('selected')) {
         $(this).removeClass('selected');
      } else {
         $('.selected').removeClass('selected');

         $(this).addClass('selected');
      }
   } 

}