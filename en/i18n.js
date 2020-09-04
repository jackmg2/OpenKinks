var i18n = {
    version: 0.9,
    title: 'Open kinks',
    partnerName: '{0}, ',
    itsYourTurn: 'it\'s your turn',
    startButton: 'Start',
    reviewTitle: 'Your compatibility board',
    partnerIsOpenToo: 'Partner {0} is open to it',
    partnerLikesIt: 'Partner {0} would like it!',
    partnerLikesItBut: 'Partner {0} would like it <span style=\'font-weight:bold;\'>buuut</span> have something to say.',
    notCompatible: 'Huho, we didn\'t find any compatibilities on this session...',
    buttonLabels: ['no', 'maybe', 'yes-but', 'yes'],
    chooseLevelLabel: 'Choose a level',
    pickSexLabel: 'Partner {0}, what is your biological sex?',
    penisLabel: 'Penis',
    vaginaLabel: 'Vagina',
    levels:[{
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
        description: ''
    }]
}

String.prototype.format = function () {
    var a = this;
    for (var k in arguments) {
        a = a.replace(new RegExp("\\{" + k + "\\}", 'g'), arguments[k]);
    }
    return a
}