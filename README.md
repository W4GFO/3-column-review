# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project was created using create-react-app. Specifially:
> npx create-react-app multi-col-preview --template typescript

## NPM Installs

The user must install the necessary npm dependencies:
> npm install sass

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### React Components

*	CardContainer:
	-	This is the actual grid container which sits within the primary "App" Component
	-	Additionally, this is the components which lays out the 3 Card/gridItems

*	Card:
	-	These are the 3 elements which are liad out either vertically or horizontally depending on the size of the UI
	-	The display of these elements are based on the classNames passed in as props from the CardContainer.
	
## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
