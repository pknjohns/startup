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

echo - Output the parameters of the command
cd - Change directory
mkdir - Make directory
rmdir - Remove directory
rm - Remove file(s)
mv - Move file(s)
cp - Copy files
ls - List files
curl - Command line client URL browser
grep - Regular expression search
find - Find files
top - View running processes with CPU and memory usage
df - View disk statistics
cat - Output the contents of a file
less - Interactively output the contents of a file
wc - Count the words in a file
ps - View the currently running processes
kill - Kill a currently running process
sudo - Execute a command as a super user (admin)
ssh - Create a secure shell on a remote computer
scp - Securely copy files to a remote computer
history - Show the history of commands
ping - Check if a website is up
tracert - Trace the connections to a website
dig - Show the DNS information for a domain
man - Look up a command in the manual
printf - print string to the console

You can also chain the input and output of commands using special characters

| - Take the output from the command on the left and pipe, or pass, it to the command on the right
> - Redirect output to a file. Overwrites the file if it exists
>> - Redirect output to a file. Appends if the file exists

CTRL-R - Use type ahead to find previous commands
CTRL-C - Kill the currently running command
