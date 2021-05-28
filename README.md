# [Double](https://withdouble.com) · Full-stack engineering challenge

:wave: If you're looking for an adventure, [look no further](https://withdouble.com/jobs).

## Instructions

- To complete this challenge, you will need `npm`, `node` and `git` installed locally
- Solve each level in order
- Include the `.git` directory when submitting your solution
- Don't spend more than **4 hours** on this test
- To start the app:
  - run `npm i`
  - run `npm start`
  - open `http://localhost:8080/`
- If needed, here are the documentation links of: [React](https://reactjs.org/) and [Luxon](https://moment.github.io/luxon/index.html)

### Pointers

- Keep in mind that you are working on an existing code-base.
- Code should be clean, extensible and robust. Don't overlook edge cases.
- You will have to create some basic UI. While we're not expecting you to be a skilled designer, it should come close to the look and feel of the app. We _are_ looking for engineers with some product-sense.
- We like [emojis](https://gitmoji.carloscuesta.me/) :wink:

### Submitting your results

- Fork this repository
- Open a PR on your fork (please do not open a PR on this repo)
- Share your forked repo with [@pierre-elie](https://github.com/pierre-elie), [@augustinr](https://github.com/augustinr) and [@flobories](https://github.com/flobories)

We will review your code within 3 days and will be in touch via email

Let's do this! :muscle:

## Challenge

**Double helps executives and their assistants work better together**. Managing agendas is an important part of an assistant's job, and we're inviting you to join our mission of making assistants's lives easier.

### Level 1: Agenda's title bug fix

One of our users just submitted a bug report: the agenda's title ("Good morning", "Good afternoon", etc.) does not always update as the day goes by.
Identify the source of this behavior and fix it.

### Level 2: Handle errors

It seems that, occasionally, an uncatched error happens when the account is refreshed. Make sure the error is caught and that the user is aware that the refresh failed.

### Level 3: Filter agenda events by calendar

We want to add a filtering mechanism on agenda events. The requirements for this feature are:

1. Add a select menu that will filter events by `calendar`
2. When a calendar is selected, only events from that calendar are displayed
3. By default `all` calendars are displayed

### Level 4: Group agenda events by department

Another enhancement would be to show all calendar events in one page, grouping them by `department`. Here is a quick mock-up of what the feature could look like:

<img src="https://user-images.githubusercontent.com/45558407/61964225-5f967b80-af9b-11e9-9e39-b201a5644bf9.png" width="300" />

The requirements for this feature are:

1. Add a button to toggle groups by `department`
2. When enabled, events will be grouped and each group will be clearly identified
3. In each group, events will be sorted by ascending date-time

### Questions

Please add your answers to the questions below:

1. How long did you spend on this challenge?
  Spent a few hours over the course of two days
2. In your opinion, what are features that Double could work on that would be helpful for assistants when managing agendas?
  Since there were only IDs to reference the calendars, I was unsure what each
  referred to. Adding some clarifying info would be helpful.
3. If you had more time, what would you add or change in the codebase?
  I'd redo my implementation of the title update by moving it to it's own
  component so the list isn't re-rendered each time it updates. I'd also try to
  add an error boundary to deal with the intermittent account refresh error.
  Other than that I'd look to find a way to keep the components focused on
  rendering and look for ways to move most of the business logic out to their
  own modules.
4. Do you have any constructive feedback that you would like to share with our team?
  No matter the time-limit on these take-home exercises I find that I spend
  many more hours thinking about them than is asked. Which is why as a
  candidate, I'm starting to prefer in-person technical challenges.
