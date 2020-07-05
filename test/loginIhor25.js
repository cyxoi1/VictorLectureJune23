function loginIhor25() {
    browser.deleteAllCookies();
    browser.maximizeWindow();
    browser.url('https://reg.usps.com/entreg/RegistrationAction_input');
    // $("//input[@name='email']").setValue('lutka@yahoo.com'); // change
    // $("//input[@name='password']").setValue('lutka'); // change
    // $("//button[@type='submit']").click();
}

module.exports = loginIhor25;