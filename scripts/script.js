'use script';

const list = document.querySelectorAll('.option_list');
const question_span = document.querySelector('.question');
const amount = document.querySelector('.amount');
const optionAnswer = document.querySelectorAll('.option_answer');
const btn = document.querySelector('.btn');
const score = document.querySelector('.score');

const op_a = document.querySelector('.option_a');
const op_b = document.querySelector('.option_b');
const op_c = document.querySelector('.option_c');
const op_d = document.querySelector('.option_d');

const questions = [
    {
        id: 1,
        question: "Where is China located ?",
        answer: "Asia",
        optionA: "Asia",
        optionB: "America",
        optionC: "Africa",
        optionD: "Europe"
    },

    {
        id: 2,
        question: "Where is Brazil located ?",
        answer: "South America",
        optionA: "Asia",
        optionB: "South America",
        optionC: "Africa",
        optionD: "Europe"
    },

    {
        id: 3,
        question: "Which English city is known as the Steel City ?",
        answer: "Sheffield",
        optionA: "London",
        optionB: "Liverpool",
        optionC: "Sheffield",
        optionD: "York"
    },

    {
        id: 4,
        question: "Which former British colony was given back to China in 1997 ?",
        answer: "Hong Kong",
        optionA: "United States",
        optionB: "Mexico",
        optionC: "Canada",
        optionD: "Hong Kong"
    },

    {
        id: 5,
        question: "Which element is said to keep bones strong ?",
        answer: "Calcium",
        optionA: "Potassium",
        optionB: "Calcium",
        optionC: "Vitamin C",
        optionD: "Magnesium"
    },

    {
        id: 6,
        question: "Suriname is located on which continent ?",
        answer: "South America",
        optionA: "South America",
        optionB: "Asia",
        optionC: "Africa",
        optionD: "Europe"
    },

    {
        id: 7,
        question: "What is the main ingredient in guacamole ?",
        answer: "Avocado",
        optionA: "Banana",
        optionB: "Apple",
        optionC: "Avocado",
        optionD: "Orange"
    },

    {
        id: 8,
        question: "Which mountain overlooks Cape Town in South Africa ?",
        answer: "Table Mountain",
        optionA: "Scafell Pike",
        optionB: "Ben Macdui",
        optionC: "Mayon Volcano",
        optionD: "Table Mountain"
    },

    {
        id: 9,
        question: "Caledonia was the Roman name for which modern day country ?",
        answer: "Scotland",
        optionA: "Sweeden",
        optionB: "Scotland",
        optionC: "Portugal",
        optionD: "Italy"
    },

    {
        id: 10,
        question: "What brand of beer does Homer Simpson drink ?",
        answer: "Duff Beer",
        optionA: "Heineken",
        optionB: "Stella Artois",
        optionC: "Duff Beer",
        optionD: "Bud Light"
    },

    {
        id: 11,
        question: "What is the largest freshwater lake in the world by its area size ?",
        answer: "Lake Superior",
        optionA: "Amazon River",
        optionB: "Lake Sebu",
        optionC: "Lake Superior",
        optionD: "Lake Victoria"
    },

    {
        id: 12,
        question: "Which is the only planet in our solar system not named after a Roman or Greek god ?",
        answer: "Earth",
        optionA: "Jupiter",
        optionB: "Mars",
        optionC: "Venus",
        optionD: "Earth"
    },

    {
        id: 13,
        question: "Jacinda Ardern became the Prime Minister of which country in 2017 ?",
        answer: "New Zealand",
        optionA: "Philippines",
        optionB: "New Zealand",
        optionC: "Spain",
        optionD: "Australia"
    },

    {
        id: 14,
        question: "How many wisdom teeth does the average adult have ?",
        answer: "Four",
        optionA: "Four",
        optionB: "Five",
        optionC: "Three",
        optionD: "Six"
    },

    {
        id: 15,
        question: "Copacabana Beach is located in which city ?",
        answer: "Rio de Janeiro",
        optionA: "Acapulco Mexico",
        optionB: "Rio de Janeiro",
        optionC: "Bordeaux",
        optionD: "Los Angeles"
    },

    {
        id: 16,
        question: "Pyrophobia is the fear of what ?",
        answer: "Fire",
        optionA: "Water",
        optionB: "Animals",
        optionC: "People",
        optionD: "Fire"
    },

    {
        id: 17,
        question: "What is the capital of Argentina ?",
        answer: "Buenos Aires",
        optionA: "Barcelona",
        optionB: "Buenos Aires",
        optionC: "Cali",
        optionD: "Santiago",
    },

    {
        id: 18,
        question: "A podiatrist specialises in treating which part of the human body ?",
        answer: "the feet",
        optionA: "the feet",
        optionB: "the arms",
        optionC: "the hands",
        optionD: "the legs"
    },

    {
        id: 19,
        question: "‘The Beach’ starring Leonardo DiCaprio is set in which country ?",
        answer: "Thailand",
        optionA: "Miami",
        optionB: "Boracay",
        optionC: "Thailand",
        optionD: "Puerto Galera"
    },

    {
        id: 20,
        question: "Which singer had a hit in the 1970s called ‘Maggie May’ ?",
        answer: "Rod Steward",
        optionA: "Axel Rose",
        optionB: "David Bowie",
        optionC: "Paul McCartney",
        optionD: "Rod Steward"
    }
];

