let miFormulario      = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
   
    e.preventDefault();

    let formulario = e.target

    console.log(formulario.children[0].value); 
   
    console.log(formulario.children[1].value);  

    console.log(formulario.children[3].value); 
   
    console.log(formulario.children[4].value);
}
