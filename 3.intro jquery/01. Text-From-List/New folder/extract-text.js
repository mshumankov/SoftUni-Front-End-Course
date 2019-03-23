function extractText() {
   let result = [];
    $('#items li').toArray().map(li => result.push (li.textContent)).join(', ');
    $('#result').text(result);
   
}
