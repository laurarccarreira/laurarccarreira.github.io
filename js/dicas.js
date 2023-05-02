let list_dicas = document.getElementsByClassName('dicas-list');
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
            if(word2.toLowerCase()==word.toLowerCase())
                value = 0;
        });
        if(value==1)
            array_words.push(word.toLowerCase());
    });
});
// Autocomplete Options
input_field.addEventListener('keyup', function(){
    const datalist = document.getElementById('datalist-dicas');
    const inputValue = input_field.value.toLowerCase();
    const options = datalist.getElementsByTagName('option');
    const array_options = Array.from(options);
    array_options.forEach(element => {
        element.remove();
    });
    array_words.forEach(word => {
        if(word.toLowerCase().startsWith(inputValue) && inputValue != ""){
            let childElement = document.createElement('option');
            childElement.value = word;
            datalist_dicas.appendChild(childElement);
        }
    });
});
// Search Button Event
search_btn.addEventListener('click', function(){
    let filter = document.getElementById('dicas-filter');
    array_dicas.forEach(element => {
        let show = 0;
        let string = element.innerHTML;
        let string_array = string.split(' ');
        string_array.forEach(word => {
            word = word.replace(',','').replace('.','');
            if(word.toLowerCase() == filter.value.toLowerCase()){
                show = 1;
            }
        });
        if(show == 0 && filter.value != ""){
            if(!element.classList.contains('no-display')){
                element.classList.add('no-display');
                let value = element.getAttribute('value');
                let dtElement = document.getElementById(value);
                dtElement.classList.add('no-display');
            }
        }
        else{
            if(element.classList.contains('no-display')){
                element.classList.remove('no-display');
                let value = element.getAttribute('value');
                let dtElement = document.getElementById(value);
                dtElement.classList.remove('no-display');
            }
        }
    });

})
// const keyword = document.getElementById('dicas-filter');
// let search_btn = document.getElementById('search-dicas');
// const dlElement = document.querySelector('dl');
// const ddElements = dlElement.querySelectorAll('dd');

// search_btn.addEventListener("click", () => {
//     let i = 0;
//     let search_result = '';
//     const searchTerm = keyword.value.toLowerCase();

//     ddElements.forEach((dd) => {
//         if (dd.textContent.includes(searchTerm)) {
//             i++;
//             console.log(dd.textContent);
//             search_result +=` <dt>${i}</dt> <dd>${dd.textContent}</dd> `;
//         } 
//     });
//     dlElement.innerHTML = search_result;
// });
