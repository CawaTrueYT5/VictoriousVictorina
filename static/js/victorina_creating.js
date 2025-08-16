let QuestionsAmount = 1;
let Questions = ["None", 1];

document.getElementById("id_title").style = "visibility: hidden;";
document.querySelector(`label[for="${document.getElementById("id_title").id}"]`).style = "visibility: hidden;";
document.getElementById("id_description").style = "visibility: hidden;";
document.querySelector(`label[for="${document.getElementById("id_description").id}"]`).style = "visibility: hidden;";
document.getElementById("id_topics").style = "visibility: hidden;";
document.querySelector(`label[for="${document.getElementById("id_topics").id}"]`).style = "visibility: hidden;";
document.getElementById("id_questions").style = "visibility: hidden;";
document.querySelector(`label[for="${document.getElementById("id_questions").id}"]`).style = "visibility: hidden;";


function CreateVictorina() {
    document.getElementById("id_title").value = document.getElementById("VictorinasName").value;
    document.getElementById("id_description").value = document.getElementById("VictorinasDescription").value;
    document.getElementById("id_topics").value = "visibility: hidden;";

    let QuestionsInString = "";
    for (let q = 1; q <= QuestionsAmount; q++) {
        QuestionsInString = QuestionsInString + q + " - "
        QuestionsInString = QuestionsInString + document.getElementById(q + "/QuestionEnter").value + " - "
        QuestionsInString = QuestionsInString + document.getElementById(q + "/InformationEnter").value + " - "

        RightAnswer = 0
        for (let a = 1; a <= Questions[q]; a++) {
            if (a == Questions[q]) {
                QuestionsInString = QuestionsInString + a + "=" + document.getElementById(q + "/AnswerEnter/" + a).value;
            }
            else {
                QuestionsInString = QuestionsInString + a + "=" + document.getElementById(q + "/AnswerEnter/" + a).value + "\\";
            }

            if (document.getElementById(q + "/TrueCheck/" + a).checked) {
                RightAnswer = a
            }
        }
        QuestionsInString = QuestionsInString + " - " + RightAnswer

        if (q != QuestionsAmount) {
            QuestionsInString = QuestionsInString + "  /  "
        }
    }
    document.getElementById("id_questions").value = QuestionsInString;
}

function AddAnswer(event) {
    ButtonID = event.target.id.split("/");
    Questions[ButtonID[0]] = Questions[ButtonID[0]] + 1;

    let AnswerSector = document.createElement("div");
    AnswerSector.id = ButtonID[0] + "/AnswerSector/" + Questions[ButtonID[0]];
    AnswerTitle = document.createElement("h1");
    AnswerTitle.id = ButtonID[0] + "/AnswerTitle/" + Questions[ButtonID[0]];
    AnswerTitle.className = "small_text";
    AnswerTitle.style = "display: inline-block;";
    AnswerTitle.innerHTML = "Відповідь " + Questions[ButtonID[0]] + ": "
    AnswerEnter = document.createElement("input");
    AnswerEnter.id = ButtonID[0] + "/AnswerEnter/" + Questions[ButtonID[0]];
    AnswerEnter.className = "input_field";
    AnswerEnter.style = "display: inline-block;";
    AnswerEnter.type = "text";
    LabelForCheck = document.createElement("label")
    LabelForCheck.for = ButtonID[0] + "/TrueCheck/" + Questions[ButtonID[0]]
    LabelForCheck.innerHTML = "Вірна відповідь:"
    LabelForCheck.className = "small_text"
    TrueCheck = document.createElement("input")
    TrueCheck.id = ButtonID[0] + "/TrueCheck/" + Questions[ButtonID[0]];
    TrueCheck.style = "display: inline-block;";
    TrueCheck.type = "radio";

    let ButtonDeleteAnswer = document.createElement("button");
    ButtonDeleteAnswer.id = ButtonID[0] + "/DeleteAnswer/" + Questions[ButtonID[0]];
    ButtonDeleteAnswer.onclick = DeleteAnswer;
    ButtonDeleteAnswer.className = "button";
    ButtonDeleteAnswer.innerHTML = "Видалити";
    ButtonDeleteAnswer.style = "display: inline-block; float: right";

    AnswerSector.appendChild(AnswerTitle);
    AnswerSector.appendChild(AnswerEnter);
    AnswerSector.appendChild(LabelForCheck);
    AnswerSector.appendChild(TrueCheck);
    AnswerSector.appendChild(ButtonDeleteAnswer);
    document.getElementById(ButtonID[0] + "/AnswersSector").appendChild(AnswerSector);
    document.getElementById(ButtonID[0] + "/TrueCheck/" + Questions[ButtonID[0]]).name = "Choice" + ButtonID[0]
}
function DeleteAnswer(event) {
    ButtonID = event.target.id.split("/");
    document.getElementById(ButtonID[0] + "/AnswerSector/" + ButtonID[2]).remove();
    Questions[ButtonID[0]] = Questions[ButtonID[0]] - 1;

    document.getElementById("ButtonAdd").textContent = ButtonID;

    for (let s = Number(ButtonID[2]) + 1; s <= Questions[ButtonID[0]] + 1; s++) {
        document.getElementById(ButtonID[0] + "/AnswerSector/" + s).id = ButtonID[0] + "/AnswerSector/" + String(s - 1);

        document.getElementById(ButtonID[0] + "/AnswerTitle/" + s).textContent = "Відповідь " + String(s - 1) + ": ";
        document.getElementById(ButtonID[0] + "/AnswerTitle/" + s).id = ButtonID[0] + "/AnswerTitle/" + String(s - 1);

        document.getElementById(ButtonID[0] + "/DeleteAnswer/" + s).id = ButtonID[0] + "/DeleteAnswer/" + String(s - 1);
    }
}

