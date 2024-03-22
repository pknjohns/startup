# Date Idea Generator

This is an application that is developed for the BYU CS 260 course.

### Link to web server: [startup](dates4you.click)

## Specification Deliverable

These are the specs for my startup to deliver on 1/17/23

### Elevator Pitch

Have you and your special someone ever wanted to go on a date but not known what to do? Have you ever wished you had a tool that could help you find a date and see what's popular? The Date Idea Generator is here to help! It allows you to select a date category and see a list of possible dates to go on that will allow you to form treasured memories with your special someone. The Date Idea Generator also lets you see what dates other locals are going on so that you can see what's popular and then try it out yourself! Come use the Date Idea Generator and make your quality time better than it ever has been before.

### Key Features
- Secure login over HTTPS
- Ability to select a date category
- Ability to select a date from a date category, change the selected date if desired, and then commit to a date
- Ability to view the local activity of what dates other users have gone on and when they went on that date

### Description of how each technology will be used
- HTML: Use HTML strucutre for application such that application will be easy to use. Will have 4 HTML pages, one for login, one for picking a date, one for checking local activity, and one for learning about the application.
- CSS: Use to style the application so that it will be aesthetically pleasing, such as good usage of colors, white space, and button design. 
- JavaScript: Enable ability to press buttons and access different parts of the application.
- Web service: Save the last date a user committed to
- Athentication: Enable ability for users to create an account and log in to the application
- Database persistence: Store login information as well as the last date user committed to and the date they committed to it
- Websocket: Display the last date you committed to and when in the local activity page so others can see the name of the date and when you committed to it
- Web framework: Using React to add components and request routing


### Rough sketch

![Picture of draft startup display](pictures/spec_draft.png)

## HTML Deliverable:
- Prerequisites: I deployed the Simon HTML to my production environment, placed a link to my GitHub startup repository on my application's homepage, have filled out my README.md, and have made over 10 git commits spread consistently throughout the assignment period.
- I made 4 html files for each page of my startup
- I used the HTML tags BODY, NAV, MAIN, HEADER, and FOOTER properly
- I included links between the four HTML pages on each HTML page
- I added application textual content on the 'about' HTML page
- I added a placeholder for 3rd party service calls on the 'about' page where random dating/ uplifting quotes will be pulled from the internet each time a user navigates to the 'about' page. The table in the 'history' page will also display dating history data from other users that will update in real time.
- I added application images to the 'generator' and 'about' pages.
- I made the 'index' or homepage have a login placeholder that includes a user name display
- The application will store login information and the last date that a user has committed to and when they committed to it.
- The WebSocket data placeholder is the table in the 'history' HTML, as this is what will update in realtime to display the most recent users' most recently committed-to date and when they committed to that date.

## CSS Deliverable:

[x] - done - Prerequisite: Simon CSS deployed to your production environment

[x] - done - Prerequisite: A link to your GitHub startup repository prominently displayed on your application's home page

[x] - done - Prerequisite: Notes in your startup Git repository README.md file

[x] - done - Prerequisite: At least 10 git commits spread consistently throughout the assignment period

[x] - done - 30% Header, footer, and main content body. Used flex to layout sections.

[x] - done - 20% Navigation elements. Links highlight on hover.

[x] - done - 10% Responsive to window resizing. Looks great on iPad, desktop, and iPhone.

[x] - done - 20% Application elements. Buttons, dropdowns, and table are using bootstrap

[x] - done - 10% Application text content. I added color and decoration to some text

[x] - done - 10% Application images. I added curved edges and colored edges around my pictures.

## Javascript Deliverable:

[x] - done - Prerequisite: Simon JavaScript deployed to your production environment

[x] - done - Prerequisite: A link to your GitHub startup repository prominently displayed on your application's home page

[x] - done - Prerequisite: Notes in your startup Git repository README.md file

[x] - done - Prerequisite: At least 10 git commits made throughout the assignment period

[x] - done - 20% JavaScript support for future login. Users can login with a unique username, commit to a date, and their information will dynamically be added to the table in the local dating history page.

[x] - done - 20% JavaScript support for future database data. This is shown in how the databse saves the user's username and the last date they committed to at what date.

[x] - done - 20% JavaScript support for future WebSocket. This is shows in how the application dynamically saves a user's committed date and displays it in the table in the local dating history page.

[x] - done - 40% JavaScript support for your application's interaction logic. All buttons function as desired.

## Startup Service Deliverable

[x] - done - Prerequisite: Simon Service deployed to your production environment

[x] - done - Prerequisite: A link to your GitHub startup repository prominently displayed on your application's home page

[x] - done - Prerequisite: Notes in your startup Git repository README.md file

[x] - done - Prerequisite: At least 10 git commits made throughout the assignment period

[x] - done - 40% Create an HTTP service using Node.js and Express

[x] - done - 10% Frontend served up using Express static middleware

[x] - done - 10% Your frontend calls third party service endpoints

[x] - done - 20% Your backend provides service endpoints

[x] - done - 20% Your frontend calls your service endpoints
