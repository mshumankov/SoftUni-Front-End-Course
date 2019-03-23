function timer() {
   let seconds = $('#seconds').text();
   let minutes = $('#minutes').text();
   let hours = $('#hours').text(); 
   let check = false;

   $('#start-timer').on('click', startTimer);
   
   $('#stop-timer').on('click', stopTimer);

   function startTimer() {
      if(check === false) {
         check = true;

         timer = setInterval(step, 1000);
      
      function step() {
         seconds++;
         if(seconds <= 9) {
            seconds = '0' + seconds;
         }
         if(seconds > 59) {
            minutes++;
            seconds = '00';

            if(minutes <= 9) {
               minutes = '0' + minutes;
            }
            if(minutes > 59) {
               hours++;
               minutes = '00';

               if(hours <= 9) {
                  hours = '0' + hours;
               }
               
            }

         }
         
         $('#seconds').text(seconds);
         $('#minutes').text(minutes);
         $('#hours').text(hours);
         
      }
      }
      
   }
   
   function stopTimer() {
      if(check === true) {
         check= false;
         clearInterval(timer);
         // seconds = '00';
         // minutes = '00';
         // hours = '00';
      }
      
   }
}