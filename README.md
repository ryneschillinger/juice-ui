#Installation for Figma
Extract .fig file and drag'n'drop it onto Figma drafts dashboard.
Components library used to import within 1 munite.

#Installation for React
Candy UI Design System is available as an zip archive.
To install unzip archive, copy all files from folder "SetProductKit" to your project folder and install package.json dependencies:

`npm install`

To run app:

`npm start`

#Starting a new project
After installing the dependencies with the npm install command, you can start developing a new project. You will discover design system components in the folder: src\@candy-ui\core. For the documentation stored locally refer to a folder: src\@candy-ui\demo. Style files are available here: src\@candy-ui\styles. Before you get started with development, you need to include styles in your main application file, for example, App.js. To perform this, insert the import code:
`import "normalize.css/normalize.css";`
`import "@blueprintjs/core/lib/css/blueprint.css";`
`import "./@candy-ui/styles/setproduct.css";`

For the proper usage of components in your project, apply the sample code and component's API from the component documentation page. The Button import example:
`import Button from "./@candy-ui/core/Button";`
`const App = () => { return <Button color="primary" text="BUTTON"/>; };`
`export default App;`

#Existing project integration
Copy the @candy-ui folder from the archive into the src folder of your project. Include styles in your primary application file, for example, App.js. To perform this, insert the import code:
`import "normalize.css/normalize.css";`
`import "@blueprintjs/core/lib/css/blueprint.css";`
`import "./@candy-ui/styles/setproduct.css";`

For the proper usage of components in your project, apply the sample code and component's API from the component documentation page. The Button import example:
`import Button from "./@candy-ui/core/Button";`
`const App = () => { return <Button color="primary" text="BUTTON"/>;};`
`export default App;`

All components are based on BlueprintJS components v.3 (https://blueprintjs.com/docs/).
All UI kit components are located in the folder /src/@candy-ui/core.
Copy of DemoApp components is located in the folder /src/@candy-ui/demo and you can run it locally.

For components preview and usage examples, please visit: https://react.setproduct.com/

---

Thanks for the purchase!

Setproduct team is working hard on improving this product.
Please send your feedback, ideas and suggestions: hello@setproduct.com
or use the bottom contact form: www.setproduct.com
