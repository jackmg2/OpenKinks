var start = {
    divStart: document.getElementById('div-start'),
    paragraphCurrentPartner: {
        spanName: document.getElementById('span-partnerName'),
        spanItsYourTurn: document.getElementById('span-itsYourTurn')
    },
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
        this.divQuizz.style.display = "flex";
    },
    loadQuestionUI: function () {
        this.cleanQuestionUI();
        this.question.textContent = questions[this.questionIndex]['questionPartner' + currentPartnerId];

        for (let i = 0; i < questions[this.questionIndex].answers.length; i++) {
            let val = questions[this.questionIndex].answers[i];
            let divButton = document.createElement("div");
            divButton.setAttribute("class", "col");
            let button = document.createElement("button");
            button.setAttribute("type", "button");
            button.setAttribute("class", "btn btn-raised btn-primary");
            if (i == 0) {
                button.classList.add("leftButton");
            }
            else if (i == 1) {
                button.classList.add("centeredButton");
            }
            else if (i == 2) {
                button.classList.add("rightButton");
            }
            button.value = val.answer;
            button.innerText = val.answer;
            button.addEventListener("click", () => this.saveAnswer(val));
            divButton.appendChild(button);
            this.buttons.append(divButton);
        }
    },
    cleanQuestionUI: function () {
        this.question.textContent = "";
        for (let i = this.buttons.children.length - 1; i >= 0; i--) {
            this.buttons.children[i].remove();
        }
    },
    saveAnswer: function (answer) {
        questions[this.questionIndex]['answerPartner' + currentPartnerId] = answer;
        if (this.questionIndex < questions.length - 1) {
            this.questionIndex++;
            this.loadQuestionUI();
        }
        else if (currentPartnerId == 1) {
            this.hide();
            currentPartnerId++;
            this.questionIndex = 0;
            start.paragraphCurrentPartner.spanName.textContent = i18n.partnerName.format("Partner " + currentPartnerId);
            start.show();
        }
        else {
            this.hide();
            review.show();
        }
    }
};

var review = {
    divReview: document.getElementById('div-review'),
    show: function () {

        let youHaveNothingInCommon = true;

        questions.forEach(question => {
            let coupleResult = question.answerPartner1.shared + question.answerPartner2.shared;
            let textPartner1 = "";
            let textPartner2 = "";

            if (coupleResult > 2) {
                youHaveNothingInCommon = false;

                if (question.answerPartner1.shared == 1) {
                    textPartner1 = i18n.partnerIsOpenToo.format('1');
                }
                if (question.answerPartner2.shared == 1) {
                    textPartner2 = i18n.partnerIsOpenToo.format('2');
                }
                if (question.answerPartner1.shared == 2) {
                    textPartner1 = i18n.partnerLikesIt.format('1');
                }
                if (question.answerPartner2.shared == 2) {
                    textPartner2 = i18n.partnerLikesIt.format('2');
                }

                let paragraph = document.createElement('p');
                paragraph.innerHTML = "<span class=\"reviewQuestion\">" + question.questionPartner1 +"</span>"
                                    + "<br/>" 
                                    + textPartner1 
                                    + "<br/>" 
                                    + "<span class=\"reviewQuestion\">" +question.questionPartner2 +"</span>"
                                    + "<br/>" 
                                    + textPartner2;
                this.divReview.append(paragraph);
                this.divReview.append(document.createElement('hr'));
            }
        });

        if (youHaveNothingInCommon) {
            let paragraph = document.createElement('p');
            paragraph.innerHTML = i18n.notCompatible;
            this.divReview.append(paragraph);
        }

        this.divReview.style.display = "block";
    }
};

function launch() {
    start.hide();
    questionIndex = 0;
    quizz.loadQuestionUI();
    quizz.show();
}

var currentPartnerId = 1;

document.getElementById('startScreen-start').addEventListener("click", () => launch());

document.getElementById('title').innerText = i18n.title;
document.getElementById('startScreen-start').value = i18n.startButton;
document.getElementById('startScreen-start').innerText = i18n.startButton;
start.paragraphCurrentPartner.spanName.textContent = i18n.partnerName.format("Partner " + currentPartnerId);
start.paragraphCurrentPartner.spanItsYourTurn.textContent = i18n.itsYourTurn;

start.show();