// Loader

const fade = () => {
    const wrapper = 
    document.querySelector('.wrapper');
    setTimeout(() => {
        wrapper.classList.add('fade');
    }, 250)
};

window.addEventListener('load', fade)

//Fim Loader

const formLogin = document.getElementById('form');

function verifyLogin(matricula, senha) {
    const matriculaSalva = localStorage.getItem('matricula')
    const senhaSalva = localStorage.getItem('senha')
    return matricula === matriculaSalva && senha === senhaSalva
}

formLogin.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputMatricula = document.getElementById('matricula').value;
    const inputSenha = document.getElementById('senha').value;

    if (verifyLogin(inputMatricula, inputSenha)){
        window.location.href = 'home.html';
    } else {
        Swal.fire({
            title: 'Erro!',
            text: 'Usuário ou senha incorreta!',
            icon: 'error',
            confirmButtonText: 'Ok!'
        })
    }
})