var configuration = {
    divConfig: document.getElementById('div-configuration'),
    startButton: document.getElementById('configurationScreen-start'),
    selectLevel: document.getElementById('select-level'),
    selectPartner1: document.getElementById('select-sex-partner1'),
    selectPartner2: document.getElementById('select-sex-partner2'),
    questions: [],
    fillLevels: function () {
        document.getElementById('label-level').innerText = i18n.quizzPage.chooseLevelLabel;
        for (let i = 0; i < i18n.quizzPage.levels.length; i++) {
            let option = document.createElement("option");
            option.text = i18n.quizzPage.levels[i].description;
            option.value = i18n.quizzPage.levels[i].level;
            this.selectLevel.add(option);
        }
    },
    fillSex: function (select) {
        let option1 = document.createElement("option");
        option1.text = i18n.quizzPage.penisLabel;
        option1.value = i18n.quizzPage.penisLabel;
        select.add(option1);

        let option2 = document.createElement("option");
        option2.text = i18n.quizzPage.vaginaLabel;
        option2.value = i18n.quizzPage.vaginaLabel;
        select.add(option2);
    },
    fillSexes: function () {
        document.getElementById('label-sex-partner1').innerText = i18n.quizzPage.pickSexLabel.format('1');
        this.fillSex(this.selectPartner1);
        document.getElementById('label-sex-partner2').innerText = i18n.quizzPage.pickSexLabel.format('2');
        this.fillSex(this.selectPartner2);
    },
    startQuizz: function () {
        this.hide();
        let sexPartner1 = this.selectPartner1.value;
        let sexPartner2 = this.selectPartner2.value;
        let level = this.selectLevel.value;

        let partner1Filter = {
            source: ['a'],
            destination: ['a']
        };
        let partner2Filter = {
            source: ['a'],
            destination: ['a']
        };

        if (sexPartner1 == "Penis") {
            partner1Filter.source.push('m');
            partner2Filter.destination.push('m');
        }
        else if (sexPartner1 == "Vagina") {
            partner1Filter.source.push('f');
            partner2Filter.destination.push('f');
        }

        if (sexPartner2 == "Penis") {
            partner2Filter.source.push('m');
            partner1Filter.destination.push('m');
        }
        else if (sexPartner2 == "Vagina") {
            partner2Filter.source.push('f');
            partner1Filter.destination.push('f');
        }

        let selectedQuestions = questions.filter(q => q.level == level)
            .filter(q => (partner1Filter.source.some(f => f == q.sourcePartnerGender) && partner1Filter.destination.some(f => f == q.destinationPartnerGender))
                || (partner2Filter.source.some(f => f == q.sourcePartnerGender) && partner2Filter.destination.some(f => f == q.destinationPartnerGender)));

        selectedQuestions = selectedQuestions.takeRandomElements(20);

        selectedQuestions.forEach((question) => {
            let newQuestion = { questionPartner1: '', questionPartner2: '' };
            
            if (question.sourcePartnerGender == question.destinationPartnerGender && question.reversedForm !== undefined) {
                //Tail or face to choose the form we will use
                if (Math.random() >= 0.5) {
                    newQuestion.questionPartner1 = question.question;
                    newQuestion.questionPartner2 = question.reversedForm;
                }
                else {
                    newQuestion.questionPartner2 = question.question;
                    newQuestion.questionPartner1 = question.reversedForm;
                }
            }
            else {
                //If question is selected from partner1 sex
                if(partner1Filter.source.some(f => f == question.sourcePartnerGender)){
                    newQuestion.questionPartner1 = question.question;
                    newQuestion.questionPartner2 = question.reversedForm !== undefined ? question.reversedForm : question.question;
                }
                //Else, it's from partner2 sex
                else{
                    newQuestion.questionPartner2 = question.question;
                    newQuestion.questionPartner1 = question.reversedForm !== undefined ? question.reversedForm : question.question;
                }
            }

            configuration.questions.push(newQuestion);
        });

        //Load question into quizz
        start.show();
    },
    init: function () {
        document.getElementById('configurationScreen-start').innerText = i18n.quizzPage.startButton;
        this.startButton.addEventListener("click", () => this.startQuizz());
        this.fillLevels();
        this.fillSexes();
    },
    hide: function () {
        this.divConfig.style.display = "none";
    },
    show: function () {
        this.divConfig.style.display = "block";
    }
}

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
    buttonsClasses: ['button-no btn-danger mb-2 mt-2 ml-auto mr-auto', 'button-maybe btn-info mb-2 mt-2 ml-auto mr-auto', 'button-yes-but btn-primary mb-2 mt-2 ml-auto mr-auto', 'button-yes btn-success mb-2 mt-2 ml-auto mr-auto'],
    hide: function () {
        this.divQuizz.style.display = "none";
    },
    show: function () {
        this.divQuizz.style.display = "flex";
    },
    loadQuestionUI: function () {
        this.cleanQuestionUI();
        this.question.textContent = configuration.questions[this.questionIndex]['questionPartner' + currentPartnerId];

        let isVertical = window.innerWidth < 400; 
        let divMainLine;
        if(!isVertical){            
            divMainLine = document.createElement("div");
            divMainLine.setAttribute("class", "row");   
            this.buttons.append(divMainLine);         
        }

        for (let i = 0; i < 4; i++) {
            let button = document.createElement("button");
            button.setAttribute("type", "button");
            button.setAttribute("class", "btn btn-raised btn-primary"+this.buttonsClasses[i]);
            button.value = i18n.quizzPage.buttonLabels[i];
            button.innerText = i18n.quizzPage.buttonLabels[i];
            button.addEventListener("click", () => this.saveAnswer(i));

            let divButton = document.createElement("div");
            divButton.setAttribute("class", "col");

            divButton.appendChild(button);

            if(isVertical){
                divButton.setAttribute("class", "col text-center");

                let divLine = document.createElement("div");
                divLine.setAttribute("class", "row");
                divLine.appendChild(divButton);

                this.buttons.append(divLine);
            }
            else{                
                divMainLine.appendChild(divButton);
            }
        }
    },
    cleanQuestionUI: function () {
        this.question.textContent = "";
        for (let i = this.buttons.children.length - 1; i >= 0; i--) {
            this.buttons.children[i].remove();
        }
    },
    saveAnswer: function (answer) {
        configuration.questions[this.questionIndex]['answerPartner' + currentPartnerId] = answer;
        if (this.questionIndex < configuration.questions.length - 1) {
            this.questionIndex++;
            this.loadQuestionUI();
        }
        else if (currentPartnerId == 1) {
            this.hide();
            currentPartnerId++;
            this.questionIndex = 0;
            start.paragraphCurrentPartner.spanName.textContent = i18n.quizzPage.partnerName.format("Partner " + currentPartnerId);
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

        configuration.questions.forEach(question => {
            let textPartner1 = "";
            let textPartner2 = "";

            if (question.answerPartner1 > 0 && question.answerPartner2 > 0) {
                youHaveNothingInCommon = false;

                if (question.answerPartner1 == 1) {
                    textPartner1 = i18n.quizzPage.partnerIsOpenToo.format('1');
                }
                if (question.answerPartner2 == 1) {
                    textPartner2 = i18n.quizzPage.partnerIsOpenToo.format('2');
                }
                if (question.answerPartner1 == 2) {
                    textPartner1 = i18n.quizzPage.partnerLikesItBut.format('1');
                }
                if (question.answerPartner2 == 2) {
                    textPartner2 = i18n.quizzPage.partnerLikesItBut.format('2');
                }
                if (question.answerPartner1 == 3) {
                    textPartner1 = i18n.quizzPage.partnerLikesIt.format('1');
                }
                if (question.answerPartner2 == 3) {
                    textPartner2 = i18n.quizzPage.partnerLikesIt.format('2');
                }

                let paragraph = document.createElement('p');
                paragraph.innerHTML = "<span class=\"reviewQuestion\">" + question.questionPartner1 + "</span>"
                    + "<br/>"
                    + textPartner1
                    + "<br/>"
                    + "<span class=\"reviewQuestion\">" + question.questionPartner2 + "</span>"
                    + "<br/>"
                    + textPartner2;
                this.divReview.append(paragraph);
                this.divReview.append(document.createElement('hr'));
            }
        });

        if (youHaveNothingInCommon) {
            let paragraph = document.createElement('p');
            paragraph.innerHTML = i18n.quizzPage.notCompatible;
            this.divReview.append(paragraph);
        }

        this.divReview.style.display = "block";
    }
};

Array.prototype.takeRandomElements = function (n) {
    var arr = this;
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    //if there is item than in the array, we take the length of the array
    if (n > len)
        n = len;
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

function launch() {
    start.hide();
    questionIndex = 0;
    quizz.loadQuestionUI();
    quizz.show();
}

configuration.init();

var currentPartnerId = 1;

document.getElementById('startScreen-start').addEventListener("click", () => launch());

document.getElementById('title').innerText = i18n.title;
document.getElementById('startScreen-start').value = i18n.quizzPage.startButton;
document.getElementById('startScreen-start').innerText = i18n.quizzPage.startButton;
start.paragraphCurrentPartner.spanName.textContent = i18n.quizzPage.partnerName.format("Partner " + currentPartnerId);
start.paragraphCurrentPartner.spanItsYourTurn.textContent = i18n.quizzPage.itsYourTurn;

configuration.show();