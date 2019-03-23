function addItem() {
   let text = document.getElementById('newItemText').value;
   let value = document.getElementById('newItemValue').value;
   let option = document.createElement('option');
   option.innerText = text;
   option.value = value;
   let select = document.querySelector('#menu');
   select.appendChild(option);
   document.getElementById('newItemText').value = '';
   value = document.getElementById('newItemValue').value = '';
}