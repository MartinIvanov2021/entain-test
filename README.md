Bwin Live Betting Automation

Automated tests for key Live Betting functionalities at [sports.bwin.com](https://sports.bwin.com/en/sports/live/betting) using Playwright + TypeScript.

Features Tested

- Add pick to betslip
- Real-time live odds updates
- Sport tab sorting
- Responsive layout (desktop and mobile)



1. Clone Repository
```bash
git clone https://github.com/YOUR_USERNAME/bwin-live-tests.git
cd bwin-live-tests
```

2. Install Dependencies
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


