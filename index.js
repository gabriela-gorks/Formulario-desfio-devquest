let inputFormulario = document.querySelectorAll('.input')
let formulario = document.getElementById('formulario')
let textoCampoObrigatorio = document.querySelectorAll('span')

// Verifica com o submit se os campos estão preenchidos ou não
formulario.addEventListener('submit', function (event) {

    inputFormulario.forEach(function (input, indice) {
        
        if (input.value == '') {
            input.classList.remove('preenchido')
            input.classList.add('vazio')
            input.focus()
            textoCampoObrigatorio[indice].classList.add('mostrar-elemento')
            event.preventDefault()
            
        } else {
            input.classList.remove('vazio')
            input.classList.add('preenchido')
            textoCampoObrigatorio[indice].classList.remove('mostrar-elemento')
        }
    })
    return
})

inputFormulario.forEach(function(input, indice){
    
    formulario.addEventListener('click',function() {
        
        if(input.value==''){
            input.classList.remove('preenchido')
            input.classList.add('vazio')
            textoCampoObrigatorio[indice].classList.add('mostrar-elemento')
        }else {
            input.classList.remove('vazio')
            textoCampoObrigatorio[indice].classList.remove('mostrar-elemento')
            input.classList.add('preenchido')
        }

    })

})

