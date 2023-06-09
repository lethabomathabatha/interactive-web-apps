## Interactive Web Apps Project Submission 17 - The Calendar App 📆

This is [IWA Submission 17](https://learn.codespace.co.za/courses/153/modules/462/lessons/1796) consisting of Challenge 1 which deals with JavaScript Loops, and this is illustrated through the calendar app.

### So what does it do?
This calendar automatically calculates the current and day, and displays the entire month in a grid. This is achieved with HTML, CSS and JavaScript.

### What are the key features?
- The current month and year are displayed above the calendar
- Each week of the month is indicated in the left most column, starting from Week 1
- The '**days**' in the '**weeks**' rows are highlighted in alternating white and grey backgrounds
- The current day is highlighted in blue
- The **weekend** cells are in a light grey font, with regular font weight


### Here's what the [JavaScript](https://github.com/lethabomathabatha/interactive-web-apps/blob/main/LETMAT077_FTO2301_GroupB_LethaboMathabatha_IWA17/challenge1.js) does:
- it utilizes the **MONTHS** array, which contains the names of all the months
- the **getDaysInMonth** function calculates the number of days in a given month
- the **createArray** function generates an array of numbers representing the days of the month
- the **createData** function creates an array of objects representing the weeks and days of the month
- it determines the starting day of the month and the number of days in the month
- it creates objects for each week and assigns day values based on the start day and days in the month
- the **addCell** function generates an HTML table cell (<td>) with the specified class and value
- the **createHtml** function generates the HTML structure of the calendar by iterating over the data
- it uses the **addCell** function to create table cells for each day, applying different classes for weekends, alternate weeks, and the current date.
- the final part of the code sets the current month and year in the page's title element and generates the calendar data and HTML, which are inserted into the content element


