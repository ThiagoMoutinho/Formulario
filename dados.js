const button = document.getElementById('button')

function dadosPreenchidos() {
    const username = document.getElementById('username').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const nascimento = document.getElementById('nascimento').value;
    
    var msgErro = '';
    var msgArray = new Array();
    var sucesso = 'Documento salvo com sucesso';

    if(username === '') {
        msgErro += 'Erro: Necessário preencher o campo Nome \n';
        msgArray.push("Erro: Necessário preencher o campo Nome");
    } 

    if (telefone === '') {
        msgErro += 'Erro: Necessário preencher o campo Telefone \n';
        msgArray.push('Erro: Necessário preencher o campo Telefone');
         
    } if (email === '' || email.indexOf('@') === -1 || email.indexOf(".") === -1) {
        msgErro += 'Erro: Obrigatorio colocar um email válido \n'
        msgArray.push('Erro: Obrigatorio colocar um email válido');
        
    } if (nascimento === '') {
        msgErro += 'Erro: Necessário preencher o campo Nascimento \n'
        msgArray.push('Erro: Necessário preencher o campo Nascimento');
        
    }

    if(msgArray.length > 0) {
        alert(msgArray.join('\n'));
    }else {
        alert(sucesso)
        alert('Nome: ' + username + '\n Telefone : ' + telefone + '\n email: ' + email +'\n nascimento : ' + nascimento )
    }


    //  if (msgErro){
    //     alert(msgErro)
    // } else  {
    //     alert(sucesso)
    //     alert('Nome: ' + username + '\n Telefone : ' + telefone + '\n email: ' + email +'\n nascimento : ' + nascimento )
    // }

    

    

    

    

}

