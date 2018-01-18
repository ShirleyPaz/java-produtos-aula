
var dadosCliente = {
    endereco : {

    },
    contato : {

    }
};

// function validarFormulario() {

//     event.preventDefault();
//     // gerar objeto endereco
//     objEndereco = {
//         pais : document.getElementById('selection_country').value,
//         city: document.getElementById('selection_city').value,
//         estado: document.getElementById('state').value,
//         zip: document.getElementById('zip').value,
//         ad1: document.getElementById('ad1').value,
//         ad2: document.getElementById('ad2').value,
//     };
    
//     dadosCliente.endereco = objEndereco;
//    // gerar objeto contato
//    objContato = {
//         nome : document.getElementById('name').value,
//         sobrenome: document.getElementById('lastname').value,
//         email: document.getElementById('email').value,
//         phone: document.getElementById('phone').value,
//    };
    
//     dadosCliente.contato = objContato;

//     console.log(dadosCliente);
// }


// function validarEndereco(_objEndereco){
//     // Validar se os campos estão preenchidos

    
// }

// function validarContato(_objContato){


// }


function validarFormulario(){
    
    event.preventDefault();
    
    if (validarEndereco() && validarContato())
        console.log('validação está ok.. pode prosseguir');
    else 
        console.log('validação não passou.. preencher todos os campos');
}

function validarEndereco(){
   
    //gerar objeto endereco baseado nos dados do formulario
    objEndereco = {
        pais        : document.getElementById('selection_country').value,
        cidade      : document.getElementById('selection_city').value,
        estado      : document.getElementById('state').value,
        zip         : document.getElementById('zip').value,
        endereco1   : document.getElementById('ad1').value,
        endereco2   : document.getElementById('ad2').value,
    };
    
    //verificar se os dados estão preenchidos
     if (objEndereco.pais == 0) {
        return false;
    } else if (objEndereco.cidade == 0) {
        return false;
    } else if (objEndereco.estado.trim().length == 0) {
        return false;
    } else if (objEndereco.zip.trim().length == 0) {
        return false;
    } else if (objEndereco.endereco1.trim().length == 0) {
        return false;
    } else if (objEndereco.endereco2.trim().length == 0) {
        return false;
    } else { //validacão OK
        // grava o objeto endereço no objeto dadosCliente
        dadosCliente.endereco = objEndereco;
        // retorno da função
        return true;
    }
}

function validarContato( _objContato ){
     //gerar objeto contato baseado nos dados do formulario
    objContato = {
        nome       : document.getElementById('name').value,
        sobrenome  : document.getElementById('lastname').value,
        email      : document.getElementById('email').value,
        phone      : document.getElementById('phone').value,
    };
    


// // campo radio button
// // gerar objeto contato baseado nos dados do formulario

    if (document.getElementById('s_input').checked) {
        var pacote = document.getElementById('s_input').value;
    } else if (document.getElementById('u_input').checked) {
        var pacote = document.getElementById('u_input').value;
    } else {
        return false;
    }
  
    objContato.pacote = pacote;


    //verificar se os dados estão preenchidos
    if (objContato.nome.trim().length == 0) {
        return false;
    } else if (objContato.sobrenome.trim().length == 0) {
        return false;
    } else if (objContato.email.trim().length == 0) {
        return false;
    } else if (objContato.phone.trim().length == 0) {
        return false;
    } else { //validacão OK
        // grava o objeto endereço no objeto dadosCliente
        dadosCliente.contato = objContato;
        // retorno da função
        return true;
    }
}