# ReactCodeChallenge

A simple React app that allows indecisive users to enter activites and have the computer randomly choose an activity for them. This is a coding challenge, so it has some bugs and needs some enhancements.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

```

Install Visual Studio Code
Install nvm
Install yarn
```

### Installing

From the Project folder, run :
```
yarn
```
Then run:
```
yarn dev-server
```

### Running

If the dev-server script did not already open a browser for you, navigate to http://localhost:8080/ in Google Chrome. As you make changes to the application, the dev-server script should redeploy automatically when you save your work. 

### Bugs to fix

```
•	“Remove all”  and  “remove” links do not work – please fix
•	The "What should I do?" button is supposed to display the OptionModal component when clicked - please fix.
```

### Enhancements to make

```
•	Disable the “What should I do?” button if there are no options in the list.
•	If nothing is entered in the input field when the “Add Option” button is clicked, display error : 'Enter valid value to add item'
•	If they try to enter a duplicate item , display error: 'This option already exists'
```

### Upgrades needed     

```
•	Please update IndecisionApp.js to be a functional component instead of a class component. 
•	Please update the state of IndecisionApp.js to use Hooks.
```