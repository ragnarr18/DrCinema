import { NavigationActions } from 'react-navigation';
import Navigator from '../routes';

const init = Navigator.router.getStateForAction(NavigationActions.init());
export default (state = init, action) => {
  const nextState = Navigator.router.getStateForAction(action);
  return nextState || state;
};
