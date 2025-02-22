const {test,expect} = require('@playwright/test');
const { isContext } = require('vm');


test('First login page',async ({browser})=>{

    const context= await browser.newContext();
    const page= await context.newPage();
    await page.goto("https://www.makemytrip.com");
    //await page.locator('.makeFlex hrtlCenter li').last().click();
    await page.locator('section').filter({ hasText: 'Personal AccountMyBiz Account' }).locator('span').first().click();
    //await page.pause();
    const travelContent=page.locator('.menu_TravelInsurance span').nth(4).textContent();
    await expect(page.locator('.menu_TravelInsurance span').nth(4)).toContainText('Travel Insurance');
});

test('Second test cases',async ({browser})=>{
           const context = await browser.newContext();
           const page = await context.newPage();
               await page.goto("https://www.makemytrip.com");
               await page.locator('section').filter({ hasText: 'Personal AccountMyBiz Account' }).locator('span').first().click();
               await page.locator('p[data-cy = "LoginHeaderText"]').click();
               await page.locator('li[data-acctype*="myBiz"]').click();
               await page.locator('.inputText').fill("krishkishore095@gmail.com");
               await page.locator('span.createMbAccount__btn.flexOne.appendLeft7').click();
               await page.locator('input[placeholder="Enter a password"]').fill("History@1986");
               await page.locator('button.font16.latoBold.button.loginWrapMybiz.buttonPrimary').click();
               await page.pause();


});
test.only('Third case',async ({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
        await page.goto("https://www.makemytrip.com");
        await page.locator('section').filter({ hasText: 'Personal AccountMyBiz Account' }).locator('span').first().click();
        await page.locator('p[data-cy = "LoginHeaderText"]').click();
        await page.locator('li[data-acctype*="myBiz"]').click();
        await page.locator('.inputText').fill("krishkishore095@gmail.com");
        await page.locator('span.createMbAccount__btn.flexOne.appendLeft7').click();
        await page.locator('input[placeholder="Enter a password"]').fill("History@1986");
        await page.locator('button.font16.latoBold.button.loginWrapMybiz.buttonPrimary').click();
        const internationalflight=page.locator('.unlcOffr__cta.font16.latoBold.capText');
        const [newpage] = await Promise.all([context.waitForEvent('page'),internationalflight.click(),])
        console.log(await newpage.locator('.sc-1nwjbkl-3.djLTuM').click());
        await newpage.pause();
        

       





});