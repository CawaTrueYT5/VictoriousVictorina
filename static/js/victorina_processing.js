const questions = document.getElementById("questions").getAttribute("title");
console.log(questions);
Array = document.getElementById("questions").textContent.split("  /  ");


let i = 0
var Answers = new Map();
ProcessQuestion();

function ProcessQuestion() {
    ArraySplitted = Array[i].split(" - ");
    document.getElementById("question_name").textContent = ArraySplitted[1];
    document.getElementById("question_text").textContent = ArraySplitted[2];

    function AnswerIsGiven(event) {
        let Answer = Number(event.target.id[6]) + 1;
        if (Answer == RightAnswer) {
            i = i + 1;
            for (let e = 1; e <= Answers.size; e++) {
                document.body.removeChild(Answers.get(String(e)));
            }
            ProcessQuestion();
        }
    }

    QuestionsSplitted = ArraySplitted[3].split("\\");
    let RightAnswer = Number(ArraySplitted[4]);
    let QuestionsOrder = [];
    for (let w = 0; w < QuestionsSplitted.length; w++) {
        QuestionsOrder.push(w);
    }

    while (QuestionsOrder != []) {
        let RandomQuestion = Math.floor(Math.random() * (QuestionsOrder.length))
        let a = QuestionsOrder[RandomQuestion];
        QuestionsOrder.splice(RandomQuestion, 1);

        let button = document.createElement("button");
        button.innerHTML = QuestionsSplitted[a].split("=")[1];
        button.id = "button" + a;
        button.onclick = AnswerIsGiven;
        button.className = "answer_button";
        document.body.appendChild(button);

        Answers.set(QuestionsSplitted[a].split("=")[0], button);
    }
}