const length = questions.length;
console.log(length)

const getNextIdx = (idx = 0, length, direction) => {
    switch (direction) {
        case 'next': return (idx + 1) % length;
        case 'prev': return (idx == 0) && length - 1 || idx - 1;
        default:     return idx;
    }
}

let idx; // idx is undefined, so getNextIdx will take 0 as default

const getNewIndexAndRender = (direction) => {
    idx = getNextIdx(idx, length, direction);
    
    question_span.innerHTML = questions[idx].question;
    amount.innerHTML = questions[idx].id;
    op_a.innerHTML = questions[idx].optionA;
    op_b.innerHTML = questions[idx].optionB;
    op_c.innerHTML = questions[idx].optionC;
    op_d.innerHTML = questions[idx].optionD;

    optionAnswer.forEach(el => {
        (el.innerHTML === questions[idx].answer) ? el.setAttribute('value', questions[idx].answer) : el.removeAttribute('value');
        (el.innerHTML != questions[idx].answer) ? el.setAttribute('status', 'false') : el.removeAttribute('status');
        el.parentElement.style.backgroundColor = '#fff';
        el.style.color = 'black';
        unline();
    });

}

getNewIndexAndRender();

list.forEach(el => {

    el.addEventListener('click', function(direction) {

        idx = getNextIdx(idx, length, direction);

        let element = this.querySelector('.option_answer');
        //console.log(document.querySelector('.option_answer[value]').parentElement);

        //(element.innerHTML === questions[idx].answer) ? element.setAttribute('value', questions[idx].answer) : '';

        if (element.getAttribute('value') === questions[idx].answer) {
            this.style.backgroundColor = '#81B622';
            element.style.color = '#fff';
            line()
            addScore();
        } else {
            this.style.backgroundColor = '#F51720';
            element.style.color = '#fff';
            document.querySelector('.option_answer[value]').parentElement.style.backgroundColor = '#81B622';
            line();

        }

    });
})

let currentScore = 0;
const icon = document.querySelector('.icon');
score.innerHTML = currentScore;

function addScore() {
    currentScore++

    score.innerHTML = `Score: ${currentScore} ${(currentScore >= 5 && currentScore < 10) ? '😉' : (currentScore >= 10 && currentScore < 15) ? '😯' : (currentScore >= 15) ? '😱' : ''}`;
}

function line() {
    optionAnswer.forEach(els => { 
        (els.getAttribute('status') === 'false') ? els.classList.add('line') : '';
    });
}

function unline() {
    optionAnswer.forEach(els => {
        (els.classList.contains('line')) ? els.classList.remove('line') : '';
    })
}

function restart() {
    const amountNumber = amount.innerHTML * 1;

    if (amountNumber > questions.length) {
        amount.innerHTML = currentScore;
    }
}