1. Open the app folder in Visual Studio Code. Inside the directory, start a development server with:

	npm install
	node serve.js

The starter folder includes:

	flags/chile.png, flags/peru.png, flags/spain.png - these are the flag images that you have to fetch for this lab
	js/main.js is the main JavaScript file for the app
	test/test.html is a file for testing your progress
	index.html is the main HTML page for our sample site/application
	package.json & package-lock.json keep track of the development server dependencies
	server.js is a local development server for testing

2. Open your browser and navigate to localhost:8081. 

3. Inside the function getImageName(country) in js/main.js write code to:
	- Make the country variable all lower case
	- Create a new promise with a timeout of 1000 that checks if the country name parameter is spain, chile or peru. If it is, resolve the promise returning the country name + '.png'. If it isn't, reject the promise returning Error('Did not receive valid name!').
	- Return promise.

4. Update the function flagChain(country) in js/main.js to return a call to the getImageName(country) function and chain the result of the promise it returns to catch fallbackName and then fetchFlag, then processFlag, then appendFlag and finally catch logError. These helper functions are made for you so you don't have to implement them. Simply chain the return result with calls to these functions.

5. Your lab will be complete when you enter 'Spain', 'Chile' or 'Peru' in the input box, click on the Fetch Flag Image and the
image is rendered on the screen. Each time you enter a valid country name the flag will append after the rendered ones.

6. BONUS: Investigate about Promises.all and Promises.race and think of a place where those commands could be useful (could be
existing functionality or think of a future case in which they could come in handy).