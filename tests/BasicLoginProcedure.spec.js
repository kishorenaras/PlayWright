const {test,expect} = require('@playwright/test');


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
