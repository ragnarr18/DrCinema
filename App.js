import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import Navigator from './src/routes';
import { getCinemas } from './src/actions/cinemasActions';
import CinemaList from './src/components/cinemaList';

// class SubApp extends React.Component{
//   componentDidMount() {
//     this.props.getCinemas();
//     console.log(this.props);
//   }
//   render() {
//     return(
//       <CinemaList />
//       // <Navigator />
//     )
//   }
// }

// const ConnectedSubApp = connect(null, { getCinemas })(SubApp)

export default function App() {
  return (
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
      {/* <ConnectedSubApp /> */}
      <Navigator />
    </Provider>
  );
}
