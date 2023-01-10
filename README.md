![This is an image](https://github.com/ryneschillinger/juice-ui/blob/master/src/%40juice-ui/assets/juice-ui-cover.png)

# Introduction

Juice is unlike any other React UI kit. It takes the [BlueprintJS Library](https://blueprintjs.com/) and [Figma design assets]([https://blueprintjs.com/](https://www.figma.com/file/4UyBcwhG5eXHDbxrbF7CRm/Juice-UI-Kit?node-id=3737%3A47)) and blends them together into a refreshing UI library that helps you build and scale a variety of tasty apps faster than ever before.

The library provides **flat**, **filled**, **smooth**, **outlined**, and **raised** instances for every component, UI widget or template. Want to go simple and data-first for enterprise applications? Try the flat style. Are you a fan of Material UI? The raised style might be the flavor for you. You can even mix-and-match if you'd like! Whatever you're in the mood for, Juice has you covered by making it easier than ever to swap between React and Figma on the fly.


# Getting Started

###### Installation for React
Unzip the .zip archive, copy all files from the folder "JuiceUIKit" to your project folder and install the package.json dependencies:

`npm install`

To run app:

`npm start`

###### Installation for Figma
You can drag an extracted .fig file from a folder on your your Desktop right into Figma. This is available on both the Figma Desktop app and the Figma web app (browser-based). You can also drag and drop files into the File Browser or the Editor. 

###### Might be helpful
All components are based on BlueprintJS components v.3. All UI kit components are located in the folder `/src/@juice-ui/core`. A copy of the DemoApp components is located in the folder /src/@juice-ui/demo and you can run it locally as well.


# Usage

###### Starting a new project
After installing the dependencies with the npm install command, you can start developing a new project. You will discover design system components in the folder: src\@juice-ui\core. For the documentation stored locally refer to a folder: src\@juice-ui\demo. Style files are available here: src\@juice-ui\styles. Before you get started with development, you need to include styles in your main application file, for example, App.js. To perform this, insert the import code:
`import "normalize.css/normalize.css";`
`import "@blueprintjs/core/lib/css/blueprint.css";`
`import "./@juice-ui/styles/juice.css";`

For the proper usage of components in your project, apply the sample code and component's API from the component documentation page. The Button import example:
`import Button from "./@juice-ui/core/Button";`
`const App = () => { return <Button color="primary" text="BUTTON"/>; };`
`export default App;`

###### Existing project integration
Copy the @juice-ui folder from the archive into the src folder of your project. Include styles in your primary application file, for example, App.js. To perform this, insert the import code:
`import "normalize.css/normalize.css";`
`import "@blueprintjs/core/lib/css/blueprint.css";`
`import "./@juice-ui/styles/juice.css";`

For the proper usage of components in your project, apply the sample code and component's API from the component documentation page. The Button import example:
`import Button from "./@juice-ui/core/Button";`
`const App = () => { return <Button color="primary" text="BUTTON"/>;};`
`export default App;`
