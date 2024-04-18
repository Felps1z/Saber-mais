
// -> MENSAGEM DE BOM DIA <-
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



// -> ABRIR MENU DO PERFIL <-
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

//Responsividade


    var logo = document.querySelector('#logo img');

    if (window.innerWidth < 480){
        
    } 

// -> SLIDER (CARROSSEL) <-
const box = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');

let count = 0;

function slider() {
    count++;
    if (count > images.length - 1) {
        count = 0;
    }

    box.style.transform = `translateX(${-count * 30.55}rem)`;
}

function sliderBack(){
    count--;
    box.style.transform = `translateX(${-count * 30.55}rem)`;
}

function sliderAdvance(){
    count++
    box.style.transform = `translateX(${-count * 30.55}rem)`;
}

document.querySelector('.slider .icon-voltar').addEventListener('click', (event) => {
    if (count != 0){
        sliderBack();
    }
    clearInterval(timer);
    timer = setInterval(slider, 3000);
});

document.querySelector('.slider .icon-avancar').addEventListener('click', (event) => {
    if (count != images.length - 1){
        sliderAdvance();
    }
    clearInterval(timer);
    timer = setInterval(slider, 3000);
})

let timer = setInterval(slider, 3000);

// -> DATA E HORA <-

//Data
function weekDayLong(weekday) {
    if (weekday === 0) return 'Dom,';
    if (weekday === 1) return 'Seg,';
    if (weekday === 2) return 'Ter,';
    if (weekday === 3) return 'Qua,';
    if (weekday === 4) return 'Qui,';
    if (weekday === 5) return 'Sex,';
    if (weekday === 6) return 'Sáb,';
}

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

console.log(weekDayLong(weekDay))
console.log(monthDay)
console.log(monthLong(month))

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

//Hora
const arrowHour = document.getElementById('arrow-hour');
const arrowMinute = document.getElementById('arrow-minute');
const arrowSecond = document.getElementById('arrow-second');

function getTime() {
    const time = new Date();

    const getHourRotation = (360/12) * time.getHours();
    const getMinuteRotation = (360/60) * time.getMinutes();
    const getSecondRotation = (360/60) * time.getSeconds();

    arrowHour.style.transform = `rotate(${getHourRotation}deg)`;
    arrowMinute.style.transform = `rotate(${getMinuteRotation}deg)`;
    arrowSecond.style.transform = `rotate(${getSecondRotation}deg)`;
}

setInterval(() => {
    getTime();
}, 1000)

getTime();

// -> ACESSIBILIDADE <-

const sidebarButton = document.querySelectorAll('aside ul li');
for (let i in sidebarButton) {
    sidebarButton[i].setAttribute('tabindex', '0')
}
/* -> RECUPERAR CONTA <- */
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


