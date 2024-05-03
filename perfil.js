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

let textAdd = document.querySelector('.addImg');
let imageUser = document.querySelector('#img-user');

    function showOption() {
        imageUser.classList.toggle('hovered');
        textAdd.style.display = 'flex'
    }

    function hideOption() {
        imageUser.classList.remove('hovered');
        textAdd.style.display = 'none'
    }

    imageUser.addEventListener('mouseenter', showOption)
    textAdd.addEventListener('mouseenter', showOption)
    imageUser.addEventListener('mouseleave', hideOption)
    textAdd.addEventListener('mouseleave', hideOption)

    const inputFile = document.querySelector("#pictureInput");
    const pictureImage = document.querySelector(".addImg");
    
    inputFile.addEventListener("change", function (e) {
        const inputTarget = e.target;
        const file = inputTarget.files[0];

        if (file) {
            const reader = new FileReader();

            reader.addEventListener("load", function (e) {
                const readerTarget = e.target;

                imageUser.src = readerTarget.result; 
                imageUser.classList.add("picture-img");
                
                pictureImage.appendChild(img);
            });

            reader.readAsDataURL(file);
        }
    });

    /*  */

    function showInfo(constante, item) {
        const info = localStorage.getItem(item);
        return info;
    }
    function hidePassword(password) {
        return '*'.repeat(password.length);
    }
