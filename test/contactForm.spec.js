const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const SITE_URL = "https://test.netlify.app/";
const SCREENSHOT_DIR = path.join(__dirname, "..", "screenshots");
const SCREENSHOT_PATH = path.join(SCREENSHOT_DIR, "before-submit.png");

describe("Jones Exercise — Contact Form", function () {
  let browser;
  let page;

  before(async function () {
    if (!fs.existsSync(SCREENSHOT_DIR)) {
      fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
    }
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
  });

  after(async function () {
    await browser.close();
  });

  it("fills the form, takes a screenshot, and submits", async function () {
    await page.goto(SITE_URL);
    await page.fill('[placeholder="Your full name"]', "Gome Ben Moshe");
    await page.fill(
      '[placeholder="Your email address"]',
      "gomebenmoshe@gmail.com",
    );
    await page.fill('[placeholder="Your phone number"]', "0507128550");
    await page.fill('[placeholder="Company name"]', "Ben Moshe LTD");
    await page.fill(
      '[placeholder="example.com"]',
      "https://gomeportfolio.vercel.app/",
    );

    await page.selectOption("select", "51-500");

    await page.screenshot({ path: SCREENSHOT_PATH, fullPage: true });
    console.log(`📸 Screenshot saved to: ${SCREENSHOT_PATH}`);

    await page.click('button:has-text("Request a call back")');

    await page.waitForURL("**/thank-you**", { timeout: 10000 });

    console.log(`Reached thank you page: ${page.url()}`);
  });
});
