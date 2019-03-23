function loadRepos() {
   $('#repos').empty();
   let user = $('#username');
   let url = 'https://api.github.com/users/' + user.val() + '/repos';
   
   $.ajax({
      method: 'GET',
      url: url,
      success: displayRepos,
      error: displayError
   });
   console.log(url);
   function displayRepos(repos) {
      for(repo of repos) {
         console.log(repo);
         let listItem = $('<li>');
         let link = $('<a>').text(repo.full_name);
         link.attr('href', repo.html_url);
         listItem.append(link);
         $('#repos').append(listItem);

      }

   }
   function displayError(err) {
      console.log(err)
      let listItem = $('<li>');
      listItem.text(`Error: ${err.status}`);
      $('#repos').append(listItem);
   }
}