function dadosPreenchidos() {
    const username = document.getElementById('username').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const nascimento = document.getElementById('nascimento').value;


    if(username === '') {
        alert('Erro: Necessário preencher o campo Nome');
        document.getElementById('username').focus();
        return true;
    } else if (telefone === '') {
        alert('Erro: Necessário preencher o campo Telefone')
        document.getElementById('telefone').focus();
        return true;
    } else if (email === '') {
        alert('Erro: Necessário preencher o campo Email')
        document.getElementById('email').focus();
        return true;
    } else if (nascimento === '') {
        alert('Erro: Necessário preencher o campo Nascimento')
        document.getElementById('email').focus();
        return true;
    } else if((username === '') && (telefone === '')) {
        alert('Erro: Necessário preencher o campos')
    }
     else {
        alert('Documento salvo com sucesso')
    }


    alert('Nome: ' + username + '\n Telefone : ' + telefone + '\n email: ' + email +'\n nascimento : ' + nascimento )

    
}

function validarDados() {

    if(dadosPreenchidos()) {
        alert('Dados enviados com sucesso');
        return true;
    } else {
        alert('Erro ao enviar')
        return false;
    }
}