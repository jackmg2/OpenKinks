var i18n = {
    title: 'Open kink',
    partnerName: '{0}, ',
    itsYourTurn: 'it\'s your turn',
    startButton: 'Start',
    reviewTitle: 'Your compatibility board',
    partnerIsOpenToo: 'Partner {0} is open to it',
    partnerLikesIt: 'Partner {0} would like it!',
    notCompatible: 'Huho, we didn\'t find any compatibilities on this question...'
}

String.prototype.format = function () {
    var a = this;
    for (var k in arguments) {
        a = a.replace(new RegExp("\\{" + k + "\\}", 'g'), arguments[k]);
    }
    return a
}