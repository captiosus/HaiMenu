import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class ToggleButton extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      icon: this.props.icon,
      title: this.props.title,
    };
  }

  render() {
    return (
      <TouchableHighlight style={styles.button}>
        <View style={styles.buttonContainer}>
          <Icon name={this.state.icon} style={styles.buttonIcon}/>
          <Text style={styles.buttonText}>{this.state.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    borderColor: 'black',
    borderWidth: 2,
    flex: 1,
    height: 40,
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    fontSize: 24,
  },
  buttonText: {
    paddingLeft: 10,
    fontWeight: 'bold',
  }
});

export default ToggleButton;
