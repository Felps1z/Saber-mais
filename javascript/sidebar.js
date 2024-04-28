function checked(event) {
    let elementoClicado = event.currentTarget;
    let liElements = document.querySelectorAll('ul li');
    let iElements = document.querySelectorAll('ul li i');

    //Resetar todas as li para background branco e cor do texto azul
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

    const page1Section1 = document.querySelector('main section:nth-of-type(1)');
    const page1Section2 = document.querySelector('main section:nth-of-type(2)');
    const page2 = document.querySelector('main section:nth-of-type(3)');
    const page3 = document.querySelector('main section:nth-of-type(4)');
    const page4 = document.querySelector('main section:nth-of-type(5)');
    const page5 = document.querySelector('main section:nth-of-type(6)');
    const page6 = document.querySelector('main section:nth-of-type(7)');
    const page7 = document.querySelector('main section:nth-of-type(8)');
    const page8 = document.querySelector('main section:nth-of-type(9)');
    const main = document.querySelector('main');
    const btnBack = document.querySelector('.btn-back');
    const aside = document.querySelector('aside')

    function change() {
        return {
            hiddenElement(element) {
                element.style.display = 'none';
            },

            showElement(element) {
                element.style.display = 'inherit';
            },

            //-> Exibição de sections de acordo com resolução de dispositivo
            verifyMobile(grid) {
                if (window.innerWidth <= 900) {
                    btnBack.style.display = 'block';
                    this.hiddenElement(aside)
                } else {
                    btnBack.style.display = 'none';
                    main.style.gridTemplateColumns = grid;
                }
            },

            //->Buttons
            btn1() {
                this.verifyMobile('20% 40% 40%');
                this.showElement(page1Section1);
                this.showElement(page1Section2);
                this.hiddenElement(page2);
                this.hiddenElement(page3);
                this.hiddenElement(page4);
                this.hiddenElement(page5);
                this.hiddenElement(page6);
                this.hiddenElement(page7);
                this.hiddenElement(page8);
            },
            btn2() {
                this.verifyMobile('20% 80%');
                this.hiddenElement(page1Section1);
                this.hiddenElement(page1Section2);
                this.hiddenElement(page3);
                this.hiddenElement(page5);
                this.hiddenElement(page4);
                this.hiddenElement(page6);
                this.hiddenElement(page7);
                this.hiddenElement(page8);
                page2.style.display = 'flex';
            },
            btn3() {
                this.verifyMobile('20% 80%');
                this.hiddenElement(page1Section1);
                this.hiddenElement(page1Section2);
                this.hiddenElement(page2);
                this.hiddenElement(page4);
                this.hiddenElement(page5);
                this.hiddenElement(page6);
                this.hiddenElement(page8);
                page3.style.display = 'flex';
            },
            btn4() {
                this.verifyMobile('20% 80%');
                this.hiddenElement(page1Section1);
                this.hiddenElement(page1Section2);
                this.hiddenElement(page2);
                this.hiddenElement(page3);
                this.hiddenElement(page5);
                this.hiddenElement(page6);
                this.hiddenElement(page7);
                this.hiddenElement(page8);
                page4.style.display = 'flex';
            },
            btn5() {
                this.verifyMobile('20% 80%');
                this.hiddenElement(page1Section1);
                this.hiddenElement(page1Section2);
                this.hiddenElement(page2);
                this.hiddenElement(page3);
                this.hiddenElement(page4);
                this.hiddenElement(page6);
                this.hiddenElement(page7);
                this.hiddenElement(page8);
                page5.style.display = 'flex';
            },
            btn6() {
                this.verifyMobile('20% 80%');
                this.hiddenElement(page1Section1);
                this.hiddenElement(page1Section2);
                this.hiddenElement(page2);
                this.hiddenElement(page3);
                this.hiddenElement(page4);
                this.hiddenElement(page5);
                this.hiddenElement(page7);
                this.hiddenElement(page8);
                page6.style.display = 'flex';
            },
            btn7() {
                this.verifyMobile('20% 80%');
                this.hiddenElement(page1Section1);
                this.hiddenElement(page1Section2);
                this.hiddenElement(page2);
                this.hiddenElement(page3);
                this.hiddenElement(page4);
                this.hiddenElement(page6);
                this.hiddenElement(page5);
                this.hiddenElement(page8);
                page7.style.display = 'flex';
            },
            btn8() {
                this.verifyMobile('20% 80%');
                this.hiddenElement(page1Section1);
                this.hiddenElement(page1Section2);
                this.hiddenElement(page2);
                this.hiddenElement(page3);
                this.hiddenElement(page4);
                this.hiddenElement(page6);
                this.hiddenElement(page5);
                this.hiddenElement(page7);
                page8.style.display = 'flex';
            }
        }
    }

    const changes = change();

    switch (elementoClicado) {
        case liElements[2]: changes.btn1(); break;
        case liElements[3]: changes.btn2(); break;
        case liElements[4]: changes.btn3(); break;
        case liElements[5]: changes.btn4(); break;
        case liElements[6]: changes.btn5(); break;
        case liElements[7]: changes.btn6(); break;
        case liElements[8]: changes.btn7(); break;
        case liElements[9]: changes.btn8(); break;
    }

    if (elementoClicado == btnBack) {
        btnBack.style.display = 'none'
        changes.showElement(aside)
        changes.hiddenElement(page1Section1);
        changes.hiddenElement(page1Section2);
        changes.hiddenElement(page2);
        changes.hiddenElement(page3);
        changes.hiddenElement(page4);
        changes.hiddenElement(page5);
        changes.hiddenElement(page6);
        changes.hiddenElement(page7);
        changes.hiddenElement(page8);
    }

    let idNumber = elementoClicado.id.replace('li', '');

    document.getElementById('i' + idNumber).style.color = '#ffffff';
}