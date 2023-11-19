const quizData = [{
    question: "The Queen of our Hearts Miss World Aishwarya Rai Bacchhan made her debut with a Tamil movie inspired by the life of actors and politics. Identify the movie",
    a: "Uyire (1998)",
    b: "Aur Pyaar Ho Gaya (1997)",
    c: "Iruvar (1997)",
    d: "Guru (2007)",
    correct: "c",
},
{
    question: "Which of these crime thrillers features Vidya Balan in the role of a pregnant woman trying to find her missing husband?",
    a: "Humari Adhuri Kahani",
    b: "Kahaani",
    c: "Munna Bhai MBBS",
    d: "Bhool Bhulaiya",
    correct: "b",
},
{
    question: "Which of these movies starring Ayushmann Khurana is based on the 2014 Badaun rape case?",
    a: "Article 15",
    b: "Vicky Donor",
    c: "Jolly LLB",
    d: "Andhadhun",
    correct: "a",
},
{
    question: "Which movie starring Alia Bhatt won the National Film Award 2023?",
    a: "Mimi",
    b: "Gangubai Kathiawadi",
    c: "Rocky Aur Rani ki Prem Kahani",
    d: "Udta Punjab",
    correct: "b",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Congratulations you've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);
