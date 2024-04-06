[Link to cs260 webpage](https://learn.cs260.click/)

# GitHub

- GitHub is a valuable tool all developers use to track changes to code and have access to version history of their files
- it also keeps their code safe from being lost due to a computer dying

- there are 4 things you should always get in the habit of when working with code:
1) Verify you have the latest code (git pull)
2) Refactor, test, and/or implement a small portion of cohesive code (test, code, test)
3) Commit and push (git commit, git push)
4) Repeat

### Git commands in command prompt:
- git init : initialize a directory as a git repo
- git status : tells you what Git is doing
- git add . : tells Git to start tracking everything it doesn't know about
- git commit : commits current file version to git repo (add -m to end of command to include a commit message) (add -am to end of command to tell git to add all modified tracked files to commit w/out having to git add them again)
- git checkout : lets you "checkout" an older version of your file to see what it looks like. Add 'master' at the end to get back tot the top of ther version chain (file version tracked by SHA hashing algorithm)
- git diff : compares difference between 2 versions of file
- git branch : create a branch of OG code where you can modify code without affecting the main branch
- git clone : updateable clone of Github repo

# DNS - Domain Name System
- DOM = Document Object Model
- HTTPS - Secure Hypertext Transport Protocol

# Startup ideas

- add ability to upload your own custom date ideas into a category so that other users can select them
- add functionality to track how many times a date has been committed to by other users so that users can see what's trending easily
- add functionality to message other users and ask them about their most recent date

# Markdown

