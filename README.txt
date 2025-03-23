to run project:

1. install node.js and npm

if on Windows, running these two commands in powershell will work
"winget install Schniz.fnm"
"fnm install 22"

if on Linux, run these four commands (tested in wsl ubuntu 20) 
"sudo apt install unzip"
"curl -o- https://fnm.vercel.app/install | bash"
"source /root/.bashrc"
"fnm install 22"

otherwise, refer to instructions at https://docs.npmjs.com/downloading-and-installing-node-js-and-npm (select your OS and configuration)

2. run "npm install" in "frontend" directory

3. run "npm run dev" in "frontend" directory


do not double click to run the html files, it will not work due to CORS