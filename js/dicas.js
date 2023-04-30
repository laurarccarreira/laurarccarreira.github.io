let list_dicas = document.getElementById('dicas-list').children;
let array_dicas = Array.from(list_dicas);
let search_btn = document.getElementById('search-dicas');
let datalist_dicas = document.getElementById('datalist-dicas');
let input_field = document.getElementById('dicas-filter');
// Store all words
let array_words = Array.prototype; 
array_dicas.forEach(element => {
    let string = element.innerHTML;
    let string_array = string.split(' ');
    string_array.forEach(word => {
        let value = 1;
        word = word.replace(',','').replace('.','');
        array_words.forEach(word2 => {
            word2 = word2.replace(',','').replace('.','');
            if(word2==word)
                value = 0;
        });
        if(value==1)
            array_words.push(word);
    });
});
array_words.forEach(word => {
    let childElement = document.createElement('option');
    childElement.value = word;
    datalist_dicas.appendChild(childElement);
});
// 
input_field.addEventListener('input', function(){
    datalist = document.getElementById('datalist-dicas');
    inputValue = input_field.value.toLowerCase();
    options = datalist.getElementsByTagName('option');
    for (let i = 0; i < options.length; i++) {
      const optionValue = options[i].value.toLowerCase();
      if (optionValue.startsWith(inputValue) && inputValue != "") {
        options[i].classList.remove('no-display');
      } else {
        options[i].classList.add('no-display');
      }
    }
});
// Search Button Event
search_btn.addEventListener('click', function(){
    let filter = document.getElementById('dicas-filter');
    array_dicas.forEach(element => {
        let show = 0;
        let string = element.innerHTML;
        let string_array = string.split(' ');
        string_array.forEach(word => {
            if(word == filter.value){
                console.log(string);
                show = 1;
            }
        });
        if(show == 0 && filter.value != ""){
            if(!element.classList.contains('no-display'))
                element.classList.add('no-display');
        }
        else{
            if(element.classList.contains('no-display'))
                element.classList.remove('no-display');
        }
    });
    
})