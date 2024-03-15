function checked(event) {
    var elementoClicado = event.currentTarget;
    let liElements = document.querySelectorAll('ul li');
    let iElements = document.querySelectorAll('ul li i');

    // Resetar todas as li para background branco e cor do texto azul
    liElements.forEach(function (li) {
        li.style.background = 'transparent';
        li.style.color = '#003C74';
        li.classList.remove('elemento-clicado');
    });

    // Resetar todos icones para azul
    iElements.forEach(function (i) {
        i.style.color = '#003C74';
    });

    // Definir a cor azul e cor de texto branco para a li que foi clicada
    elementoClicado.style.background = '#003C74';
    elementoClicado.style.color = 'white';
    elementoClicado.classList.add('elemento-clicado');

     // -> BOTÔES SIDEBAR

     const dashboardSection1 = document.querySelector('main section:nth-of-type(1)');
     const dashboardSection2 = document.querySelector('main section:nth-of-type(2)');
     const boletimSection = document.querySelector('main section:nth-of-type(3)');
     const calendarioSection = document.querySelector('main section:nth-of-type(4)');
     const diarioSection = document.querySelector('main section:nth-of-type(5)');
     const curriculoSection = document.querySelector('main section:nth-of-type(6)');
     const estagioSection = document.querySelector('main section:nth-of-type(7)');
     const mensagemSection = document.querySelector('main section:nth-of-type(8)');
     const faqSection = document.querySelector('main section:nth-of-type(9)');
     const main = document.querySelector('main');
     
     function hiddenElement(element) {
         element.style.display = 'none';
     }
     
     function showElement(element) {
         element.style.display = 'inherit';
     }
     
     if (elementoClicado == liElements[2]){
         main.style.gridTemplateColumns = '20% 40% 40%';
         showElement(dashboardSection1);
         showElement(dashboardSection2);
         hiddenElement(boletimSection);
         hiddenElement(calendarioSection);
         hiddenElement(diarioSection);
         hiddenElement(curriculoSection);
         hiddenElement(estagioSection);
         hiddenElement(mensagemSection);
         hiddenElement(faqSection);
     }
     
     if (elementoClicado == liElements[3]) {
         main.style.gridTemplateColumns = '20% 80%';
         hiddenElement(dashboardSection1);
         hiddenElement(dashboardSection2);
         hiddenElement(calendarioSection);
         hiddenElement(curriculoSection);
         hiddenElement(diarioSection);
         hiddenElement(estagioSection);
         hiddenElement(mensagemSection);
         hiddenElement(faqSection);
         boletimSection.style.display = 'flex';
     }
     if (elementoClicado == liElements[4]) {
        main.style.gridTemplateColumns = '20% 80%';
        hiddenElement(dashboardSection1);
        hiddenElement(dashboardSection2);
        hiddenElement(boletimSection);
        hiddenElement(diarioSection);
        hiddenElement(curriculoSection);
        hiddenElement(estagioSection);
        hiddenElement(faqSection);
        calendarioSection.style.display = 'flex';
    }
    if (elementoClicado == liElements[5]) {
        main.style.gridTemplateColumns = '20% 80%';
        hiddenElement(dashboardSection1);
        hiddenElement(dashboardSection2);
        hiddenElement(boletimSection);
        hiddenElement(calendarioSection);
        hiddenElement(curriculoSection);
        hiddenElement(estagioSection);
        hiddenElement(mensagemSection);
        hiddenElement(faqSection);
        diarioSection.style.display = 'flex';
    }
    if (elementoClicado == liElements[6]) {
        main.style.gridTemplateColumns = '20% 80%';
        hiddenElement(dashboardSection1);
        hiddenElement(dashboardSection2);
        hiddenElement(boletimSection);
        hiddenElement(calendarioSection);
        hiddenElement(diarioSection);
        hiddenElement(estagioSection);
        hiddenElement(mensagemSection);
        hiddenElement(faqSection);
        curriculoSection.style.display = 'flex';
    }
    if (elementoClicado == liElements[7]) {
        main.style.gridTemplateColumns = '20% 80%';
        hiddenElement(dashboardSection1);
        hiddenElement(dashboardSection2);
        hiddenElement(boletimSection);
        hiddenElement(calendarioSection);
        hiddenElement(diarioSection);
        hiddenElement(curriculoSection);
        hiddenElement(mensagemSection);
        hiddenElement(faqSection);
        estagioSection.style.display = 'flex';
    }
    if (elementoClicado == liElements[8]) {
        main.style.gridTemplateColumns = '20% 80%';
        hiddenElement(dashboardSection1);
        hiddenElement(dashboardSection2);
        hiddenElement(boletimSection);
        hiddenElement(calendarioSection);
        hiddenElement(diarioSection);
        hiddenElement(estagioSection);
        hiddenElement(curriculoSection);
        hiddenElement(faqSection);
        mensagemSection.style.display = 'flex';
    }
    if (elementoClicado == liElements[9]) {
        main.style.gridTemplateColumns = '20% 80%';
        hiddenElement(dashboardSection1);
        hiddenElement(dashboardSection2);
        hiddenElement(boletimSection);
        hiddenElement(calendarioSection);
        hiddenElement(diarioSection);
        hiddenElement(estagioSection);
        hiddenElement(curriculoSection);
        hiddenElement(mensagemSection);
        faqSection.style.display = 'flex';
    }
    
    // Definir a cor branca apenas para o i associado à li clicada
    // primeiro separa apenas o numero do id de li(li1,li2...) que foi clicado e coloca em uma variável
    let idNumber = elementoClicado.id.replace('li', ''); //removendo o "li" dos ids, deixando apenas os números
    // Pegando o icone(i) correspondente ao li, pois os numeros nos ids de li e i são iguais e mudando cor de texto.
    document.getElementById('i' + idNumber).style.color = '#ffffff';
}