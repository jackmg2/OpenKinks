var i18n = {
    version: 0.9,
    title: 'Open Kinks',
    indexPage: {
        description: '<strong>Open Kinks</strong> est un outil pour ouvrir la discussion sur les envies et désirs de deux partenaires.<br /><br />Vous allez répondre l\'un après l\'autre à un questionnaire. <br />Vous découvrirez ensuite vos affinités communes et les points sur lesquels vous pouvez échanger.<br /><br /><strong>Si vous répondez "Non" à une pratique, elle ne sera pas visible.</strong><br /> Ainsi, vous ne verrez pas les pratiques qui peuvent vous sembler trop extrêmes pour le moment.',
        startButton: 'Démarrer',
        disclaimer: 'Cet outil est entièrement Open-Source, vous pouvez y contribuer.<br/>Aucune donnée n\'est conservée.'
    },
    quizzPage: {
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
        levels: [{
            level: 1,
            description: 'Niveau 1 : Vanilla'
        },
        {
            level: 2,
            description: 'Niveau 2 : Sextoys, exhib, light bdsm'
        },
        {
            level: 3,
            description: 'Niveau 3 : bdsm, online exhib'
        },
        {
            level: 4,
            description: 'Niveau 4 : Echangisme, hard bdsm'
        },
        {
            level: 5,
            description: 'Niveau 5 : Extreme'
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
