var messageFr;
var messageEn;

function getCookie(name) {
	var value = "; " + document.cookie;
	var parts = value.split("; " + name + "=");
	if (parts.length == 2) return parts.pop().split(";").shift();
}

var charge = function () {
	console.log('test filter', decodeURIComponent(document.cookie));
	var cookie = decodeURIComponent(document.cookie);
	var cookieRegEx = /site=adelphe/;
	var baseFile;
	if (cookieRegEx.test(cookie)) {
		messageFr = require('../data/messages/adelphe_labels-fr');
		messageEn = require('../data/messages/adelphe_labels-en');
	} else {
		messageFr = require('../data/messages/labels-fr');
		messageEn = require('../data/messages/labels-en');
	}

}

var getLangage = function () {
	console.debug('getLangage : begin');
	var result = "fr";
	var cookie = getCookie('language');
	console.debug('cookie language = ', cookie);
	if (cookie && cookie == "en") {
		result = "en";
		console.debug('activation anglais');
	} else {
		console.debug('activation francais');
	}


	console.debug('getLangage : result = ', result);
	return result;
}

charge();

module.exports = function ($translateProvider) {
	var languages = {
		fr: 'fr',
		en: 'en'
	};

	var langage = getLangage();
	console.warn('config : translate. langage = ', langage);


	$translateProvider.translations(languages.fr, messageFr);
	$translateProvider.translations(languages.en, messageEn);
	//$translateProvider.translations(languages.en, messageEn);

	$translateProvider.preferredLanguage(langage);

	$translateProvider.useSanitizeValueStrategy('escape');
};