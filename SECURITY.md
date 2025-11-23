# Security Policy

We take the security of our project very seriously. We appreciate the
community's efforts to help us secure our applications and users.

## Supported Versions

Only the following versions are currently supported with security updates:

| Version | Supported          |
|---------|--------------------|
| 1.x     | :white_check_mark: |

If you are using an unsupported version, we strongly recommend upgrading to the
latest available version.

## Reporting a Vulnerability

If you believe you have found a security vulnerability in this project, please
report it to us responsibly. **Please do not publicly disclose the vulnerability
until it has been addressed.**

### Reporting Process

In your report, please include:

* The type of vulnerability (e.g., SQL Injection, XSS, RCE).
* Full steps to reproduce the issue (PoC - Proof of Concept).
* The affected software version.
* The potential impact of the vulnerability.

### Our Commitment

* We will acknowledge receipt of your report within **48 hours**.
* We will keep you informed of the progress towards a fix.
* We will notify you when the patch is released.
* If you wish, we will credit your discovery in the release notes.

## Best Practices for Contributors

If you contribute code, please adhere to the following standards:

* Never commit secrets (API keys, passwords) to the repository.
* Use `yarn audit` to check for vulnerabilities in Node.js dependencies.
* Ensure to follow OWASP recommendations.

Thank you for helping keep this project safe for everyone!
