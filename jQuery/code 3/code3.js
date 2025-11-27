let questions = document.querySelectorAll('.question');
let answers = document.querySelectorAll('.answer');

questions.forEach((q, index) => {

    q.addEventListener('click', () => {
        answers[index].style.display =
            answers[index].style.display === 'block' ? 'none' : 'block';
    });

    q.addEventListener('dblclick', () => {
        answers.forEach(a => a.style.display = 'none');
    });
});

let inputs = document.querySelectorAll('.answer input');

inputs.forEach((inp, i) => {
    inp.addEventListener('focus', () => {
        questions[i].classList.add('highlight');
    });

    inp.addEventListener('blur', () => {
        questions[i].classList.remove('highlight');
    });
});
