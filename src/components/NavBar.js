import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../utilities/colors';

class NavBar extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.navbar}>
        <Icon name="ios-home" style={styles.icon} />
        <Icon name="ios-qr-scanner" style={styles.icon} />
        <Icon name="ios-cart" style={styles.icon} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navbar: {
    alignSelf: 'stretch',
    height: 40,
    backgroundColor: colors.navbar,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 25,
    color: 'white',
    marginLeft: 10,
    flex: 1,
    textAlign: 'center',
  }
});

export default NavBar;
