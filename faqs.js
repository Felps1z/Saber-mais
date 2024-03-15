const buttonQuestion = document.querySelectorAll('.plus-button');
const titleQuestion = document.querySelectorAll('.boxQuestion .titleBox');
const answerQuestion = document.querySelectorAll('.answer'); 
const minusIcon2Question = document.querySelectorAll('.plus-button i:nth-child(2)');

buttonQuestion.forEach(function(selectedButton,i) {
    selectedButton.addEventListener('click', function(event) {
        answerQuestion[i].classList.toggle('openQuestion');
        titleQuestion[i].classList.toggle('openQuestionTitle');
        minusIcon2Question[i].classList.toggle('openQuestionTitle');
        minusIcon2Question[i].classList.toggle('rotateHorizontal');
    });
});


// buttonQuestion[0].addEventListener('click', function (event) {
//     answerQuestion[0].classList.toggle('openQuestion');
//     titleQuestion[0].classList.toggle('openQuestionTitle');
//     minusIcon2Question[0].classList.toggle('openQuestionTitle');
//     minusIcon2Question[0].classList.toggle('rotateHorizontal');
// });

// buttonQuestion[1].addEventListener('click', function (event) {
//     answerQuestion[1].classList.toggle('openQuestion');
//     titleQuestion[1].classList.toggle('openQuestionTitle');
//     minusIcon2Question[1].classList.toggle('openQuestionTitle');
//     minusIcon2Question[1].classList.toggle('rotateHorizontal');
// });

// buttonQuestion[2].addEventListener('click', function (event) {
//     answerQuestion[2].classList.toggle('openQuestion');
//     titleQuestion[2].classList.toggle('openQuestionTitle');
//     minusIcon2Question[2].classList.toggle('openQuestionTitle');
//     minusIcon2Question[2].classList.toggle('rotateHorizontal');
// });

// buttonQuestion[3].addEventListener('click', function (event) {
//     answerQuestion[3].classList.toggle('openQuestion');
//     titleQuestion[3].classList.toggle('openQuestionTitle');
//     minusIcon2Question[3].classList.toggle('openQuestionTitle');
//     minusIcon2Question[3].classList.toggle('rotateHorizontal');
// });