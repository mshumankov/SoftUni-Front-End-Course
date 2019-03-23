function extractText() {
    let listItems = document.querySelectorAll("ul#items li");
    let textArea = document.getElementById('result');
    let result = '';


    for(let i = 0; i <listItems.length; i++) {
        let currentLi = listItems[i];
        result += currentLi.textContent +'\n'; 
    }

    textArea.value = result;
}