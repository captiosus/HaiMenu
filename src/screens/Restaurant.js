import React from 'react';
import {connect} from "react-redux";
import Header from './../components/Header';
import MenuBanner from './../components/MenuBanner';
import NavBar from './../components/NavBar';
import RestaurantNav from './../components/RestaurantNav';
import {
  Platform,
  StyleSheet,
  View,
} from 'react-native';

class Menu extends React.Component {
  constructor(props, context) {
      super(props, context);
      this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Header name='Restaurant' icon='ios-arrow-back'/>
        <View style={styles.content}>
          <MenuBanner />
          <RestaurantNav />
        </View>
        <NavBar />
      </View>
    );
  }
}

const WEB_HEIGHT = Platform.OS === 'web' ? '100vh' : '100%';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    minHeight: WEB_HEIGHT,
  },
  content: {
    flex: 1,
  }
});

function mapStateToProps(state) {
  return ({
    sampleReducer: state.sampleReducer
  })
}

export default connect(mapStateToProps)(Menu);
