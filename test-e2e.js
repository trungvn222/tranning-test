const puppeteer = require("puppeteer");

(async () => {
	const browser = await puppeteer.launch({
		headless: false,
		showNo: 80,
		args: ["--window-size=1920,1080"],
	});

	const page = await browser.newPage();
	await page.goto("http://localhost:3000");
	// await page.click('id')
	// await page.type('id', 'user')
	// const finaltest = await page.$eval('field', (el) => )
})();
