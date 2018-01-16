
var dadosCliente = {
    endereco : {

    },
    contato : {

    }
};

function validarFormulario() {
    // gerar objeto endereco
    objEndereco = {
        pais : document.getElementById('selection_country').value,
        city: document.getElementById('selection_city').value,
        estado: document.getElementById('state').value,
        zip: document.getElementById('zip').value,
        ad1: document.getElementById('ad1').value,
        ad2: document.getElementById('ad2').value,
    }
    
    dadosCliente.endereco = objEndereco;
    console.log(objEndereco);

   // gerar objeto contato
   objContato = {
        nome : document.getElementById('name').value,
        sobrenome: document.getElementById('lastname').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
   }
    
    dadosCliente.contato = objContato;
    console.log(objContato);

function validarEndereco(_objEndereco) {

    
}

function validarContato(objContato) {

    
}