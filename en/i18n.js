var i18n = {
    version: 0.9,
    title: 'Open Kinks',
    indexPage: {
        description: '<strong>Open Kinks</strong> is a tool to open the discussion about the desires and wishes of two partners.<br /><br />You will answer a questionnaire one after the other.<br />You will then discover your common affinities and the points on which you can exchange.<br /><br /><strong>If you answer "No" to a practice, it will not be visible.</strong><br />That way, both of you won\'t know about things you\'re not ready to do yet.',
        disclaimer: 'This tool is 100% Open-Source, you can contribute!<br/>We do not store any answers.',
        startButton: 'Start'
    },
    quizzPage: {
        partnerName: '{0}, ',
        itsYourTurn: 'it\'s your turn',
        startButton: 'Start',
        reviewTitle: 'Your compatibility board',
        partnerIsOpenToo: 'Partner {0} is open to it',
        partnerLikesIt: 'Partner {0} would like it!',
        partnerLikesItBut: 'Partner {0} would like it <span style=\'font-weight:bold;\'>buuut</span> have something to say.',
        notCompatible: 'Huho, we didn\'t find any compatibilities on this session...',
        buttonLabels: ['no', 'if partner is open', 'yes-but', 'yes'],
        chooseLevelLabel: 'Choose a level',
        pickSexLabel: 'Partner {0}, what is your physical sex?',
        penisLabel: 'Penis',
        vaginaLabel: 'Vagina',
        levels: [{
            level: 1,
            description: 'Level 1: Vanilla'
        },
        {
            level: 2,
            description: 'Level 2: Toys, exhib, light bdsm'
        },
        {
            level: 3,
            description: 'Level 3: bdsm, online exhib with people'
        },
        {
            level: 4,
            description: 'Level 4: Swingers, hard bdsm'
        },
        {
            level: 5,
            description: 'Level 5:Extreme'
        }]
    }
}

String.prototype.format = function () {
    var a = this;
    for (var k in arguments) {
        a = a.replace(new RegExp("\\{" + k + "\\}", 'g'), arguments[k]);
    }
    return a
}
