https://learning.oreilly.com/videos/javascript-kickstart-build/9780137949045/9780137949045-JSR1_01_01_03/

npm install -g npm@11.0.0
npm instal -g create-react-app // remember it should me installed with -g for global

npx create-react-app todo-list

cd todo-list

https://stackoverflow.com/questions/71835697/create-react-app-dependency-version-issues-with-react-18

This fixes it, until the problem is updated.

[after creating the react app, with errors...]

    delete both "node_modules" and "package-lock.json"
     npm i web-vitals --save-dev
     npm install


----------



OR
Having trouble with Create React App (CRA)? Consider switching to Vite, a modern build tool offering a faster, smoother React development experience.

Here's how to set up a new React project using Vite:

# Create new Vite project
npm create vite@latest my-react-app

# Navigate to project directory
cd my-react-app

# Install dependencies
npm install

# Start dev server
npm run dev

------------------------
create a repository at GitHub webpage and call it todo-list

git status
locally git add *
git commit -m "first commit"

pick the right instructions in this case "for push an existing repository"

git remote add origin https://github.com/djekki/todo-list.git
git branch -M main
git push -u origin main

to check the remote of your project use this command
git remote -v
-----
Netlify fundamentals
It is a hosting and servless backend for web-apps and sites

We are going to have Netifly Cli installed locally but also  liked to our GitHub repository 
We are going to connect GitHub with netlify so at any time we do a push the code will be deployed

Steps:
1- install netlify cli
2 netlify init

https://docs.netlify.com/cli/get-started/

1) npm install netlify-cli -g // the install the cli globally 
2) from inside the proyect initialize the connection with: netlify init

--- this is the result :


C:\user\JavaScriptKitstartV2\todo-list>netlify init

Adding local .netlify folder to .gitignore file...
? What would you like to do? +  Create & configure a new site
? Team: Leo’s team
? Site name (leave blank for a random name; you can change it later): djekki-todo-app

Site Created

Admin URL: https://app.netlify.com/sites/djekki-todo-app
URL:       https://djekki-todo-app.netlify.app
Site ID:   f265ab4e-991e-4e49-8da8-7616d93967b1

Linked to djekki-todo-app

? Your build command (hugo build/yarn run build/etc): npm run build
? Directory to deploy (blank for current dir): build
? No netlify.toml detected. Would you like to create one with these build settings? Yes

Adding deploy key to repository...
Deploy key added!

Creating Netlify GitHub Notification Hooks...
Netlify Notification Hooks configured!

Success! Netlify CI/CD Configured!

This site is now configured to automatically deploy from github branches & pull requests

Next steps:

  git push       Push to your git repository to trigger new site builds
  netlify open   Open the Netlify admin URL of your site


C:\user\JavaScriptKitstartV2\todo-list>
-----------------------------
commando: 
netlify open 
will open a tab on the browser (or at least print you URL and you Ctrl-Click over it )

-----
For this projects we will build a component library

FROM THE ROOT and NOT inside the todo-list project !!!

npx create-react-app react-components

----------------------
We are going to use storybook to help us on the creation of component 

https://storybook.js.org/docs

npx storybook@latest init  // REMBER IS BOOK and not board !!

The installation will open a browser tab (probably the same if you run npm run storybook )

According to the documentation To run your storybook, type:
npm run storybook.


So far with this configuration storyboard added some sample code in the project,
you can see it at /src/stories/ for Button , Header and  Page. We will delete that code later.

---
Integrate material UI https://mui.com/

Please note that react and react-dom are peer dependencies, meaning you should ensure they are installed before installing Material UI.
So I reviewed the package.json and both are present :) in the right version indicated in the mui page.
This is the command for the installation in the components app

npm install @mui/material @emotion/react @emotion/styled

also install the icons
npm install @mui/icons-material
-------------------------------------- creater repo for react-componentents
git add *
git commit -m "First commit inicial creation of TextInput component - TextInput.jsx"

Create a reporsitory for react-components at Gighub web page


git remote add origin https://github.com/djekki/react-components.git
git branch -M main
git push -u origin main


------
Start Development process

Build TextInput Controller


