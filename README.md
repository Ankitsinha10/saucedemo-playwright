SauceDemo Playwright Automation Suite
Automated Quality Assurance Portfolio by Ankit Kumar Sinha

📌 Project Overview
This repository showcases a robust end-to-end (E2E) testing suite for the SauceDemo application. As a QA Engineer, I designed this suite to demonstrate modern automation practices, including dry code principles, modular test organization, and comprehensive negative testing.

## 🎯 Key Highlights
- Implements **Page Object Model** for maintainability
- **Cross-browser** testing ensures compatibility
- **CI/CD ready** with GitHub Actions integration
- **Clean code** with TypeScript type safety
- **Comprehensive coverage** of critical user flows


🛠️ Tech Stack:

Framework: Playwright (latest)
Language: JavaScript (ES6+)
Test Runner: Playwright Test
Reporting: Playwright HTML Reporter

🧪 Scenarios Automated

🟢 Positive Scenarios

Logo Verification: Ensuring brand consistency across the landing page.
Authentication Flow: End-to-end validation of the "Standard User" login journey and redirection to the product dashboard.

🔴 Negative Scenarios (Error Handling)

Empty Field Validation: Verifying system behavior when both credentials are missing.
Missing Password: Ensuring "Password is required" triggers correctly.
Missing Username: Ensuring "Username is required" triggers correctly.
Invalid Credentials: Validating the system correctly rejects unrecognized users with appropriate security messaging.

🚀 Getting Started:

Prerequisites:

Node.js (v16 or higher)
NPM (comes with Node)

Installation:

Clone the repository:

Bash
git clone https://github.com/YOUR_USERNAME/your-repo-name.git

Navigate to the project directory:

Bash
cd your-repo-name

Install dependencies:

Bash:

npm install
Running Tests
Run all tests in headless mode:

Bash

npx playwright test
Run tests in UI Mode (Recommended for debugging):

Bash

npx playwright test --ui
View HTML Report:

Bash

npx playwright show-report


## 📊 Test Results

All tests run across 3 browsers:
- Chromium ✅
- Firefox ✅
- WebKit ✅

## 👤 Author

Ankit Kumar Sinha - 
GitHuB: https://github.com/Ankitsinha10)
Website: www.ankitkumarsinha.com
LinkedIn: https://www.linkedin.com/in/ankitsinha07/

## 📝 License

This project is for educational purposes.
