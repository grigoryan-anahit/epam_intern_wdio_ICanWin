const CreateNewPaste = require('../pageobjects/paste.page');

describe('pastebin application', () => {
    it('should set values', async () => {
        await browser.maximizeWindow();
        await CreateNewPaste.open();
        await CreateNewPaste.newPasteTextArea.setValue('Hello from WebDriver');
        await CreateNewPaste.pasteExpiration.scrollIntoView({block:"center"});
        await CreateNewPaste.pasteExpiration.click();
        await CreateNewPaste.pasteExpirationUl.$$('li')[2].click();
        await CreateNewPaste.pasteNameTitle.setValue('helloweb');
        await browser.pause(2000);


    });
});


