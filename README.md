# Mobb Fixer for GitHub - Demo
### A demo repo showing how Mobb Fixer for GitHub works

Mobb Fixer monitors your pull requests for security issues and produces accurate code fix suggestions on the spot.
\
\
\
First, [enable GitHub Actions](/../../actions) on this repo.

Then, define **FORTIFY_USER**, **FORTIFY_TENANT**, **FORTIFY_API_TOKEN** and **FORTIFY_RELEASE_ID** in the [repo's secrets page](/../../settings/secrets/actions).

Then, click below to see how automatic fixes on pull requests work:

[<img width="250" alt="Start a vulnerable pull request" src="https://app.mobb.ai/gh-action/pull-request-button.svg" />](/../../compare/main...introduce-new-security-issue)
\
\
\
This will let you start a pull request from branch `introduce-new-security-issue` to branch `main`.
\
Once the PR is created, Fortify will automatically start a security scan and report an issue.
\
Mobb Fixer will immediately run and present a fix suggestion in the PR conversation tab.

> [!TIP]
> Click ***Commit fix*** to immediately apply the fix on the pull request. Security scan will run again and flag the issue as "Fixed".

\
\
<img src="mobb-fixer-demo.gif" />
