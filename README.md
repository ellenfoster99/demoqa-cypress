# Demoqa Cypress

> A learning project for automated E2E testing of the DemoQA website using Cypress and Allure Report.

## About the Project

[Demoqa](https://demoqa.com/) is a demonstration website designed for learning and practicing test automation.

In this project, Demoqa is used as a test application for practicing **E2E testing with Cypress**.

---

# Installation

## Prerequisites

Before installing the project, make sure the following tools are installed:

* Node.js
* Git
* Java JDK
* Allure Commandline

### Check Node.js

node -v
```

npm -v
```

This project uses Node.js `24.13.1`.

---

## 1. Clone the Repository

Clone the repository:

git clone https://github.com/ellenfoster99/demoqa-cypress.git
```

Navigate to the project directory:

cd demoqa-cypress
```

---

## 2. Install Dependencies

Install the project dependencies:

npm install
```

---

# Java Setup

Java is required to run **Allure Commandline**.

This project uses **Eclipse Temurin / OpenJDK 25**.

Check the Java installation:

java -version
```

Example Java installation path:

C:\Program Files\Eclipse Adoptium\jdk-25.0.4.101-hotspot
```

## Configure `JAVA_HOME`

Create a system environment variable:

JAVA_HOME
```

Set its value to the Java installation path:

C:\Program Files\Eclipse Adoptium\jdk-25.0.4.101-hotspot
```

### Add a directory to `Path`

1. Open **Windows Search** and type `environment variables`.
2. Select **Edit the system environment variables**.
3. In the **System Properties** window, click **Environment Variables...**.
4. Under **System variables**, select **Path** and click **Edit**.
5. Click **New** and add the required directory.

For Java:

%JAVA_HOME%\bin
```

For Allure:

C:\HTML\allure-2.46.1\bin
```

6. Click **OK** to save all changes.
7. Open a **new terminal** for the changes to take effect.

---

# Allure Report

The project uses:

@mmisty/cypress-allure-adapter
```

to integrate Cypress with Allure Report.

After running Cypress:

npx cypress run
```

the test results are generated in:

allure-results
```

Generate the Allure HTML report with:

allure generate allure-results --clean -o allure-report
```

Open the generated report with:

allure open allure-report
```

---

# Allure Commandline Installation

This project uses **Allure Commandline 2.46.1**.

After downloading Allure, extract it, for example, to:

C:\HTML\allure-2.46.1
```

Add the following directory to the system `Path` variable:

C:\HTML\allure-2.46.1\bin
```

After changing the environment variables, open a **new Terminal**.

Check the Allure installation:

allure --version
```

Expected output:

2.46.1
```

---

# Using

## Run Cypress in Interactive Mode

npx cypress open
```

Select **E2E Testing** and choose the required test.

## Run Tests in Headless Mode

npx cypress run
```

## Generate Allure Report

allure generate allure-results --clean -o allure-report
```

## Open Allure Report

```bash
allure open allure-report
```

---

# Contributing

This is a learning project and will be gradually expanded with additional E2E tests.

To add a new test:

1. Create or modify a spec file in `cypress/e2e/`.
2. Run the test using Cypress.
3. Check the test results.
4. Generate a new Allure Report if needed.
5. Commit the changes.
6. Push the changes to GitHub.

Main commands:

npx cypress open
```

npx cypress run
```

allure generate allure-results --clean -o allure-report
```

allure open allure-report
```

---

# License

This project was created for educational purposes.
