import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class MenuList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <FlatList
          data ={[
            {
              key: 'Egg Toast',
              url: require('../assets/images/egg-toast.jpg'),
              description: 'Sunny side up egg layed on top of toast',
              price: '$10'
            },
            {
              key: 'Egg Toast 2',
              url: require('../assets/images/egg-toast.jpg'),
              description: 'Sunny side up egg layed on top of toast',
              price: '$10'
            },
          ]}
          renderItem={({item}) =>
            <View style={styles.itemContainer}>
              <View style={styles.itemImageContainer}>
                <Image source={item.url} style={styles.itemImage} resizeMode='contain' />
              </View>
              <View style={styles.itemInfoContainer}>
                <Text style={styles.itemName}>{item.key}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
              </View>
              <View style={styles.itemPricingContainer}>
                <Text style={styles.itemPrice}>{item.price}</Text>
                <View style={styles.itemSelection}>
                  <Icon name='ios-remove-circle' style={[styles.itemIcon, styles.itemRemove]}/>
                  <Text style={styles.itemQuantity}>1</Text>
                  <Icon name='ios-add-circle' style={[styles.itemIcon, styles.itemAdd]}/>
                </View>
              </View>
            </View>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 0.5,
  },
  itemImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemImage: {
    width: '100%',
    height: '100%',
  },
  itemInfoContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  itemDescription: {
    color: 'gray',
    fontSize: 16,
    marginTop: 6,
  },
  itemPricingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemPrice: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemSelection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemIcon: {
    fontSize: 22,
    width: 30,
    textAlign: 'center',
  },
  itemAdd: {
    color: 'rgb(91, 150, 9)',
  },
  itemRemove: {
    color: 'gray',
  },
  itemQuantity: {
    fontSize: 18,
    textAlign: 'center',
  }
});

export default MenuList;
