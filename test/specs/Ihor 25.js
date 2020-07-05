const {expect} = require('chai');
const loginIhor25 = require("../loginIhor25");
//
// describe('CREATE DELIVERY', () =>{
//     before(() => {
//         loginIhor25();
//     })
    // it('should Delivery Btn ', function () {
    //    const deliveryBtn = $('//div[@class="t396__elem tn-elem tn-elem__1609606331580903579865"]');
    //    //const deliveryBtn = $('//div[@class="t396__elem tn-elem tn-elem__1940092081590069343195"]');
    //
    //     //div[@class="t396__elem tn-elem tn-elem__1940092081590069343195"]
    //    deliveryBtn.scrollIntoView();
    //    // browser.moveToElement();
    //    const res = deliveryBtn.isDisplayed();
    //     expect(res).true;
    //     //
    //    // deliveryBtn.click();
    //     browser.pause(1000);
    //
   // });

// })


describe ('USPS', () => {
    before(() => {
            loginIhor25();
    })

    it.skip('should verify logo ', function () {
        const logo = $('[id="usps-logo"]').isDisplayed();
        expect(logo).true;
    });

    it.skip('should select language', function () {
        const languageDropdown = $('[id="slanguage"]');
        languageDropdown.selectByVisibleText('Español');
    });

    it.skip('should set Username', function () {
        const username = $('[id="tuserName"]');
        username.setValue('vasya');
        browser.pause(500);
    });

    it('should select first quest', function () {
        const firstQin = $('[id="ssec1"]');
        firstQin.selectByVisibleText('In what city were you born?');
        browser.pause(2000);
    });

    it('should verify first quest selected', function () {
        const firstQ = $('[id="o1"]');
        const res = firstQ.isSelected();
        expect(res).true;
    });

})