# DrCinema
DrCinema, a react-native project in app development

## rules of engagement
  - to run program: cd /Contactor/ and run npm start
  - to run eslint:  npm run lint
  - app is developed and tested using the android Expo app

## contributers:

  **arnarp18:  Arnar Snær Pálsson**

  **bjarnib18: Bjarni Berg Björgvinsson**

  **ragnarr18: Ragnar Geir Ragnarsson**

## feats:


## extra feats:

## redux pattern:
  actions are dispatched by the view, the store receives these actions and determine what state change should occur
          -> after that the state is pushed back to the view

  actions:    <-
  ->dispatcher   |
  ->store        |
  ->view     ->  |

install: npm install react-redux
redux-thunk : middleware to allow us to use async action creators -> return a function instead of a JS object

Actions = Object (should always define a type, which is a string and should indicate what this action is doing)
exmp:
  const action = () => {
    return {
      type: 'INCREMENT',
      payload: 2    <------ auka gögn
    }
  }