- learned when doing the startup spec deliverable that you can't have white spaces in the names of your files because markdown will read it wrong when trying to import the file
- So, never have white spaces in file names
- Helpful link for learning markdown syntax: [GitHub markdown documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

# Git Bash/ Terminal

- use Git Bash for everthing in this class because it is POSIX compliant
- use Git Bash to SSH into my web server
- DON'T restart/ update/ upgrade when in the middle of editting the web server files
- When changing directories, put "" around the path so the terminal reads it right
- don't put brackets around the key file name when ssh-ing into the web server
- don't have to change directory to the one where the key file is. if you don't do it, then just make sure to include the entire path to the key file from the directory you are currently in
- use the 'cat' command in terminal to view the contents of a document
- use 'vi' to modify the file, then press 'i' to edit the document
- to save and exit a file, press 'Esc' and then type ':wq'
- to turn off ubuntu/ end its connection with my server, type 'sudo poweroff'

### Useful console commands

- echo - Output the parameters of the command
- cd - Change directory
- mkdir - Make directory
- rmdir - Remove directory
- rm - Remove file(s)
- mv - Move file(s)
- cp - Copy files
- ls - List files
- curl - Command line client URL browser
- grep - Regular expression search
- find - Find files
- top - View running processes with CPU and memory usage
- df - View disk statistics
- cat - Output the contents of a file
- less - Interactively output the contents of a file
- wc - Count the words in a file
- ps - View the currently running processes
- kill - Kill a currently running process
- sudo - Execute a command as a super user (admin)
- ssh - Create a secure shell on a remote computer
- scp - Securely copy files to a remote computer
- history - Show the history of commands
- ping - Check if a website is up
- tracert - Trace the connections to a website
- dig - Show the DNS information for a domain
- whois - get info about a domain name frmo the domain name registry
- man - Look up a command in the manual
- printf - print string to the console
- CTRL-R - Use type ahead to find previous commands
- CTRL-C - Kill the currently running command
- chmod - 'change mode', used to change permissions (read, write, execute) of files and directories

You can also chain the input and output of commands using special characters

- | - Take the output from the command on the left and pipe, or pass, it to the command on the right
- '>' - Redirect output to a file. Overwrites the file if it exists
- '>>' - Redirect output to a file. Appends if the file exists

# VI

- powerful terminal tool for editing files

### Useful commands:

- vi [filename] - open file with name 'filename' in VI
- :h - help
- i	- enter insert mode. This will allow you to type and delete text. Use ESC to exit insert mode. No other commands will work while in insert mode.
- u	- undo
- CTRL-r- redo
- gg - go to beginning of file
- G	- go to end of file
- /	- search for text that you type after /
- n	- next search match
- N	- previous search match
- v	- visually select text
- y -	yank or copy selected text to clipboard
- p -	paste clipboard
- CTRL-wv -	Split window vertically
- CTRL-ww	- Toggle windows
- CTRL-wq	- Close current window
- :e - Open a file. Type ahead available. If you open a directory you can navigate it in the window
- :w - write file (save)
- :q - quit. Use :q! to exit without saving

- Helpful link for learning VM commands: [VM Vheat sheet](https://vim.rtorr.com/)

# HTML

- footer will be the same for all pages: include link to github repository and author name
- when you are using the Chrome debugging tools to edit your html file, remember that those changes won't be reflected or saved in your actual html file, so if there is anything crucial that you actually need to change then you need to do it in the source code in VS
- HTML elements are represented with enclosing tags that may enclose other elements or text. For example, the paragraph element, and its associated tag (p), designate that the text is a structural paragraph of text. When we talk about tags we are referring to a delimited textual name that we use to designate the start and end of an HTML element as it appears in an HTML document. Tags are delimited with the less than (<) and greater than (>) symbols. A closing tag will also have a forward slash (/) before its name

- always have index.html be the main homepage for your website, as this is what the web browser will load first
- Always have a header, main, and footer elements in each html file
    - main is where you put all the main content of the page
- for elements that interact with websocket, it's useful to add an id to the element so that when you implement Javascript and websocket, the id will help the websocket/ Javascript know which element to interact with and dynamically update/ modify
- div elements can help with organization of page and elements within the main element

- HTML elements are represented w/enclosed tags (see Useful HTML Elements below)
- each element can have attributes (id, class, etc). Can delimit attribute values using ' or "

### Useful HTML Elements
- html - The page container
- head - Header information
- title - Title of the page
- meta - Metadata for the page such as character set or viewport settings
- script - JavaScript reference. Either a external reference, or inline
- include -	External content reference
- body - The entire content body of the page
- header - Header of the main content
- footer - Footer of the main content
- nav - Navigational inputs
- main - Main content of the page
- section -	A section of the main content
- aside -	Aside content from the main content
- div -	A block division of content
- span - An inline span of content
- h<1-9> - Text heading. From h1, the highest level, down to h9, the lowest level
- p -	A paragraph of text
- b	- Bring attention
- table -	Table
- tr - Table row
- th - Table header
- td - Table data
- ol,ul -	Ordered or unordered list
- li - List item
- a - Anchor the text to a hyperlink (use href, not src to set link)
- img -	Graphical image reference, use src= to access picture and alt= to describe image
- dialog - Interactive component such as a confirmation
- form - A collection of user input
- input -	User input field
- audio -	Audio content
- video -	Video content
- svg -	Scalable vector graphic content
- iframe - Inline frame of another HTML page

- You can include comments in your HTML files by using this syntxa: <!-- write comment here -->. Any text within a comment block will be completely ignored when the browser renders it.

### Adding Special Characters in HTML: [HTML Intro](https://learn.cs260.click/page/html/introduction/introduction_md)

### HTML Input elements:

<img src = https://github.com/pknjohns/startup/assets/137959114/af2ca472-5a6d-42db-9aed-d1a503fec369>

### HTML input element types:

<img src = https://github.com/pknjohns/startup/assets/137959114/d3c1ae83-d899-473e-a6b8-1151944013ce>


- In order to create an input you specify the desired type attribute along with any other attribute associated with that specific input. Here is an example of a checked radio button and its associated label:

`<label for="checkbox1">Check me</label> <input type="checkbox" name="varCheckbox" value="checkbox1" checked />`

<img src = https://github.com/pknjohns/startup/assets/137959114/290d830e-d724-448f-85e0-911c63d62375>


# CSS

3 ways to associate CSS with HTML:
1) add style attribute to HTML element
2) use style element in head element of document to define CSS rules w/in HTML file
3) use the link method to create a hyperlink reference to an external file containing CSS rules

 <img src = https://github.com/pknjohns/startup/assets/137959114/488fc14f-65cc-4cf9-b522-fd0529ece661>

### CSS Selectors
- How you actually select which HTML elements the CSS rules apply to
- format = element {CSS rules}
- Descendants = all elements nested w/in an element
- Children = immediate elements (one level below) nested in parent/ main element
- Siblings: elements that share the same parent & are at the same lvl of hierarchy
    - general siblings are all sibling elements that follow a specificed element, regardless of position/order
    - adjacent siblings are siblings that immediately follow each other

- Combinators:
    - descendant: element1 element2 {}
    - child: element > child
    - general sibling: element ~ sibling
    - adjacent sibling: element + sibling

