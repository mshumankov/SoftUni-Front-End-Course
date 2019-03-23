function create(sentences) {
    let mainDiv = document.getElementById('content');

    for(let i =0; i < sentences.length; i++) {
        let newDiv = document.createElement('div');
        let paragraph = document.createElement('p');
        paragraph.textContent = sentences[i];
        paragraph.style.display = 'none';
        newDiv.addEventListener('click', function() {
            if(paragraph.style.display === 'block') {
                paragraph.style.display = 'none';
            } else {paragraph.style.display = 'block';}
        }) 
        newDiv.appendChild(paragraph);
        mainDiv.appendChild(newDiv);
        
        
    }
}