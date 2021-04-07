import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import Banner from "./Banner";

const BannerCarousel = () => {

  _renderItem = ({item, index}) => {
      return (
          <View>
              <Text>{ item.title }</Text>
          </View>
      );
  }

  return (
      <View>
          <Banner />
      </View>
  );
};

const styles = StyleSheet.create({
});

export default BannerCarousel;