function DeleteQuestion(event) {
    ButtonID = event.target.id.split("/");
    document.getElementById(ButtonID[0] + "/QuestionSector").remove();
    Questions.splice(ButtonID[0], 1);

    for (let s = Number(ButtonID[0]) + 1; s <= QuestionsAmount; s++) {
        document.getElementById(s + "/QuestionSector").id = String(s - 1) + "/QuestionSector";

        document.getElementById(s + "/QuestionTitle").textContent = "Питання " + String(s - 1);
        document.getElementById(s + "/QuestionTitle").id = String(s - 1) + "/QuestionTitle";

        document.getElementById(s + "/DeleteQuestion").id = String(s - 1) + "/DeleteQuestion";

        document.getElementById(s + "/QuestionEnter").id = String(s - 1) + "/QuestionEnter";
        document.getElementById(s + "/InformationEnter").id = String(s - 1) + "/InformationEnter";

        document.getElementById(s + "/AnswersSector").id = String(s - 1) + "/AnswersSector";

        for (let w = 1; w <= Questions[ButtonID[0]]; w++) {
            document.getElementById(s + "/AnswerSector/" + w).id = String(s - 1) + "/AnswerSector/" + w;
            document.getElementById(s + "/AnswerTitle/" + w).id = String(s - 1) + "/AnswerTitle/" + w;
            document.getElementById(s + "/AnswerEnter/" + w).id = String(s - 1) + "/AnswerEnter/" + w;
            document.getElementById(s + "/DeleteAnswer/" + w).id = String(s - 1) + "/DeleteAnswer/" + w;
        }

        document.getElementById(s + "/AddAnswer").id = String(s - 1) + "/AddAnswer";
    }
    QuestionsAmount = QuestionsAmount - 1;
}

