//Bwin Live Betting Automation

Automated tests for key Live Betting functionalities at [sports.bwin.com](https://sports.bwin.com/en/sports/live/betting) using Playwright + TypeScript.

//Features Tested

- Add pick to betslip
- Real-time live odds updates
- Sport tab sorting
- Responsive layout (desktop and mobile)

//Install Prerequisites Node.js (v18 or higher)

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

//Folder Structure

- tests/: Individual test specs
- utils/: Shared selectors and helper functions
- playwright.config.ts: Configuration for browser/devices

//Explanation of the Approach
- This automation framework uses Playwright with TypeScript to simulate user interactions and validate UI behaviors on a live sports betting website. The tests are designed with a modular structure for maintainability and reliability.

- Dynamic Element Handling: Live data such as odds and events are constantly updating. To accommodate this, the test scripts include polling logic and flexible selectors to wait for changes and interact with real-time elements.

- Selector Reuse: Common element selectors are defined in a separate utility file (selectors.ts) to ensure consistency and reduce duplication across tests.

- Viewport Responsiveness: Tests are configured to run on both desktop and mobile emulations using Playwright's built-in device emulation. This validates the responsive layout of the live betting page.

- Isolated Tests: Each test is scoped to validate a specific functionality independently (e.g., odds change detection, betslip behavior, sport sorting). This modular approach ensures test clarity and maintainability.

- Headless by Default: Tests are executed in headless mode for speed, but can be viewed in the UI mode for debugging.
