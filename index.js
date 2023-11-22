const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // افتح موقع معين
    await page.goto('https://example.com');

    // احصل على الكوكيز
    const cookies = await page.cookies();
    console.log(cookies);

    await browser.close();
})();
