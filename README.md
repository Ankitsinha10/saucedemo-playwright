# SauceDemo E2E Test Automation Framework

[![CI](https://github.com/Ankitsinha10/saucedemo-playwright/actions/workflows/playwright.yml/badge.svg)](https://github.com/Ankitsinha10/saucedemo-playwright/actions)

> Comprehensive E2E test automation framework for SauceDemo e-commerce platform using Playwright, TypeScript, and Page Object Model architecture with CI/CD integration.

## 🎯 Key Highlights

- ✅ **Page Object Model (POM)** - Maintainable and scalable architecture
- ✅ **Cross-Browser Testing** - Chrome, Firefox, Safari
- ✅ **Secure Credentials** - Environment variables with .env
- ✅ **CI/CD Pipeline** - GitHub Actions with automated test execution
- ✅ **20+ Test Scenarios** - Comprehensive coverage of critical user flows

## 🛠️ Tech Stack

- **Framework:** Playwright v1.40+
- **Language:** TypeScript
- **CI/CD:** GitHub Actions
- **Security:** dotenv for credential management

## 📁 Project Structure
```
saucedemo-playwright/
├── pages/              # Page Object Models
│   ├── LoginPage.ts
│   └── InventoryPage.ts
├── tests/              # Test Specifications
│   ├── saucedemo_login.spec.ts
│   └── saucedemo_inventory.spec.ts
├── data/               # Test Data
│   └── users.json
├── .env                # Environment Variables (gitignored)
├── playwright.config.ts
└── .github/
    └── workflows/
        └── playwright.yml
```

## 🧪 Test Coverage

### Login Module (10 tests)
- Valid/invalid credential validation
- Empty field error handling
- Locked user scenarios
- Error message verification

### Inventory & Cart Module (8 tests)
- Add items to cart
- Cart badge updates
- Navigation flows
- Product display verification

## 🚀 Getting Started

```bash
# Clone repository
git clone https://github.com/Ankitsinha10/saucedemo-playwright.git

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env and add your credentials

# Run tests
npx playwright test

# Run in headed mode
npx playwright test --headed

# View HTML report
npx playwright show-report
```

## 🔐 Security

Sensitive credentials are managed via environment variables:
- `.env` file for local development (gitignored)
- GitHub Secrets for CI/CD pipeline
- Separation of test data (JSON) from sensitive credentials

## 📊 CI/CD

Automated testing via GitHub Actions:
- Runs on every push and pull request
- Cross-browser test execution
- Automatic report generation
- Failure notifications

## 👤 Author

**Ankit Kumar Sinha**  
QA Engineer | Test Automation Specialist

- 🔗 [LinkedIn](https://linkedin.com/in/ankitsinha07)
- 🐙 [GitHub](https://github.com/Ankitsinha10)
- 📧 ankitkumarsinha05@gmail.com
- 🌐 [Portfolio](https://www.ankitkumarsinha.com)

## 📝 License

This project is for educational and portfolio purposes.

---

**Built with ❤️ using Playwright + TypeScript**
