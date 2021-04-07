import * as React from 'react';
import {
  Text, 
  View,
  SafeAreaView, 
  StyleSheet,
  Image,
  Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Carousel from 'react-native-snap-carousel';

const window = Dimensions.get('window');

export default class Ads extends React.Component {

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

    _renderItem({item,index}){
        return (
          <ScrollView>
            <View style={styles.container}>
                  <View style={styles.item}>
                      <Image style={styles.image} source={{ uri : item.BannerImage }} />
                  </View>
            </View>
          </ScrollView>
        )
    }

    render() {
        return (
          <SafeAreaView style={{paddingTop: 50, }}>
            <View style={{ flexDirection:'row', justifyContent: 'center', }}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={window.width- 100}
                  itemWidth={window.width - 100}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
          </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
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
});