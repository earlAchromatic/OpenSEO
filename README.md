# Welcome to OpenSEO.

![](./open-logo.png)

The goal of OpenSEO is to create simple tooling that helps developers and content creators alike rapidly and effectively audit the boring stuff (technical and non-technical seo params) so that they can get about their day doing the creative work.

The implementation is a downloadable run by `npx openseo init` that sets up the front end and runs a server that looks in a specified `_dist` folder for your site files to audit. It generates reports using a number of MICO and other tooling:

1. keywordGrabber (a part of RECON codebase)
2. Auditron cloud server (lighthouse multi-page auditor)
3. seo-lint (by @nickreese) though I may fork this and modify how it works a bit

This gives the user a well-rounded peak into the machinery of their site - the keywords and frequencies of usage, the performance of the site as a whole, and the technical gotcha's that tend to pile up behind the scenes.

The dev-augment UI (local server) will let you easily view all of these results, re-run tests, choose which checks for your specific build process and eventually I would like to implement automations to correct specific issues (fairly simple with the seo-lint issues, have to crawl the source which could be of varying template langs).

## Action Plan

1. Build out basic splash screen UI
2. Build out CLI downloader and init scripts
3. Build out data viewer for seo-linting only
4. At this point, need to deploy Auditron Cloud and publish KeywordGrabber Lib
   1. unless locally running the lighthouse tests...
5. Then can add data views for these sources.
6. then implement fix automations

## CLI design

Init script executes as follows:

1. downloads entire package and deps
2. builds front end and server
3. runs server to deploy FE on localhost
4. runs initial audits of `_dist` to build initial audit folder with some data. Specify a flag if user wants to defer initial audit for some reason (maybe nothing is built yet and they are just dl all their packages)
5. server awaits commands for further audits
