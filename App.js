import React from 'react';
import {Provider} from "react-redux";
import store from "./src/utilities/storage/store";
import Menu from './src/screens/Menu';
import Restaurant from './src/screens/Restaurant';
import Routing, {Router} from './src/utilities/routing/index';

const Route = Routing.Route;
const Switch = Routing.Switch;


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/' component={Restaurant}/>
            <Route path='/Menu' component={Menu}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
