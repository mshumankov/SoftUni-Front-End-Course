function toggle() {
    let buttonText = document.getElementsByClassName('button')['0'].textContent;
    let hiddenText = document.getElementById('extra');
    console.log(buttonText, hiddenText)
    
    
    if(buttonText == "More") {
       hiddenText.style.display = 'block';
       document.getElementsByClassName('button')['0'].textContent = 'Less';
    } else {
      hiddenText.style.display = 'none';
      document.getElementsByClassName('button')['0'].textContent = 'More';
    }
    
}