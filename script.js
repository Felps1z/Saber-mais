// -> botao de voltar - mobile
const btnBack = document.querySelector('.btn-back');
btnBack.addEventListener('click', () => {
    function hiddenElement(element) {
        element.style.display = 'none';
    }
    function showElement(element) {
        element.style.display = 'inherit';
    }

    //-> FUNÇÃO SEM USO
    // function verifyMobile(grid) {
    //     if (window.innerWidth <= 700) return this.hiddenElement(aside);
    //     if (window.innerWidth > 700) return main.style.gridTemplateColumns = grid;
    // }

    //-> ABA PAINEL - lado esquerdo(slider) 
    const page1Section1 = document.querySelector('main section:nth-of-type(1)');
    //-> ABA PAINEL - lado direito(relogio e avisos)
    const page1Section2 = document.querySelector('main section:nth-of-type(2)');
    //-> ABA BOLETIM
    const page2 = document.querySelector('main section:nth-of-type(3)');
    //-> ABA CALENDÁRIO
    const page3 = document.querySelector('main section:nth-of-type(4)');
    //-> ABA DIÁRIO
    const page4 = document.querySelector('main section:nth-of-type(5)');
    //-> ABA CURRICULO
    const page5 = document.querySelector('main section:nth-of-type(6)');
    //-> ABA ESTÁGIO
    const page6 = document.querySelector('main section:nth-of-type(7)');
    //-> ABA MENSAGEM
    const page7 = document.querySelector('main section:nth-of-type(8)');
    //-> ABA FAQ
    const page8 = document.querySelector('main section:nth-of-type(9)');

    const main = document.querySelector('main');
    const aside = document.querySelector('aside');

    btnBack.style.display = 'none'
    showElement(aside)
    hiddenElement(page1Section1);
    hiddenElement(page1Section2);
    hiddenElement(page2);
    hiddenElement(page3);
    hiddenElement(page4);
    hiddenElement(page5);
    hiddenElement(page6);
    hiddenElement(page7);
    hiddenElement(page8);
})
//-> Mudando logo da tela HOME em MOBILE
if (window.innerWidth <= 700) {
    const logo = document.querySelector('#logo img')
    logo.setAttribute('src', 'src/assets/icons/icone_logo.png')
}

//-> MENSAGEM DE CUMPRIMENTO
const div = document.querySelector('#greetings');

const date = new Date();
const hour = date.getHours();

function message(hour) {
    if (hour >= 0 && hour < 12) return 'Bom dia';
    if (hour >= 12 && hour < 18) return 'Boa tarde';
    if (hour >= 18 && hour <= 23) return 'Boa noite';
}

const nome = localStorage.getItem('nome');
const partesNome = nome.split(" ");
const primeiroNome = partesNome[0]
div.innerHTML = message(hour);
div.innerHTML += `, ${primeiroNome}`;

//-> ABRIR MENU DO PERFIL
function toggleMenu() {
    const options = document.querySelector('#options');
    options.classList.toggle('menuTranslateX');

    const icon = document.querySelector('#profile-box>button');
    icon.classList.toggle('bg-icon');

    const linkOptions = document.querySelectorAll('#options a');
    for (let i in linkOptions) {
        linkOptions[i].setAttribute('tabindex', '0');
    }
}

//-> SLIDER (CARROSSEL) <- //
const box = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const image = document.querySelector('.slides img');
let imageWidth;


function reportWindowSize() {
    imageWidth = image.width; // largura da imagem após redimensionamento
}

window.onresize = reportWindowSize; // ?
let count = 0;

//-> Rolagem automática - SLIDER
function slider() {
    count++;
    if (count > images.length - 1) {
        count = 0;
    }

    box.style.transform = `translateX(${-count * imageWidth}px)`;
}

//-> Botão de voltar - SLIDER 
function sliderBack() {
    count--;

    box.style.transform = `translateX(${-count * imageWidth}px)`;
}

//-> Botão de avançar - SLIDER
function sliderAdvance() {
    count++

    box.style.transform = `translateX(${-count * imageWidth}px)`;
}
document.querySelector('.slider .icon-voltar').addEventListener('click', (event) => {
    if (count != 0) {
        sliderBack();
    }
    clearInterval(timer);
    timer = setInterval(slider, 3000);
});
document.querySelector('.slider .icon-avancar').addEventListener('click', (event) => {
    if (count != images.length - 1) {
        sliderAdvance();
    }
    clearInterval(timer);
    timer = setInterval(slider, 3000);
})
let timer = setInterval(slider, 3000);

// -> DATA E HORA <- //

//-> Data - dias da semana
function weekDayLong(weekday) {
    if (weekday === 0) return 'Dom,';
    if (weekday === 1) return 'Seg,';
    if (weekday === 2) return 'Ter,';
    if (weekday === 3) return 'Qua,';
    if (weekday === 4) return 'Qui,';
    if (weekday === 5) return 'Sex,';
    if (weekday === 6) return 'Sáb,';
}
//-> Data - meses
function monthLong(month) {
    if (month === 0) return 'Janeiro';
    if (month === 1) return 'Fevereiro';
    if (month === 2) return 'Março';
    if (month === 3) return 'Abril';
    if (month === 4) return 'Maio';
    if (month === 5) return 'Junho';
    if (month === 6) return 'Julho';
    if (month === 7) return 'Agosto';
    if (month === 8) return 'Setembro';
    if (month === 9) return 'Outubro';
    if (month === 10) return 'Novembro';
    if (month === 11) return 'Dezembro';
}

const weekDay = date.getDay();
const monthDay = date.getDate();
const month = date.getMonth();

// console.log(weekDayLong(weekDay))
// console.log(monthDay)
// console.log(monthLong(month))

const dateContainer = document.getElementById('date');
const hourContainer = document.getElementById('hour');

function addSpan(content) {
    const span = document.createElement('span');
    span.innerHTML = content;
    return span;
}

dateContainer.appendChild(addSpan(weekDayLong(weekDay)));
dateContainer.appendChild(addSpan(monthDay));
dateContainer.appendChild(addSpan(monthLong(month)));

//-> Hora
const arrowHour = document.getElementById('arrow-hour');
const arrowMinute = document.getElementById('arrow-minute');
const arrowSecond = document.getElementById('arrow-second');

function getTime() {
    const time = new Date();

    const getHourRotation = (360 / 12) * time.getHours();
    const getMinuteRotation = (360 / 60) * time.getMinutes();
    const getSecondRotation = (360 / 60) * time.getSeconds();

    arrowHour.style.transform = `rotate(${getHourRotation}deg)`;
    arrowMinute.style.transform = `rotate(${getMinuteRotation}deg)`;
    arrowSecond.style.transform = `rotate(${getSecondRotation}deg)`;
}

setInterval(() => {
    getTime();
}, 1000)

getTime();

// -> ACESSIBILIDADE <- //

const sidebarButton = document.querySelectorAll('aside ul li');
for (let i in sidebarButton) {
    sidebarButton[i].setAttribute('tabindex', '0')
}
// -> RECUPERAR CONTA <- //
function alert() {
    const emailRec = document.querySelector('#email_recup')
    if (emailRec.value != '') {
        Swal.fire({
            title: 'Sucesso!',
            text: 'Enviamos um e-mail de alteração de dados. Verifique sua caixa de mensagens',
            icon: 'success',
            confirmButtonText: 'Ok!'
        })
    } else {
        Swal.fire({
            title: 'Erro!',
            text: 'Verifique se digitou seu e-mail corretamente',
            icon: 'error',
            confirmButtonText: 'Ok!'
        })
    }

}


