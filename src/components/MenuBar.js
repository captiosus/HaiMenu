import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MenuList from './MenuList'

class MenuBar extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <View style={styles.menubar}>
          <Text style={[styles.option, styles.pressed]}>Appetizers</Text>
          <Text style={styles.option}>Entrees</Text>
          <Text style={styles.option}>Dessert</Text>
          <Text style={styles.option}>Drinks</Text>
        </View>
        <MenuList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menubar: {
    alignSelf: 'stretch',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
    paddingLeft: 20,
    paddingRight: 20,
  },
  option: {
    fontSize: 18,
    flex: 1,
    color: 'gray',
    textAlign: 'center',
  },
  pressed: {
    color: 'black',
  }
});

export default MenuBar;
