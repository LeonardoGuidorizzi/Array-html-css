'use strict'
const showArray = (array, element, title='Array') => {
    // selecionando um elemneto do Dom 
    const container = document.querySelector(element)
    // Criando um novo elemento, DIV 
    const div = document.createElement('div')
    // adiciona uma classse na DIV criada 
    div.classList.add('numbers-container')

    // preenchendo a div criada com os elementos da array
    div.innerHTML = `
        <h2>${title}</h2>
        <div class='numbers-item'>
            ${array.join('</div><div class="numbers-item">')}
        </div>        
    
    ` 
    //Insirindo o novo elemento (DIV) no DOM
    container.appendChild(div)
}

export {
showArray
}