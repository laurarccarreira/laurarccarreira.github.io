

// Card Hover Animation
let item_cards = document.getElementsByClassName('item');
let array_items = Array.from(item_cards);

array_items.forEach(element => {
    let element_modal = element.children[2].children[1];
    element.addEventListener('mouseover', function(){
        if(element_modal.classList.contains('show')) // If element modal is active disable css:hover
            element.classList.remove('item');
        else{
            if(!element.classList.contains('item'))
                element.classList.add('item');
        }
    })
});
// 