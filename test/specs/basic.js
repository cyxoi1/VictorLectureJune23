//const {expect} = require('chai');    // obj expect assert, -> distryktivnoe prisvaevanie, destryktyrizaciya

// babel -> new js to old js with var
// babel -> import if no -> rekvaer

// 1. Open Url
// 2. Input
// 3. Submit
// Before -  pered it inside describe.
// After


//////////////////////////////

//  stage.pasv.us ?

//  HW Test case na registration Page + Tests !!! 20  - 30 - 40??? Smoke test!

//////////////////////////////



// describe('REGISTRATION PAGE',() => {
//     before(() => {
//         browser.maximizeWindow();
//         browser.url('https://stage.pasv.us/user/register');
//     })
//
//     it('should Title is correct', function () {
//         const actualText = $('//h1').getText();
//         const expectedText = 'User Register';
//         expect(actualText).eq(expectedText);
//     });
//
//     it('should Submit Button is not clickable ', function () {
//         const submitButton = $('//button[@type="submit"]');
//         const result = submitButton.isClickable();
//         expect(result).false;
//     });
//
//     it('should fill out firstName field ', function () {
//         const inputFirstName = $('//input[@name="firstName"]');
//         inputFirstName.setValue('Egor');
//     });
//
//     it('should input first name is valid ', function () {
//         const inputFirstName = $('//input[@name="firstName"]');
//         browser.keys('Tab')
//         const result = inputFirstName.getAttribute('class');
//         expect(result).contains('is-valid')
//     });
//
//     it('should fill out lastName field ', function () {
//         const inputLastName = $('//input[@name="lastName"]');
//         inputLastName.setValue('Shapovalov');
//     });
//
//     it('should input last name is valid ', function () {
//         const inputFirstName = $('//input[@name="lastName"]');
//         browser.keys('Tab')
//         const result = inputFirstName.getAttribute('class');
//         expect(result).contains('is-valid')
//     });
//
//     it('should fill out lastName field ', function () {
//         const inputLastName = $('//input[@name="email"]');
//         inputLastName.setValue('shapovalovihor@gmail.com');
//     });
//
//     it('should input email is valid ', function () {
//         const inputFirstName = $('//input[@name="email"]');
//         browser.keys('Tab')
//         const result = inputFirstName.getAttribute('class');
//         expect(result).contains('is-valid')
//     });
//
//     it('should fill out password field ', function () {
//         const inputLastName = $('//input[@name="password"]');
//         inputLastName.setValue('12132424');
//     });
//
//     it('should input password is valid ', function () {
//         const inputFirstName = $('//input[@name="password"]');
//         browser.keys('Tab')
//         const result = inputFirstName.getAttribute('class');
//         expect(result).contains('is-valid')
//     });
//     it('should Submit Button is not clickable ', function () {
//         const submitButton = $('//button[@type="submit"]');
//         const result = submitButton.isClickable();
//         expect(result).true;
//     });
//
// })


//
//
//
// describe('EDIT PROFILE',() => {
//     before(() => {
//         browser.maximizeWindow();
//         browser.url('https://stage.pasv.us/user/login');
//         $("//input[@name='email']").setValue('lutka@yahoo.com');
//         $("//input[@name='password']").setValue('lutka');
//         $("//button[@type='submit']").click();
//         $('//div[@id="user-section"]//a[@class="dropdown-toggle nav-link"]').click();
//         $("//button[text()='Settings']").click();
//     })
//     it('Check size t-short ', function () {
//         $("//select[@name='tShirtSize']").selectByVisibleText('Men/Unisex - XL');
//         browser.pause(2000);
//     });
//  })
//

