function AddQuestion() {
    QuestionsAmount = QuestionsAmount + 1;
    Questions[QuestionsAmount] = 1;

    let NewQuestionSector = document.createElement("div");
    NewQuestionSector.id = QuestionsAmount + "/QuestionSector";
    NewQuestionSector.className = "scoreboard";

    let QuestionHeaderSector = document.createElement("div");
    let Title = document.createElement("h1");
    Title.id = QuestionsAmount + "/QuestionTitle"
    Title.className = "small_text";
    Title.style = "display: inline-block; padding: 0 50% 0 0";
    Title.innerHTML = "Питання " + QuestionsAmount;
    let ButtonDeleteQuestion = document.createElement("button");
    ButtonDeleteQuestion.id = QuestionsAmount + "/DeleteQuestion";
    ButtonDeleteQuestion.onclick = DeleteQuestion;
    ButtonDeleteQuestion.className = "button";
    ButtonDeleteQuestion.innerHTML = "Видалити питання";
    ButtonDeleteQuestion.style = "display: inline-block; float: right";
    QuestionHeaderSector.appendChild(Title);
    QuestionHeaderSector.appendChild(ButtonDeleteQuestion);

    let QuestionsNameSector = document.createElement("div");
    NameTitle = document.createElement("h1");
    NameTitle.className = "small_text";
    NameTitle.style = "display: inline-block;";
    NameTitle.innerHTML = "Саме запитання: "
    NameEnter = document.createElement("input");
    NameEnter.id = QuestionsAmount + "/QuestionEnter";
    NameEnter.className = "input_field";
    NameEnter.style = "display: inline-block;";
    NameEnter.type = "text";
    QuestionsNameSector.appendChild(NameTitle);
    QuestionsNameSector.appendChild(NameEnter);

    let QuestionsDescSector = document.createElement("div");
    DescTitle = document.createElement("h1");
    DescTitle.className = "small_text";
    DescTitle.style = "display: inline-block;";
    DescTitle.innerHTML = "Додаткова інформація: "
    DescEnter = document.createElement("input");
    DescEnter.id = QuestionsAmount + "/InformationEnter";
    DescEnter.className = "input_field";
    DescEnter.style = "display: inline-block;";
    DescEnter.type = "text";
    QuestionsDescSector.appendChild(DescTitle);
    QuestionsDescSector.appendChild(DescEnter);

    let QuestionsCapttion = document.createElement("h1");
    QuestionsCapttion.className = "small_text";
    QuestionsCapttion.innerHTML = "Варіанти відповідей: ";

    let AnswersSector = document.createElement("div");
    AnswersSector.className = "scoreboard";
    AnswersSector.id = String(QuestionsAmount) + "/AnswersSector";
    let AnswerSector1 = document.createElement("div");
    AnswerSector1.id = String(QuestionsAmount) + "/AnswerSector/1";
    AnswerTitle = document.createElement("h1");
    AnswerTitle.id = QuestionsAmount + "/AnswerTitle/1";
    AnswerTitle.className = "small_text";
    AnswerTitle.style = "display: inline-block;";
    AnswerTitle.innerHTML = "Відповідь 1: "
    AnswerEnter = document.createElement("input");
    AnswerEnter.id = QuestionsAmount + "/AnswerEnter/1";
    AnswerEnter.className = "input_field";
    AnswerEnter.style = "display: inline-block;";
    AnswerEnter.type = "text";
    LabelForCheck = document.createElement("label")
    LabelForCheck.for = QuestionsAmount + "/TrueCheck/1"
    LabelForCheck.innerHTML = "Вірна відповідь:"
    LabelForCheck.className = "small_text"
    TrueCheck = document.createElement("input")
    TrueCheck.id = QuestionsAmount + "/TrueCheck/1";
    TrueCheck.style = "display: inline-block;";
    TrueCheck.type = "radio";

    let ButtonDeleteAnswer = document.createElement("button");
    ButtonDeleteAnswer.id = String(QuestionsAmount) + "/DeleteAnswer/1";
    ButtonDeleteAnswer.onclick = DeleteAnswer;
    ButtonDeleteAnswer.className = "button";
    ButtonDeleteAnswer.innerHTML = "Видалити";
    ButtonDeleteAnswer.style = "display: inline-block; float: right";

    AnswerSector1.appendChild(AnswerTitle);
    AnswerSector1.appendChild(AnswerEnter);
    AnswerSector1.appendChild(LabelForCheck);
    AnswerSector1.appendChild(TrueCheck);
    AnswerSector1.appendChild(ButtonDeleteAnswer);
    AnswersSector.appendChild(AnswerSector1);

    let ButtonAddAnswer = document.createElement("button");
    ButtonAddAnswer.id = String(QuestionsAmount) + "/AddAnswer";
    ButtonAddAnswer.onclick = AddAnswer;
    ButtonAddAnswer.className = "button";
    ButtonAddAnswer.innerHTML = "Додати ще";


    NewQuestionSector.appendChild(QuestionHeaderSector)
    NewQuestionSector.appendChild(QuestionsNameSector)
    NewQuestionSector.appendChild(QuestionsDescSector)
    NewQuestionSector.appendChild(QuestionsCapttion)
    NewQuestionSector.appendChild(AnswersSector)
    NewQuestionSector.appendChild(ButtonAddAnswer)
    document.getElementById("QuestionsSector").insertBefore(NewQuestionSector, document.getElementById("ButtonAdd"));
    document.getElementById(QuestionsAmount + "/TrueCheck/1").name = "Choice" + QuestionsAmount
}