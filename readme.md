#Inspire

This app was created four weeks into the BoiseCodeWorks Immersive Full Stack program as the second “checkpoint” test completed independently without help from teachers or aids. At this point in the curriculum, students had experience with HTML, CSS, Bootstrap, JavaScript, and Angular “controller as” syntax.

The app was initially given to students with services set up to obtain weather data, random quotes, and random background images. A basic Angular skeleton was also in place, with empty controllers students could fill with the requested functionality.

###Tasks

In this app, my job was to...

1. Render the current weather data, random quote, and random background image to the screen
2. Toggle between Fahrenheit and Celsius when the weather is clicked
3. Show the author of the quote on hover
4. Position at least one other element over the top of the background image
5. Include a todolist that allows items to be added and removed
6. The todolist must provide persistent data through the service/localStorage
7. BONUS: Render a clock to the screen that updates each minute. Allow the clock to toggle to military time. Display Good Morning, Afternoon, or Evening as appropriate. Allow the user to input their name, render it on the page, and save to local storage.

##Process highlights, things to do differently

This small project had a lot of things going on, but each piece was a relatively small and straight-forward. With the new introduction of Angular and reinforcement to keep each of my bits of functionality separate, I was able to keep my code much better organized than in previous projects. In the end, my main struggle points were with styling issues/CSS/Bootstrap.

###CSS IS AWESOME

By far my most difficult and time-consuming struggle was trying to affix my todolist in the bottom right corner of my screen. I knew how to do this with plain HTML and CSS, but it seemed Bootstrap was interfering with my usual tactics.

In the end I realized if I was going to use Bootstrap, I had to stop thinking in plain CSS terms and play by the rules of my framework. It stood to reason that Bootstrap would have some way to fix a row to the bottom of the screen. Within minutes of changing my thinking from CSS to Bootstrap, I'd figured out the classes/components I needed to get what I wanted.

Though I luckily got everything where I wanted in the end, it's clear I wasn't paying much attention to responsiveness when making this layout. While this page is meant to be viewed on a desktop, it might be a nice exercise to try to make it more mobile-friendly in the future. It might also be good to try to find a styling for the text that makes it more readable on all backgrounds, though the existence of such a thing might be wishful thinking.

###Toggling the weather

One small thing I noticed on the JavaScript side of things is that I toggled the weather from Celsius to Fahrenheit by saving what state the temperature is currently in as a one-character string, either “F” or “C”. It works, but I find this a little odd now, and might prefer instead to save the information in a boolean, perhaps “displayCelsius”, which could be toggled between true and false.

###Toggling the time

At the time I made this, I was probably not aware of the library Moment.js. It looks like I manually changed the time from military to 12 hours with plain JavaScript, but I imagine I could have used Moment.js for this with less reinvention of the wheel and potential for mistake.

###To see the original instructions for this activity, visit README2.md