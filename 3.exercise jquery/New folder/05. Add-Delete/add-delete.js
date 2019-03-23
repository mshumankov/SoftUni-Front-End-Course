function addItem() {
    
        let newContent = document.getElementById('newText').value;
        let li = document.createElement('li');
        /* li.textContent = newContent;  */
        let ul = document.getElementById('items');
        let hyperlink = document.createElement('span');

        
        hyperlink.innerHTML = '<a href="#">[Delete]</a>';
        li.textContent = newContent;
        
        li.appendChild(hyperlink);
        ul.appendChild(li);

        hyperlink.addEventListener('click', deleteItem);
        function deleteItem() {
            let li = this.parentNode;
            let ul = li.parentNode;
            ul.removeChild(li);
        }
        document.getElementById('newText').value = '';
    
}