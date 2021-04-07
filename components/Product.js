import { useRoute } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';
import CardView from 'react-native-cardview';
import { ScrollView } from 'react-native-gesture-handler';

const window = Dimensions.get('window');


export default class Product extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          CategoryId: props.route.params.CategoryId,
          categoryProductList: []
      }
    }

    
  componentDidMount(){
    console.log(this.state.CategoryId)
    return fetch('https://admin.meramarket.co.in/api/CustomerApp/GetCategoryProductList?CustomerId=6&CategoryId=1')
        .then(response => response.json())
        .then(data => this.setState({categoryProductList : data.objlist }));
    }

    render(){
      return (
        <ScrollView>
          {
            this.state.categoryProductList.map((item, index) => (
              <View style={styles.MainContainer}>
                <View style={styles.CardMainContainer}>
                  <CardView
                      cardElevation={2}
                      cardMaxElevation={2}
                      cornerRadius={5}
                      style={styles.cardContainer}>
                      <View style={styles.cardViewStyle}>
                          <View style={styles.item}>
                              <Image style={styles.image} source={{uri : item.objproductimglist[0].ProductImageUrl}}  />
                              <Text style={styles.name}>{item.ProductName}</Text>
                          </View>
                      </View>
                  </CardView>
                </View> 
              </View> 
            ))
          }
        </ScrollView>
      );
    }
}

const styles = StyleSheet.create({
  MainContainer:{
    width: window.width, 
    flexDirection: 'row',
    flexWrap: "wrap",
  },
  CardMainContainer:{
    flexDirection: 'column',
    marginLeft: 10,
    marginTop: 10,
    marginRight: 5,
    marginBottom: 0
  },
  cardContainer:{
    backgroundColor: '#FFF',
    width: window.width - 20, 
    padding: 10
  },
  cardViewStyle:{
    width: ( window.width / 2 ) - 15, 
    height: ( window.width / 3 ) - 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: {
    flexDirection: 'row',
    flexWrap: "wrap",
    width: ( window.width / 2 ) - 15, 
    height:  ( window.width / 3 ) - 15,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'contain',
  },
  name: {
    flexDirection: 'column',
  },
  cardView_InsideText:{
    fontSize: 20, 
    textAlign: 'center', 
    marginTop: 50    
  }

});
