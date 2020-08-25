var start = {
    divStart: document.getElementById('div-start'),
    currentPartner: document.getElementById('p-current_partner'),
    hide: function () {
        this.divStart.style.display = "none";
    },
    show: function () {
        this.divStart.style.display = "block";
    }
};

var quizz = {
    questionIndex: 0,
    divQuizz: document.getElementById('div-quizz'),
    question: document.getElementById('quizz-question'),
    buttons: document.getElementById('quizz-buttons'),
    hide: function () {
        this.divQuizz.style.display = "none";
    },
    show: function () {
        this.divQuizz.style.display = "block";
    },
    loadQuestionUI: function () {
        this.cleanQuestionUI();
        this.question.textContent = questions[this.questionIndex]['questionPartner' + partnerId];
        questions[this.questionIndex].answers.forEach(val => {
            let button = document.createElement("input");
            button.setAttribute("type", "button");
            button.value = val;
            button.addEventListener("click", () => this.saveAnswer(button.value));
            this.buttons.append(button);
        });
    },
    cleanQuestionUI: function () {
        this.question.textContent = "";
        for (let i = this.buttons.children.length - 1; i >= 0; i--) {
            this.buttons.children[i].remove();
        }
    },
    saveAnswer: function (answer) {
        questions[this.questionIndex]['answerPartner' + partnerId] = answer;
        if (this.questionIndex < questions.length - 1) {
            this.questionIndex++;
            this.loadQuestionUI();
        }
        else if (partnerId == 1) {
            this.hide();
            partnerId++;
            start.currentPartner.textContent = "Partner " + partnerId + ", it's your turn.";
            start.show();
        }
        else {

        }
    }
};

var review = {
    divReview: document.getElementById('div-review')
};

var partnerId = 1;

function launch() {
    start.hide();
    questionIndex = 0;
    quizz.loadQuestionUI();
    quizz.show();
}

document.getElementById('startScreen-start').addEventListener("click", () => launch());

start.currentPartner.textContent = "Partner " + partnerId + ", it's your turn.";

start.show();