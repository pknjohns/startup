[Link to cs260 webpage](https://learn.cs260.click/)

# GitHub

- GitHub is a valuable tool all developers use to track changes to code and ahve access to version history of their files
- it also keeps their code safe from being lost due to a computer dying

- there are 4 things you should always get in the habit of when working with code:
1) Verify you have the latest code (git pull)
2) Refactor, test, and/or implement a small portion of cohesive code (test, code, test)
3) Commit and push (git commit, git push)
4) Repeat

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
- man - Look up a command in the manual
- printf - print string to the console
- CTRL-R - Use type ahead to find previous commands
- CTRL-C - Kill the currently running command

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

# HTML Deliverable notes

- footer will be the same for all pages: include link to github repository and author name
- when you are using the Chrome debugging tools to edit your html file, remember that those changes won't be reflected or saved in your actual html file, so if there is anything crucial that you actually need to change then you need to do it in the source code in VS
- HTML elements are represented with enclosing tags that may enclose other elements or text. For example, the paragraph element, and its associated tag (p), designate that the text is a structural paragraph of text. When we talk about tags we are referring to a delimited textual name that we use to designate the start and end of an HTML element as it appears in an HTML document. Tags are delimited with the less than (<) and greater than (>) symbols. A closing tag will also have a forward slash (/) before its name

- Always have a header, main, and footer elements in each html file
    - main is where you put all the main content of the page
- for elements that interact with websocket, it's useful to add an id to the element so that when you implement Javascript and websocket, the id will help the websocket/ Javascript know which element to interact with and dynamically update/ modify
- div elements can help with organization of page and elements within the main element

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
- a -	Anchor the text to a hyperlink
- img -	Graphical image reference
- dialog - Interactive component such as a confirmation
- form - A collection of user input
- input -	User input field
- audio -	Audio content
- video -	Video content
- svg -	Scalable vector graphic content
- iframe - Inline frame of another HTML page

- You can include comments in your HTML files by starting the comment with <!-- and ending it with -->. Any text withing a comment block will be completely ignored when the browser renders it.

### Adding Special Characters in HTML: [HTML Intro](https://learn.cs260.click/page/html/introduction/introduction_md)

### HTML Input elements:

Element	Meaning	Example
form	Input container and submission	<form action="form.html" method="post">
fieldset	Labeled input grouping	<fieldset> ... </fieldset>
input	Multiple types of user input	<input type="" />
select	Selection dropdown	<select><option>1</option></select>
optgroup	Grouped selection dropdown	<optgroup><option>1</option></optgroup>
option	Selection option	<option selected>option2</option>
textarea	Multiline text input	<textarea></textarea>
label	Individual input label	<label for="range">Range: </label>
output	Output of input	<output for="range">0</output>
meter	Display value with a known range	<meter min="0" max="100" value="50"></meter>

### HTML input element types:

text	Single line textual value
password	Obscured password
email	Email address
tel	Telephone number
url	URL address
number	Numerical value
checkbox	Inclusive selection
radio	Exclusive selection
range	Range limited number
date	Year, month, day
datetime-local	Date and time
month	Year, month
week	Week of year
color	Color
file	Local file
submit	button to trigger form submission


