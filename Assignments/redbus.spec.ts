import { test, chromium } from "@playwright/test";

test("Launch RedBus Application in Browser", async () => {
       const browser = await chromium.launch({
        headless: false,
        channel: "chrome"
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.redbus.in");
    const url = page.url();
    console.log("URL: ",url);
    const title = await page.title();
    console.log("Title: ",title);
    await browser.close();
});