- `#` is for id (id selector)
- `.` to access class within an element (class selector)
- For attribute selector, put: `element[attribute]`
- for pseudo (positional, mouse, attributes, etc) selector: `element:thing`

### CSS Declarations:

<img src = https://github.com/pknjohns/startup/assets/137959114/c8b3c7c8-9ad8-4202-9e9a-f0eff158ce84>


<img src = https://github.com/pknjohns/startup/assets/137959114/2d08cf50-8bc7-430d-8bcc-277d98e65e3d>


### Units:
<img src = https://github.com/pknjohns/startup/assets/137959114/fcf3c32f-e696-44e6-9612-52316f93b47e>

### Animation:
- in declaration, add `animation-name` and `animation-duration` features, then create an `@keyframes animation-name` delcaration containing the sequence of what happens when

### Responsive design:

<img src = https://github.com/pknjohns/startup/assets/137959114/0765ba9a-474f-4594-9ad2-7c4280aac475>

- Set responsive design by saying `class = desired responsive design`
- Media queries:
<img src = https://github.com/pknjohns/startup/assets/137959114/fa2f0945-7f43-4cfd-a6a2-be927bee053b>

# Javascript

- to add javascript to html, you can either put the javascript directly into the html using a <script> element or by using the `src` attribute of the script element

<img src = https://github.com/pknjohns/startup/assets/137959114/e7579cb1-8c2a-4272-ab6c-dcba4b105c76>

### Arrow function:
- special type of function that replaces need for `function` keyword

### Arrays:
<img src = https://github.com/pknjohns/startup/assets/137959114/326442f6-1407-4230-bc60-1f9d3a824a72>

### JSON:
- JavaScript Object Notation
- good for sharing & storing data
- easily convertible to and from JavaScript objects
- contains following data types: string, number, boolean, array, object, or null
    - can't reperesent the undefined object
- use colon to define objects, not '='
- for json, use {"name":"value"}
- Most commonly, a JSON document contains an object. Objects contain zero or more key value pairs. The key is always a string, and the value must be one of the valid JSON data types. Key value pairs are delimited with commas. Curly braces delimit an object, square brackets and commas delimit arrays, and strings are always delimited with double quotes
- convert object to JSON using JSON.stringify
- convert JSON to obect using JSON.parse
- only supports double quotes `""`

### Objects & Classes
- collection of name-value pairs called properties
- the poperty name must be a string or symbol
- to create object: `const obj - new Object({name: value}`
    - you can also declare a variable of object time w/ the object-literal syntax: `const obj = {name: value, name1: value1}`
- once the object is declared, you can add new poperties by: `obj.newName = newValue;` or `obj['newName'] = newValue;`
    - this also works with assigning functions to an object
- Useful object functions:

<img src = https://github.com/pknjohns/startup/assets/137959114/012b7e8d-3454-45a5-9b33-d7d4fab57c8b>

- any function that returns an object is considered a constructor and can be invoked with the `new` operator

<img src = https://github.com/pknjohns/startup/assets/137959114/3f64559d-0f06-402f-a8f8-cb663b529b02>

<img src = https://github.com/pknjohns/startup/assets/137959114/80b3d2e0-2f59-4a75-a02f-23dd9d7266a7>

<img src = https://github.com/pknjohns/startup/assets/137959114/a81cb036-6ec2-4db4-92ab-0e817899f4cf>

### Regular Expressions
<img src = https://github.com/pknjohns/startup/assets/137959114/338d105c-b8b1-4b9c-82c6-6cb26fa3e19b>

