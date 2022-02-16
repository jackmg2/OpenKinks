var i18n = {
    version: 0.9,
    title: 'Open kinks',
    partnerName: '{0}, ',
    itsYourTurn: 'C\'est votre tour',
    startButton: 'Démarrer',
    reviewTitle: 'Vos compatibilités',
    partnerIsOpenToo: 'Partenaire {0} est ouvert à cette pratique',
    partnerLikesIt: 'Partenaire {0} aimerait le faire!',
    partnerLikesItBut: 'Partenaire {0} aimerait le faire <span style=\'font-weight:bold;\'>mais</span> a quelques réserves.',
    notCompatible: 'Huho, vous n\'avez pas de compatibilités sur cette session...',
    buttonLabels: ['non', 'si mon partenaire le souhaite', 'oui mais...', 'oui'],
    chooseLevelLabel: 'Choisissez un niveau',
    pickSexLabel: 'Partenaire {0}, quel est votre sexe ?',
    penisLabel: 'Penis',
    vaginaLabel: 'Vagin',
    levels:[{
        level: 1,
        description: 'Level 1: Vanilla'
    },
    {
        level: 2,
        description: 'Level 2: Sextoys, exhib, light bdsm'
    },
    {
        level: 3,
        description: 'Level 3: bdsm, online exhib'
    },
    {
        level: 4,
        description: 'Level 4: Echangisme, hard bdsm'
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