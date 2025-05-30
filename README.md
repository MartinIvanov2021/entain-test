Bwin Live Betting Automation

Automated tests for key Live Betting functionalities at [sports.bwin.com](https://sports.bwin.com/en/sports/live/betting) using Playwright + TypeScript.

Features Tested

- Add pick to betslip
- Real-time live odds updates
- Sport tab sorting
- Responsive layout (desktop and mobile)

Install Prerequisites Node.js (v18 or higher)

1. Clone Repository
git clone https://github.com/MartinIvanov2021/entain-test.git
cd entain-test

2. Install Dependencies and Playwrright browser
npm install
npx playwright install

Running Tests

All tests (desktop + mobile)
npm test


With UI viewer
npm run test:ui

Specific test
npx playwright test tests/add-pick-to-betslip.spec.ts

Folder Structure

- tests/: Individual test specs
- utils/: Shared selectors and helper functions
- playwright.config.ts: Configuration for browser/devices


