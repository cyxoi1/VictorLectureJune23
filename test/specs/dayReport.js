const {expect} = require('chai');
const login = require("../login");

describe('CREATE DAY REPORT', () => {
    before(() => {
        login();
    })
    it('click on diary in main menu', function () {
        $("//div[@id='site-menu']//a[@qa='diary-link']").click();
    });
    it('should Title is correct', function () {
        const actualTitle = $("//h1").getText();
        expect(actualTitle).eq('Daily reports')
    });
    it.skip('should Button create day report is clickable', function () {
         const dayReportBtn = $("//a[@qa='create-day-report-button']");
         browser.pause(1000);
         const actualResult = dayReportBtn.isClickable();
         expect(actualResult).true;
    });
    it('should click on day report BTN ', function () {
        $("//a[@qa='create-day-report-button']").click();
    });
    it('should click I UNDERSTOOD EVERYTHING', function () {
        const elem = $("//label[@for='input-1']");
        elem.click();
        const res = $("//input[@id='input-1']");
        expect(res.isSelected()).true;

    });
    it('should click on check box Helped classmates', function () {
        const elem = $("//label[@for='input-2']");
        elem.click();
        const res = $("//input[@id='input-2']");
        expect(res.isSelected()).true;
        browser.pause(2000)
    });
})