### Rest and Spread
- allows you to create a function that takes any unknown number of parameters
- to define a rest parameter, just add `...` in front of the last parameter in your function declaration
- Spread does the opposite(splits apart an iterable object for each of the functions parameters. Do this by adding `...` in front of the single object you're inputting into the function w/ multiple parameters

### Exceptions
`try {
    // normal execution code
} catch (err) {
    // exception handling code
} finally {
    // always called code
}`

- can use fallbakcs to make sure you always return something (it's the backup code that you'll run in the catch sequence if the try block fails

### Destructuring
- a way to copy individual items out of existing ones and assign them to new variables
- Syntax: `const [b,c] = a;`, where a is an array and b and c are the new variables

### Scope
- Understanding JavaScript scope is essential for making your programs run as you expect. Scope is defined as the variables that are visible in the current context of execution. JavaScript has four different types of scope:
    - Global: Visible to all code
    - Module: Visible to all code running in a module
    - Function: Visible within a function
    - Block: Visible within a block of code delimited by curly braces

### Document Object Model (DOM)
- object representation of the HTML elements that the browser uses to render the display. The browser also exposes the DOM to external code so that you can write programs that dynamically manipulate the HTML.
- The browser provides access to the DOM through a global variable name document that points to the root element of the DOM.

<img src = https://github.com/pknjohns/startup/assets/137959114/f573d2a1-f0f7-4d62-963b-9e7564a46773>

### Promises
- used for performing asynchronous functions that take a long time so that background code can run while the current code is still processing
- has two parameters: `resolve` and `reject`
- has 3 functions: `then` (called if promise is fulfilled),`catch` (called if promise is rejected), and `finally` (always called after all processing is completed).

### Async/ await
- async/await puts all the code after it in a `.then` box
    - async functions have to return a promise
- can only await on an async func

# Web Services

<img src = https://github.com/pknjohns/startup/assets/137959114/89ea0b78-efb5-4732-adb6-4bea1b2cc351>

- There are several different flavors of DNS database records that facilitate the mapping of domain names to IP addresses:
    - address (`A`): straight mapping from domain name to IP address
    - canonical name (`CNAME`): maps one domain name to another domain name, like a domain name alias

 ### URL
- Uniform Resource Locator (URL): location of a web resource, which can be anything
- only parts of URL that are required are the scheme and domain name
- Syntax: `<scheme>://<domain name>:<port>/<path>?<parameters>#<anchor>`

<img src=https://github.com/pknjohns/startup/assets/137959114/55380ef3-58a9-459f-a700-984d98f0632f>

- Uniform Resource Name (URN) - nuique resource name that doesn't specify location info
- Unifirm Resource Identifier (URI) - general resrouce identifier that could refer to either a URL or a URN

### Ports
<img src=https://github.com/pknjohns/startup/assets/137959114/e833a786-e19b-4d05-8215-d752a3be70d9>
- each web serivce needs to have its on port to communicate on

### HTTP
- When a web browser makes a request to a web server it does it using the HTTP protocol.
- When a web client (e.g. a web browser) and a web server talk they exchange HTTP requests and responses. The browser will make an HTTP request and the server will generate an HTTP response. You can see the HTTP exchange by using the browser's debugger or by using a console tool like `curl`.

##### Request

<img src=https://github.com/pknjohns/startup/assets/137959114/bced0ddb-7627-477a-bd1a-e4be3d6dc2ca>

##### Response

<img src=https://github.com/pknjohns/startup/assets/137959114/2eb079f2-579d-4231-864d-09e04e62f923>

##### Verbs

<img src=https://github.com/pknjohns/startup/assets/137959114/ef04feff-20b9-4345-87a7-99915eee1402>

##### Status codes
- 1xx - Informational.
- 2xx - Success.
- 3xx - Redirect to some other location, or that the previously cached resource is still valid.
- 4xx - Client errors. The request is invalid.
- 5xx - Server errors. The request cannot be satisfied due to an error on the server

<img src=https://github.com/pknjohns/startup/assets/137959114/694bb45f-dfd0-43b6-a189-8054a0b98f3c>

##### Headers

<img src=https://github.com/pknjohns/startup/assets/137959114/eadd2deb-d96d-4f2f-ba92-6e449a97d1fe>

##### Body
- The format of the body of an HTTP request or response is defined by the `Content-Type` header. For example, it may be HTML text (text/html), a binary image format (image/png), JSON (application/json), or JavaScript (text/javascript). A client may specify what formats it accepts using the `accept` header.

##### Cookies
- allows servers to remember things

##### Fetch
- The basic usage of fetch takes a URL and returns a promise. The promise then function takes a callback function that is asynchronously called when the requested URL content is obtained. If the returned content is of type application/json you can use the json function on the response object to convert it to a JavaScript object.

##### Node.js
- Can use Node (Node.js) to run Javascript from basically anywhere outside of a browser (like in the console)
- use `node -v` to see currrent version of Node isntalled on computer
- use `node -e [javascript code]` to execute javascript code in terminal
- use `node [javascript file]` to execute javascript file in terminal
- use `node` to open an interpretive mode in terminal

- can install preexisting Javascript packages frmo NPM (Node Pacakge Manager, installed when Node.js was installed) for implementing common tasks
    - to do this, initialze code to use NPM by running `npm init` in your project directory
    - then use `npm install [package name]` to install the package in yor directory (look up packages on NPM website)
    - to uninstall a package use `npm uninstall [package name]`
- when you install package dependencies, NPM creates a `package-lock.json` file and a `node_modules` directory, both in your project directory
    -    The `package-lock.json` file tracks the version of the package that you installed.
    - should include the `node_modules` directory in `.gitignore` since it is very large and would take forever to open
    - When you clone your source code from GitHub to a new location, the first thing you should do is run `npm install` in the project directory. This will cause NPM to download all of the previously installed packages and recreate the `node_modules` directory
- Main steps:
    - Create your project directory
    - Initialize it for use with NPM by running `npm init -y`
    - Make sure `.gitignore` file contains `node_modules`
    - Install any desired packages with `npm install <package name here>`
    - Add `require('<package name here>')` to your application's JavaScript
    - Use the code the package provides in your JavaScript
    - Run your code with `node index.js`
 
##### Express
- install using `npm install express`
- Create Express aplication by calling the express constructor to create the Express application and listen fro HTTP requests on a desired port
- The order you add your middleware to Express is the order that they will be called in.

- to debug Node/ Express with VS code, you have to put the breakpoints in the index.js file; you can't put them anywhere else in your other files

### SOP and CORS
- SOP = Same Origin Policy
    - only allows JavaScript to make requrests to a domain if it is the same domain that the user is currently viewing
    - creates issues with services that any web application can use, which led to Cross Origin Resource Sharing (CORS)
- CORS
    - allows client to specifiy origin of request and let the server respond with what origins are allowed
    - for our service, need to test all 3rd party services to make sure they return an `Acces-Control-Allow-Origin` header with the value of `*` (meaning any origin can make requrests to the service)

### Service Design
- leverage HTTP to access services that already implement the functionality you need rather than implementing it yourself
- service endpoints = Application Programming Interface (API)

##### RPC
- Remote Procedure Calls (RPC)
- expose service endpoitns as simple function calls
- leverages POST HTTP verb
- Advantage: maps directly to function calls that might exist within the server
- Disadvantage: directly exposes inner workings of the service, creating a coupling between endpoints & implementation

##### REST
- Representational State Transfer
- always acts upon a resource
- operations on resource impact the state of the reseource as it is transferred by a REST endpoint call
- allows for caching functionality of HTTP to work optimally
- can use to maximize HTTP
    - makes it easy for HTTP infrastructure (liek caching) to work properly

##### GraphQL
- focuses on manipulation of data instead of a function call (RPC) or a resource (REST)
- query that specifies the desired data and how it should be joined/ filtered
- removes a lot of the logic for parsing endpoints and mapping requests to specific resources -> there is only one endpoint; the query endpoint
- Disadvantage: client now has significant power to consume resources on the server
    - no clear boundary on what, how much, or how complicated the aggregation of data is
    - difficult for server to implement authorization rights to data bc have to be baked into data schema
- there are standards for how to define a complex schema through common GraphQL packages

### Uploading files
- You should take serious thought about where you store your files. Putting files on your server is not a very good production level solution for the following reasons.

1. You only have so much available space. Your server only has 8 GB by default. Once you use up all your space then your server will fail to operate correctly and you may need to rebuild your server.
2. In a production system, servers are transient and are often replaced as new versions are released, or capacity requirements change. That means you will lose any state that you store on your server.
3. The server storage is not usually backed up. If the server fails for any reason, you will lose your customer's data. YOU MUST ALWAYS ASSUME YOUR SERVER WILL DISAPPEAR
4. If you have multiple application servers then you can't assume that the server you uploaded the data to is going to be the one you request a download from.

- Instead you want to use a dedicated storage service that has durability guarantees, is not tied to your compute capacity, and can be accessed by multiple application servers.

### Storage Services
- There are many such solutions out there, but one of the most popular ones is AWS S3. S3 provides the following advantages:

1. It has unlimited capacity
2. You only pay for the storage that you use
3. It is optimized for global access
4. It keeps multiple redundant copies of every file
5. You can version the files
6. It is performant
7. It supports metadata tags
8. You can make your files publicly available directly from S3
9. You can keep your files private and only accessible to your application

### Data Services
- use MongoDB: increases developer productivity by using JSON objects as core data model
    - a database made up of one or more collections, each containing JSON documents
    - collection = large array of JSON objects, each w/ a unique ID
    - has no strict shcema requirements: each document in collection usually follows a similar schema, but each doc can have specialized fields and/or be missing common fields
    - install using `npm install mongodb`
    - use `MongoClient` object to make a client connection to the database server:

```
const { MongoClient } = require('mongodb');

const userName = 'holowaychuk';
const password = 'express';
const hostname = 'mongodb.com';

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
```

- w/ the client connection, you get a database object, and from that a collection object
    - you can insert and query for docs from the collection object
    - if collection (or database) doesn't exist when you insert a doc, Mongo will create them for you
- use `find` on the collection object to query for docs
    - is an async func so use `await` keyword when executing func on `collection.find()` result
        - `collection.find()` will return all docs in the collection

### Account creation & login
- need a way for users to uniquely identify themselves
    -  usually requires 2 service endpoints: one to create an authentication credential, and a second to authenticate, or login, on future visits
    -  when setting a an authorization token (cookie), use the following attributes:
        -  `httpOnly`: tells browser to not allow JS running on the browser to read the cookie
        -  `secure`: requires the HTTPS to be used when sending the cookie back to the server
        -  `sameSite`: will only return the cookie to the domain that generated it

### Service Daemons - PM2
- allows program to keep running even after a shutdown
- PM2 = Process Manager 2: what helps our web service continue running as a daemon and start and stop our services easily
    -  how to see PM2 in action:
        -  SSH into server
        -  run: `pm2 ls` -> shows the stwo services that are configured to run on web browser (simon and startup)
    - more useful commands:

<img src=https://github.com/pknjohns/startup/assets/137959114/82522a61-b2f3-4419-ab12-38166f475fc9>

### UI testing
- TDD = test driven development
- use Playwright to automate the browser for testing applications
- to test application on different devices, use BrowserStack
- fro endpoint testing, use Jest

# WebSocket
- enables connections between 2 parties/devices

# Security

Common security community lingo:
- Hacking - The process of making a system do something it's not supposed to do.
- Exploit - Code or input that takes advantage of a programming or configuration flaw.
- Attack Vector - The method that a hacker employs to penetrate and exploit a system.
- Attack Surface - The exposed parts of a system that an attacker can access. For example, open ports (22, 443, 80), service endpoints, or user accounts.
- Attack Payload - The actual code, or data, that a hacker delivers to a system in order to exploit it.
- Input sanitization - "Cleaning" any input of potentially malicious data.
- Black box testing - Testing an application without knowledge of the internals of the application.
- White box testing - Testing an application by with knowledge of the source code and internal infrastructure.
- Penetration Testing - Attempting to gain access to, or exploit, a system in ways that are not anticipated by the developers.
- Mitigation - The action taken to remove, or reduce, a threat.

Motivation for attackers:
- Disruption - By overloading a system, encrypting essential data, or deleting critical infrastructure, an attacker can destroy normal business operations. This may be an attempt at extortion, or simply be an attempt to punish a business that that attacker does not agree with.
- Data exfiltration - By privately extracting, or publicly exposing, a system's data, an attacker can embarrass the company, exploit insider information, sell the information to competitors, or leverage the information for additional attacks.
- Resource consumption - By taking control of a company's computing resources an attacker can use it for other purposes such as mining cryptocurrency, gathering customer information, or attacking other systems.

Common hacking techniques:
- Injection: When an application interacts with a database on the backend, a programmer will often take user input and concatenate it directly into a search query. This allows a hacker can use a specially crafted query to make the database reveal hidden information or even delete the database.
- Cross-Site Scripting (XSS): A category of attacks where an attacker can make malicious code execute on a different user's browser. If successful, an attacker can turn a website that a user trusts, into one that can steal passwords and hijack a user's account.
- Denial of Service: This includes any attack where the main goal is to render any service inaccessible. This can be done by deleting a database using an SQL injection, by sending unexpected data to a service endpoint that causes the program to crash, or by simply making more requests than a server can handle.
- Credential Stuffing: People have a tendency to reuse passwords or variations of passwords on different websites. If a hacker has a user's credentials from a previous website attack, then there is a good chance that they can successfully use those credentials on a different website. A hacker can also try to brute force attack a system by trying every possible combination of password.
- Social engineering - Appealing to a human's desire to help, in order to gain unauthorized access or information.

Best security practices:
- Sanitize input data - Always assume that any data you receive from outside your system will be used to exploit your system. Consider if the input data can be turned into an executable expression, or can overload computing, bandwidth, or storage resources.
- Logging - It is not possible to think of every way that your system can be exploited, but you can create an immutable log of requests that will expose when a system is being exploited. You can then trigger alerts, and periodically review the logs for unexpected activity.
- Traps - Create what appears to be valuable information and then trigger alarms when the data is accessed.
- Educate - Teach yourself, your users, and everyone you work with, to be security minded. Anyone who has access to your system should understand how to prevent physical, social, and software attacks.
Reduce attack surfaces - Do not open access anymore than is necessary to properly provide your application. This includes what network ports are open, what account privileges are allowed, where you can access the system from, and what endpoints are available.
- Layered security - Do not assume that one safeguard is enough. Create multiple layers of security that each take different approaches. For example, secure your physical environment, secure your network, secure your server, secure your public network traffic, secure your private network traffic, encrypt your storage, separate your production systems from your development systems, put your payment information in a separate environment from your application environment. Do not allow data from one layer to move to other layers. For example, do not allow an employee to take data out of the production system.
- Least required access policy - Do not give any one user all the credentials necessary to control the entire system. Only give a user what access they need to do the work they are required to do.
Safeguard credentials - Do not store credentials in accessible locations such as a public GitHub repository or a sticky note taped to a monitor. Automatically rotate credentials in order to limit the impact of an exposure. Only award credentials that are necessary to do a specific task.
- Public review - Do not rely on obscurity to keep your system safe. Assume instead that an attacker knows everything about your system and then make it difficult for anyone to exploit the system. If you can attack your system, then a hacker will be able to also. By soliciting public review and the work of external penetration testers, you will be able to discover and remove potential exploits.

### Most Important Web Application Security Risks:

- A01 Broken Access Control: application doesn't properly enforce permissions on users. A non-admin can gain admin access/ permissions and do things they shouldn't be able to do
- A02 Cryptographic Failues: sensitive data is accessible either without encryption, w/ weak encryption, or when cryptographic protections are ignored. Ex: using bad hashing algorithms (MD5 & SHA-1) or not validating the provided web certificate
- A03 Injection: attacker is allowed to supply data and inject it into a context where it violates expected use of user input.
- A04 Insecure Design: architectural flaws during design of application's system
- A05 Security Misconfiguration: exploitation of application's configuration (default passwords, not updating software, exposing configuration settings, or enabling unsecured remote configuration).
- A06 Vulnerable and Outdated Components: The longer an application has been deployed, the more likely it is that the attack surface, and corresponding exploits, of the application will increase. This is primarily due to the cost of maintaining an application and keeping it up to date in order to mitigate newly discovered exploits.Outdated components often accumulate as third party packages are used by the application. Over time the packages are updated in order to address security concerns, or sometimes the packages stop being supported. When this happens your application becomes vulnerable.
- A07 Identification and Authentication Failures: any situation where a user's identity can be impersonated or assumed by an attacker. Additionally, if passwords are exposed outside of the application, or are stored inside the application, with weak cryptographic protection, then they are susceptible to attack.Another example of an identification failure would be a weak password recovery process that doesn't properly verify the user.
- A08 Software and Data Integrity Failure: attacks that allow external software, processes, or data to compromise your application. Modern web applications extensively use open source and commercially produced packages to provide key functionality. Using these packages without conducting a security audit, gives them an unknown amount of control over your application. Likewise, using a third party processing workflow, or blindly accessing external data, opens you up to attacks.
- A09 Security Logging and Monitoring Failures: One of the first things an attacker will do after penetrating your application is delete or alter any logs that might reveal the attacker's presence. A secure system will store logs that are accessible, immutable, and contain adequate information to detect an intrusion, and conduct post-mortem analysis. An attacker might also try to create a smoke screen in the monitoring system in order to hide a true attack. This might consist of a barrage of periodic ineffective attacks that hide the insertion of a slightly different effective one.
- A10 Server Side Request Forgery (SSRF): causes the application service to make unintended internal requests, that utilized the service's elevated privileges, in order to expose internal data or services.

### Security Practice

Can use practice security web applications to internalize how security exploits work.
Types of practice security web applications:
- Gruyere provides tutorials and practice with things like Cross-site scripting (XSS), Denial of Service (DoS), SQL injection, and elevation of privilege attacks.
- Juice Shop: have to download code to local machine

<img src=https://github.com/pknjohns/startup/assets/137959114/c8ed81e5-7476-4842-8768-c9b1084a3538>

- You can solve the first hacking challenge by discovering the hidden score board view that shows you all of the possible challenges to solve, and exposes the available tutorials. You can discover where the score board is by examining the contents of the main.js file in Dev Tools and seeing that it references a path named score-board. So if you change the url to be localhost:3000/#/score-board you will see the following view.

- start with DOM XSS tutorial

# Web Frameworks

### Web Frameworks
- seek to make the job of writing web applications easier by providing tools for completing common application tasks.
- Vue combines HTML, CSS, and JavaScript into a single file. HTML is represented by a template element that can be aggregated into other templates.
- angular component: defines what Javascript, HTML, and CSS are combined together

### React
- focuses on making reactive web page components that automatically update based on user interactions or changes in the underlying data.
- abstracts HTML into a Javascript vairant called JSX
- JSX is converted into valid HTML and JavaScript using a preprocessor called Babel.

#### React Components
- allow you to modularize the functionality of your application. This allows the underlying code to directly represent the components that a user interacts with. It also enables code reuse as common application components often show up repeatedly.
- One of the primary purposes of a component is to generate the user interface. This is done with the component's `render` function. Whatever is returned from the render function is inserted into the component HTML element.
- Components can have properties and internal state
- add state using `React.useState` hook function. It returns a variable containnig the current state and a function to update the state
- Reactivity controls how a component reacts to actions taken by the user or events that happen within the application. Whenever a component's state or properties change, the render function for the component and all of its dependent component render functions are called.

### Toolchains
- As web programming becomes more and more complex it became necessary to abstract away some of that complexity with a series of tools. Some common functional pieces in a web application tool chain include:
    - Code repository - Stores code in a shared, versioned, location.
    - Linter - Removes, or warns, of non-idiomatic code usage.
    - Prettier - Formats code according to a shared standard.
    - Transpiler - Compiles code into a different format. For example, from JSX to JavaScript, TypeScript to JavaScript, or SCSS to CSS.
    - Polyfill - Generates backward compatible code for supporting old browser versions that do not support the latest standards.
    - Bundler - Packages code into bundles for delivery to the browser. This enables compatibility (for example with ES6 module support), or performance (with lazy loading).
    - Minifier - Removes whitespace and renames variables in order to make code smaller and more efficient to deploy.
    - Testing - Automated tests at multiple levels to ensure correctness.
    - Deployment - Automated packaging and delivery of code from the development environment to the production environment.
 
### Vite
- to exit, use `ctrl + c`
- run each command separately
- be patient and give code time to run: sometimes it takes a while
- to manipulate text on homepage, have to edit `App.jsx` file, not `index.html`

### Router
- A web framework router provides essential functionality for single-page applications. With a multiple-webpage application the headers, footers, navigation, and common components must be either duplicated in each HTML page, or injected before the server sends the page to the browser. With a single page application, the browser only loads one HTML page and then JavaScript is used to manipulate the DOM and give it the appearance of multiple pages. The router defines the routes a user can take through the application, and automatically manipulates the DOM to display the appropriate framework components.
- A basic implementation of the router consists of a `BrowserRouter` component that encapsulates the entire application and controls the routing action. The `Link`, or `NavLink`, component captures user navigation events and modifies what is rendered by the `Routes` component by matching up the `to` and `path` attributes.

### Reactivity
- React enables reactivity with three major pieces of a React component: `props`, `state`, and `render`.
- When a component's JSX is rendered, React parses the JSX and creates a list of any references to the component's `state` or `prop` objects. React then monitors those objects and if it detects that they have changed it will call the component's `render` function so that the impact of the change is visualized.
- components must start with a capital letter
- components are like functions that you have to define. each contains all the html/css/JS you need to dynamically "react" to what the user is doing
- To collect data from multiple children, or to have two child components communicate with each other, declare the shared state in their parent component instead. The parent component can pass that state back down to the children via props. This keeps the child components in sync with each other and with their parent.
    - Lifting state into a parent component is common when React components are refactored.
- copy arrays with Javascript `slice()` command
