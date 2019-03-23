function addItem() {
    let newContent = document.getElementById('newItemText').value;
    let li = document.createElement('li');
    li.textContent = newContent; 
    let ul = document.getElementById('items');
    
    ul.appendChild(li);
    document.getElementById('newItemText').value = '';
}