import React from 'react';
import {Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import colors from '../utilities/colors';

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: this.props.name,
      icon: this.props.icon,
    };
  }

  render() {
    return (
      <View style={styles.header}>
        <StatusBar translucent barStyle='light-content' />
        <Icon name={this.state.icon} style={[styles.headerItem, styles.headerLeft, styles.icon]} />
        <Text style={[styles.headerItem, styles.headerText]}>{this.state.name}</Text>
        <Text style={[styles.headerItem, styles.headerRight]}></Text>
      </View>
    );
  }
}

const STATUS_BAR = Platform.OS === 'ios' ? getStatusBarHeight() : 0;

const styles = StyleSheet.create({
  header: {
    alignSelf: 'stretch',
    height: STATUS_BAR + 50,
    paddingTop: STATUS_BAR,
    backgroundColor: colors.header,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  headerItem: {
    flex: 1,
    color: 'white',
  },
  headerLeft: {
    marginLeft: 15,
  },
  headerRight: {
    marginRight: 15,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 20,
  },
  icon: {
    fontSize: 25,
  }
});

export default Header;
