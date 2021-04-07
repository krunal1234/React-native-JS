import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Dimensions, Image, ScrollView, TouchableOpacity } from "react-native";
import ModelCarousel from "./ModelCarousel";
import BannerCarousel from "./BannerCarousel";

const window = Dimensions.get('window');

export default class Home extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        activeIndex:0,
        categoryList: []
    }
  }

  componentDidMount(){
      return fetch('https://admin.meramarket.co.in/api/CustomerApp/GetCategoryList?CustomerId=6')
          .then(response => response.json())
          .then(data => this.setState({categoryList : data.objcategorylist }));
  }

  render(){
    const { navigation } = this.props;
    return (
      <ScrollView>
          <View>
            <ModelCarousel />
            <BannerCarousel />
            <View style={styles.MainContainer}>
              
              {
                this.state.categoryList.map((item, index) => (
                  <View style={styles.CardMainContainer} key={index}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Product',{ screen: 'Product', params: { CategoryId: item.CategoryId} })}>
                      <View style={styles.cardContainer}>
                            <View style={styles.item}>
                                <Image style={styles.image} source={{uri : item.CategoryImageUrl}}  />
                            </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                ))
              }
            </View>
          </View>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  MainContainer:{
    width: window.width, 
    flexDirection: 'row',
    flexWrap: "wrap"
  },
  CardMainContainer:{
    flexDirection: 'column',
    marginLeft: 10,
    marginTop: 10,
    marginRight: 5,
    marginBottom: 0
  },
  cardContainer:{
    width: ( window.width / 2 ) - 20, 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  cardViewStyle:{
    width: ( window.width / 2 ) - 45, 
    height: ( window.width / 3 ) - 45,
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: {
    width: window.width - 100,
    height: ( window.width / 2 ) - 60
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
  cardView_InsideText:{
    fontSize: 20, 
    textAlign: 'center', 
    marginTop: 50    
  }

});