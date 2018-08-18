import React from 'react';
import {Provider} from "react-redux";
import ReactNative from 'react-native'
import store from "./utilities/storage/store";
import Restaurant from './screens/Restaurant';
import Menu from './screens/Menu';
import Routing, {Router} from './utilities/routing/index';

import iconFont from 'react-native-vector-icons/Fonts/Ionicons.ttf';

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

const iconFontStyles = `@font-face {
  src: url(${iconFont});
  font-family: Ionicons;
}`;

const style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
  style.styleSheet.cssText = iconFontStyles;
} else {
  style.appendChild(document.createTextNode(iconFontStyles));
}

ReactNative.render(<App/>, document.getElementById('root'));

document.head.appendChild(style);
