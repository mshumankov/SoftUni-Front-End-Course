function search() {
   let search = $('#searchText').val().toLowerCase();
   let match = 0;
   let towns = $('#towns li');

   for(town of towns) {
      let currentTown = town.textContent.toLowerCase();
      if(currentTown.includes(search)) {
         $(town).css('font-weight', 'bold');
         match++;
      } else {
         $(town).css('font-weight', '');
      }
   }
   $('#result').text(`${match} matches found.`)
}