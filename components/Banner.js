import * as React from 'react';
import {
  Text, 
  View,
  SafeAreaView, 
  StyleSheet,
  Image,
  Dimensions} from 'react-native';

import Carousel, { ParallaxImage } from 'react-native-snap-carousel';

const window = Dimensions.get('window');

export default class Banner extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: []
      }
    }
    
    componentDidMount(){
        return fetch('http://admin.meramarket.co.in//api/CustomerApp/GetAppBannerList?CustomerId=3')
            .then(response => response.json())
            .then(data => this.setState({carouselItems : data.objlist }));
    }

    _renderItem({item,index}, parallaxProps){
        return (
            <View style={styles.item}>
              <ParallaxImage
                      source={{ uri: item.BannerImage }}
                      containerStyle={styles.imageContainer}
                      style={styles.image}
                      parallaxFactor={0.4}
                      {...parallaxProps}
                  />
                <Image source={{ uri : item.BannerImage }} />
            </View>
        )
    }

    render() {
        return (
          <SafeAreaView>
            <View>
                <Carousel
                  sliderWidth={window.width}
                  sliderHeight={window.width}
                  itemWidth={window.width - 20}
                  data={this.state.carouselItems}
                  renderItem={this._renderItem}
                  hasParallaxImages={true}/>
            </View>
          </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
  item: {
    width: window.width - 20,
    height: ( window.width / 2 ) - 20
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
});