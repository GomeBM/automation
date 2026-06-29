# Jones Automation Exercise

Playwright + Mocha automation test for a contact form. Fills the form, takes a screenshot before submitting, and verifies the thank-you page redirect.

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/GomeBM/automation.git
cd automation
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install Playwright browsers

```bash
npx playwright install chromium
```

### 4. Run the tests

```bash
npm test
```

A browser window will open, fill the contact form, take a screenshot, and submit. The screenshot is saved to `screenshots/before-submit.png`.
