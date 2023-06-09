// let list_dicas = document.getElementsByClassName('dicas-list');
// let array_dicas = Array.from(list_dicas);
let search_btn = document.getElementById('search-dicas');
let datalist_dicas = document.getElementById('datalist-dicas');
let input_field = document.getElementById('dicas-filter');


const ingredientes = ['ovo', 'vinagre', 'romã', 'alho', 'azeite', 'batata', 'manteiga', 'ervas', 'clara', 'sal', 'limão', 'pão', 'maçã', 'gengibre', 'queijo', 'leite', 'cebola', 'carne', 'ossos', 'legumes', 'frango', 'especiarias', 'salada', 'molho', 'tomate', 'natas', 'iogurte', 'mel', 'banana', 'croutons', 'abacate', 'mostarda'];

// Store all words
// let array_words = Array.prototype; 
// array_dicas.forEach(element => {
//     let string = element.innerHTML;
//     let string_array = string.split(' ');
//     string_array.forEach(word => {
//         let value = 1;
//         word = word.replace(',','').replace('.','');
//         array_words.forEach(word2 => {
//             word2 = word2.replace(',','').replace('.','');
//             if(word2.toLowerCase()==word.toLowerCase())
//                 value = 0;
//         });
//         if(value==1)
//             array_words.push(word.toLowerCase());
//     });
// });


// Autocomplete Options
input_field.addEventListener('keyup', function(){
    const datalist = document.getElementById('datalist-dicas');
    const inputValue = input_field.value.toLowerCase();
    const options = datalist.getElementsByTagName('option');
    const array_options = Array.from(options);
    array_options.forEach(element => {
        element.remove();
    });
    ingredientes.forEach(word => {
        if(word.toLowerCase().startsWith(inputValue) && inputValue != ""){
            let childElement = document.createElement('option');
            childElement.value = word;
            datalist_dicas.appendChild(childElement);
        }
    });
});


const keyword = document.getElementById('dicas-filter');
const dlElement = document.querySelector('dl');
const ddElements = dlElement.querySelectorAll('dd');
input_field.addEventListener('keypress', function(event){
    if(event.keyCode == 13){
        let i = 0;
        let search_result = '';
        const searchTerm = keyword.value.toLowerCase();

        ddElements.forEach((dd) => {
            if (dd.textContent.includes(searchTerm)) {
                i++;
                search_result +=` <dt>${i}</dt> <dd class="dicas-list">${dd.textContent}</dd> `;
            } 
        });
        dlElement.innerHTML = search_result;
        addDicasEvent();
    }
})
search_btn.addEventListener("click", () => {
    let i = 0;
    let search_result = '';
    const searchTerm = keyword.value.toLowerCase();

    ddElements.forEach((dd) => {
        if (dd.textContent.includes(searchTerm)) {
            i++;
            search_result +=` <dt>${i}</dt> <dd class="dicas-list">${dd.textContent}</dd> `;
        } 
    });
    dlElement.innerHTML = search_result;
    addDicasEvent();
});
function addDicasEvent(){
    let list_dicas = document.getElementsByClassName('dicas-list');
    let array_dicas = Array.from(list_dicas);
    array_dicas.forEach(element => {
        element.addEventListener('click', function(){
            let ingredienteToSearch = [];
            ingredientes.forEach(ingrediente => {
                if(element.textContent.includes(ingrediente)){
                    ingredienteToSearch.push(ingrediente);
                }
            });
            console.log(ingredienteToSearch);
            let i = 0;
            let search_result = '';
            ddElements.forEach((dd) => {
                let display = 0;
                ingredienteToSearch.forEach(ingrediente => {
                    if (dd.textContent.includes(ingrediente) && display == 0) {
                        i++;
                        search_result +=` <dt>${i}</dt> <dd class="dicas-list">${dd.textContent}</dd> `;
                        display = 1;
                    } 
                })
            });
            dlElement.innerHTML = search_result;
            addDicasEvent();
            })
    });
}
addDicasEvent();