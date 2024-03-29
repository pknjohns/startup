[Link to cs260 webpage](https://learn.cs260.click/)

# GitHub

- GitHub is a valuable tool all developers use to track changes to code and ahve access to version history of their files
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
