# QuadPay Front End Engineer Assignment

Welcome to the front end engineer assignment for QuadPay!  We're excited for you to apply and potentially join our amazing team.  This sample project reflects some of the tools, practices, and real-world challenges we face in our own development with QuadPay.  Please read below for instructions on what you need to complete and how to submit it.  Checkout our real checkout (get it?) by starting an order on <https://fashionnova.com>!

## 0. Project Setup

Before we start building anything, let's make sure we can run the sample application.

1. Install node/npm from <https://www.npmjs.com/get-npm>.  You must have node 8.10.0 or newer (newer major versions are fine).
2. Install the vue CLI `npm install -g typescript @vue/cli`
3. Install dependencies from root of repo directory with `npm install`
4. Run the project with `npm run serve` which will launch the application and watch for any changes to update the page with Hot Module Replacement (HMR)
5. Start the application by visiting <https://localhost:8080/>.  See below how to initialize the checkout cookie.

There are a number of other npm scripts you can use:

- Make a minified production build: `npm run build`
- Run all the tests: `npm run test`
- Run unit tests: `npm run test:unit`
- Run e2e tests: `npm run test:e2e`
- Run and try to fix any lint errors: `npm run lint`

## 1. The Assignment

The application you are running is mini-checkout written in VueJS utilizing the Vuetify component framework.  The application has been built to work for an existing user (credentials are `5551234567`/`quadpay`).  As the existing user, you can login, select your payment source, and confirm your order.  Your assignment is to build out the user experience for a new user.  You'll want to allow that new user to create an account, edit their information, add payment sources, and then confirm the order.  There are few `TODO`s littered throughout the application to help you get started.  *Hint: We started to add a couple of unit tests, but we'd really love to see more of them!*

One important challenge to consider is the idea of eventual consistency.  In the `src/services/api.js` file, you'll see a mock service API.  Our real platform has a lot of asynchronous processing as part of it's event-sourced, domain-driven-designed implementation.  In order to emulate that, please use the mock service API as-is.  Meaning, you should still call the API to add a customer, but you should not expect that customer to be retrievable through the API.  Please play along and act as if this a real API that processes requests asynchronously.

One other important note -- the architecture and design of this application has room for improvement on purpose.  Feel free to refactor components, styling, or anything else that you believe will make this a better codebase!  Similarly, if there are other libraries or tools that you feel are important to include, please go ahead.  At QuadPay, we expect our engineers to go above and beyond and take pride in their work.

**We expect you to spend no more than an hour (two at most) on this section.**

## 2. Bonus

In a real application, there's a bunch of other work we'd have to do to make this production ready.  We're not expecting you to implement all of these.  Truthfully, anything on this list is optional.  However, we'd love to see you flex your wings as a front end engineer and consider building out one or two of these.  Between this and the main assignment, we really don't want you spending more than 2-3 hours building this.

If you have another idea of what you could build, please feel free to build it!  We'll just ask you to tell us more about it in the next section.  Here's a list of improvements that could be made:

- Improve bundle sizes
- Convert to TypeScript
- Stronger unit test coverage with Jest
- Build a full end-to-end test with Cypress
- IE11 support
- Add application-level error handling
- Institute a way for a user to leave the site and comeback and retain their session
- Add authentication guards so user's can't access unauthorized pages if they haven't logged in
- Show off your design and UX skills! (create an installment schedule, page transitions, button/loading animations, merchant name customizations, input masks, etc.)
- Add a google places autocomplete widget for addresse collection
- Build a CI/CD pipeline and show this hosted somewhere (<https://render.com> as free static site hosting)
- Clean up any technical debt that you find
- Improve this documentation

## 3. Questions

*Note: Some of these questions could pertain to any of the bonus work you did above.  Feel free to reference your implementation if so.*

As part of completing this assignment, we'd like for you to fill in answers to the questions below.

**Q: If this application was integration with a real API, what changes would you make so that we could build and deploy it to multiple environments and ensure we make API calls to the correct API environment?**

A:

**Q: Can you explain what scoped styles are?**

A:

**Q: What would you do to improve the style management within this app?**

A:

**Q: QuadPay's customer traffic is predominantly over mobile devices.  What are some things you might do to improve performance for our mobile customers?**

A:

**Q: VueX (Vue's state management library) relies heavily on strings for committing mutations/dispatching actions.  How might you improve on the implemenation used in this app?**

A:

**Q: Please describe some steps you'd take to improve the application's error handling.**

A:

## 4. Space for You

This section is reserved for you to add any other documentation/details you think is important for us to know about.

## 5. Submit Your Assignment

Please zip up your project directory and email it to QuadPay's hiring resource you've been working with.  Please remember to exclude `node_modules` from the zip folder.  Feel free to also upload it to Google drive and just share a link.  Please don't create a new branch/pull request with your work!

Thanks for taking the time to apply and we look forward to talking with you soon!

## 6. Links

- [Vue](<https://vuejs.org/>) - The underlying SPA framework.
- [Vuetify](<https://vuetifyjs.com/en/>) - Component framework based on Material Design.
- [Vue Router](<https://router.vuejs.org/>) - Page routing for Vue.
- [Vuex](<https://vuex.vuejs.org/>) - State management for vue.
- [Jest](<https://jestjs.io/docs/en/cli>) - Unit test runner
- [Cypress](<https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell>) - E2E test runner
- [Vue CLI Configuration](<https://cli.vuejs.org/config/>) - Vue CLI configuration guide
- [Vue Cookbook](<https://vuejs.org/v2/cookbook/>) - Advanced Vue strategies
- [Vue Test Utils](<https://vue-test-utils.vuejs.org/>) - Library used to support unit testing Vue apps
- [Vue Testing Handbook](<https://lmiller1990.github.io/vue-testing-handbook/>) - Best practices for unit testing Vue applications
