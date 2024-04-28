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
