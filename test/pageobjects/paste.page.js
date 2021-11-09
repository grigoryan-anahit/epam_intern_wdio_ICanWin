const Page = require('./page');


class CreateNewPaste extends Page {

    get newPasteTextArea () { return $('#postform-text') }
    get pasteExpiration () { return $('#select2-postform-expiration-container') }
    get pasteExpirationUl () { return $('#select2-postform-expiration-results') }

    get pasteNameTitle () {return $('#postform-name')}


}

module.exports = new CreateNewPaste();
