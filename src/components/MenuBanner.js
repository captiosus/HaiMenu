import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

class MenuBanner extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      imageUrl: require('./../assets/images/restaurant.jpeg'),
      name: 'Touché',
      address: '2013 East 23rd Street Brooklyn, NY',
      bannerScale: {
        width: Dimensions.get('window').width,
        height: Math.round(Dimensions.get('window').width * 9 / 16)
      },
    };
    Dimensions.addEventListener("change", (e) => {
      this.setState({
        bannerScale: {
          width: e.window.width,
          height: Math.round(e.window.width * 9 / 16),
        }
      });
    });
  }

  render() {
    return (
      <View>
        <Image source={this.state.imageUrl} style={this.state.bannerScale} resizeMode='contain' />
        <View style={[this.state.bannerScale, styles.bannerOverlay, styles.bannerCover]}></View>
        <View style={[this.state.bannerScale, styles.bannerOverlay, styles.bannerText]}>
          <Text style={[styles.restaurantText, styles.restaurantName]}>{this.state.name}</Text>
          <Text style={[styles.restaurantText, styles.restaurantAddress]}>{this.state.address}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bannerOverlay: {
    position: 'absolute',
  },
  bannerCover: {
    backgroundColor: 'black',
    opacity: 0.4,
  },
  bannerText: {
    alignItems: 'center',
  },
  restaurantText: {
    color: 'white',
    flex: 1,
  },
  restaurantName: {
    fontSize: 50,
    top: '35%',
    position: 'absolute',
    fontWeight: 'bold'
  },
  restaurantAddress: {
    fontSize: 10,
    position: 'absolute',
    bottom: 10,
  }
});

export default MenuBanner;
