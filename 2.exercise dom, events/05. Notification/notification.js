function notify(message) {
   let showDiv = document.getElementById('notification');
   showDiv.textContent = message;
   showDiv.style.display = 'block';

   
   setTimeout(function(){ showDiv.style.display = 'none'; }, 2000);
  
}