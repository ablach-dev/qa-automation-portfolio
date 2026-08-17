# Playwright QA Automation Portfolio

A test automation framework built with **Playwright**, **TypeScript**, and **GitHub Actions**. This portfolio demonstrates scalable test architecture, modular Page Object Models (POM), and automated CI/CD execution across multiple testing layers.

---

## Tech Stack & Architecture

- **Language:** TypeScript
- **Framework:** Playwright Test
- **Design Pattern:** Page Object Model (POM)
- **CI/CD:** GitHub Actions (Automated test runs and artifact reporting)

---

## Project Structure

```text
├── .github/workflows/     # CI/CD pipeline definitions
├── pages/                 # Page Object Models (Encapsulated locators and actions)
├── tests/                 # Automated test suites (E2E, Smoke, API, Functional)
├── test-data/             # Test data, payloads, and environment configs
├── playwright.config.ts   # Global Playwright configuration
└── package.json