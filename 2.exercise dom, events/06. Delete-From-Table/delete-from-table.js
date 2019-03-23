function deleteByEmail() {
    let currentEmail = document.getElementsByName('email')[0];
    let newArray = document.querySelectorAll('#customers tbody')[0].children;
    let divResult = document.getElementById('result');

    for (let i = 1; i < newArray.length; i++) {
        let email = newArray[i].children[1];
        if (email.textContent === currentEmail.value) {
            let tbody = email.parentNode.parentNode;
            tbody.removeChild(newArray[i]);
            divResult.textContent = 'Deleted.';
        } else {
            divResult.textContent = 'Not found.';
        }

    }
    currentEmail.value = '';

}