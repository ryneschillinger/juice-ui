## Installation for Figma
Extract .fig file and drag'n'drop it onto Figma drafts dashboard.
Components library used to import within 1 munite.

## Installation for React
Juice UI Design System is available as an zip archive.
To install unzip archive, copy all files from folder "JuiceUIKit" to your project folder and install package.json dependencies:

`npm install`

To run app:

`npm start`

## Starting a new project
After installing the dependencies with the npm install command, you can start developing a new project. You will discover design system components in the folder: src\@juice-ui\core. For the documentation stored locally refer to a folder: src\@juice-ui\demo. Style files are available here: src\@juice-ui\styles. Before you get started with development, you need to include styles in your main application file, for example, App.js. To perform this, insert the import code:
`import "normalize.css/normalize.css";`
`import "@blueprintjs/core/lib/css/blueprint.css";`
`import "./@juice-ui/styles/juice.css";`

For the proper usage of components in your project, apply the sample code and component's API from the component documentation page. The Button import example:
`import Button from "./@juice-ui/core/Button";`
`const App = () => { return <Button color="primary" text="BUTTON"/>; };`
`export default App;`

## Existing project integration
Copy the @juice-ui folder from the archive into the src folder of your project. Include styles in your primary application file, for example, App.js. To perform this, insert the import code:
`import "normalize.css/normalize.css";`
`import "@blueprintjs/core/lib/css/blueprint.css";`
`import "./@juice-ui/styles/juice.css";`

For the proper usage of components in your project, apply the sample code and component's API from the component documentation page. The Button import example:
`import Button from "./@juice-ui/core/Button";`
`const App = () => { return <Button color="primary" text="BUTTON"/>;};`
`export default App;`

All components are based on BlueprintJS components v.3 (https://blueprintjs.com/docs/).
All UI kit components are located in the folder /src/@juice-ui/core.
Copy of DemoApp components is located in the folder /src/@juice-ui/demo and you can run it locally.
