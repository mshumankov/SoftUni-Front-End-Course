function increment(selector) {
    let conteiner = $(selector);
    let fragment = document.createDocumentFragment();
    let textArea = $('<textarea>');
    let incrementButton = $('<button>Increment</button>');
    let addBtn = $('<button>Add</button>');
    let list = $('<ul>');


    //textArea formation
    textArea.val(0);
    textArea.addClass('counter');
    textArea.attr('disabled', true);
    //buttons formation
    incrementButton.addClass('btn');
    incrementButton.attr('id', 'incrementBtn');
    addBtn.addClass('btn');
    addBtn.attr('id', 'addBtn');
    //list formation
    list.addClass('results');
    //events
    $(incrementButton).on('click', function() {
        textArea.val(Number(textArea.val()) + 1)
    })

    $(addBtn).on('click', function(){
        let li =$(`<li>${textArea.val()}</li>`)
        li.appendTo(list);
    })

    textArea.appendTo(fragment);
    incrementButton.appendTo(fragment);
    addBtn.appendTo(fragment);
    list.appendTo(fragment);

    conteiner.append(fragment);

}
