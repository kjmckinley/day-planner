<!-- Work Day Scheduler -->

# Work Day Scheduler

This application is meant to serve as a simple day planner for the everyday user. When the user opens the application they see the current time and avalible time blocks for that time of day. the user can input information or appointments, then save the time slot into the local storage of their browser. If the user reloads the page, they should still see their saved information in the correct time-slot. 

## User Story

```
AS AN everyday human with a busy schedule
I WANT to add important and social events to a daily planner
SO THAT I can manage my time and fun effectively
```

## Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

The following animation demonstrates the application functionality:

![day planner demo](./assets/05-third-party-apis-homework-demo.gif)

## Instructions

Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

The starter code uses the [Moment.js](https://momentjs.com/) library to work with date and time, but feel free to use a different JavaScript solution to handle this functionality since Moment.js is considered a "legacy" project. Learn more about these other solutions in the [Moment.js project status page.](https://momentjs.com/docs/#/-project-status/)

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
