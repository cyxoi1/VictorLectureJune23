const {expect} = require('chai');
const loginIhor25 = require("../loginIhor25");

describe('CREATE DELIVERY', () =>{
    before(() => {
        loginIhor25();
    })
    it('should Delivery Btn ', function () {
       const deliveryBtn = $('//div[@class="t396__elem tn-elem tn-elem__1609606331580903579865"]');
       //const deliveryBtn = $('//div[@class="t396__elem tn-elem tn-elem__1940092081590069343195"]');

        //div[@class="t396__elem tn-elem tn-elem__1940092081590069343195"]
       deliveryBtn.scrollIntoView();
       // browser.moveToElement();
       const res = deliveryBtn.isDisplayed();
        expect(res).true;
        //
       // deliveryBtn.click();
        browser.pause(1000);
        
    });


})