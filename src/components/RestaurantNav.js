import React from 'react';
import {StyleSheet, View} from 'react-native';
import ToggleButton from './ToggleButton';

class RestaurantNav extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <View style={styles.buttonRow}>
          <ToggleButton icon='ios-wine' title='Refill Water' />
          <ToggleButton icon='md-help' title='Help' />
        </View>
        <View style={styles.buttonRow}>
          <ToggleButton icon='ios-book' title='Menu' />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});

export default RestaurantNav;
