const formCadastro = document.getElementById('form-cadastro');

function saveUserInfo(nome, matricula, telefone, email, senha, perfil) {
    localStorage.setItem('nome', nome);
    localStorage.setItem('matricula', matricula);
    localStorage.setItem('telefone', telefone);
    localStorage.setItem('email', email);
    localStorage.setItem('senha', senha);
    localStorage.setItem('perfil', perfil); 
}

formCadastro.addEventListener('submit', (event) => {
    event.preventDefault();

    let newNome = document.getElementById('nome').value;
    const newMatricula = document.getElementById('matricula').value;
    let newTelefone = document.getElementById('telefone').value;
    let newEmail = document.getElementById('email').value;
    let newSenha = document.getElementById('senha').value;
    let perfilSelecionado = document.querySelector('input[name="perfil"]:checked');

    if (newNome == '' || newMatricula == '' || newTelefone == '' || newEmail == '' || newSenha == '' || !perfilSelecionado) {
        Swal.fire({
            title: 'Erro!',
            text: 'Por favor, preencha todos os campos e selecione um perfil.',
            icon: 'error',
            confirmButtonText: 'Ok!'
        });
    } else {
        let newPerfil = perfilSelecionado.value;
        saveUserInfo(newNome, newMatricula, newTelefone, newEmail, newSenha, newPerfil); 
        
        Swal.fire({
            title: 'Sucesso!',
            text: 'Cadastro concluído com sucesso!',
            icon: 'success',
            confirmButtonText: 'Ok!'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = '../index.html';
            }
        });
    }
});
