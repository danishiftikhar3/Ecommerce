import React, { Component, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  FlatList,
  Dimensions,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import StarRating from "react-native-star-rating";
import HeaderB from "../../components/HeaderB";

import color from "../../../constants/color";
import Constants from "expo-constants";
import { cartAdd, wishAdd, wishDel } from "../../../store/products";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

// import { useNavigation } from '@react-navigation/native';

//navigation.navigate('Wishlist', { itemID: item.id })

const starCount = 4.5;

function Product() {
  const data = useSelector((state) => state.products);

  const route = useRoute();
  const navigation = useNavigation();
  const { itemID } = route.params;

  var dataA = data.filter(function (el) {
    return el.id === itemID;
  });

  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.screen}>
      <HeaderB />
      <View style={styles.flatlistView}>
        <FlatList
          data={dataA}
          renderItem={({ item, index }) => (
            <View>
              <View style={styles.view3}>
                <Image
                  resizeMode="contain"
                  style={styles.img2}
                  source={item.pic}
                ></Image>
              </View>
              <View style={styles.view4}>
                <Text style={styles.txt3}>{item.title}</Text>
                <Text style={styles.txt2}>${item.price}</Text>
              </View>
              <View
                style={{
                  width: "10%",
                  margin: 10,
                  resizeMode: "contain",
                  alignSelf: "center",
                  marginTop: 10,
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <StarRating
                  disabled={false}
                  maxStars={5}
                  rating={item.stars}
                  fullStarColor={color.star}
                  starSize={18}
                  starStyle={{ marginLeft: 3 }}
                />
              </View>

              <View style={styles.footer}>
                <TouchableOpacity
                  style={styles.view5}
                  onPress={() => {
                    dispatch(cartAdd({ id: itemID }));
                  }}
                >
                  <View>
                    <Text style={styles.txt4}>Add to Bag</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.view6}
                  onPress={() => {
                    dispatch(wishAdd({ id: itemID }));
                  }}
                >
                  <View>
                    <Text style={styles.txt5}>Add to Wishlist</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          )}
          numColumns={2}
          keyExtractor={(item) => item.id}
          ListFooterComponent={<View style={{ height: 150 }} />}
        />
      </View>
    </SafeAreaView>
  );
}
export default Product;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: color.background,
    height: "100%",
  },
  footer: {
    flexDirection: "row",
    // alignSelf: 'baseline',
    justifyContent: "space-around",
    width: "100%",
    alignSelf: "center",
  },

  view1: {
    width: "45%",
  },
  view2: {
    justifyContent: "center",
    flexDirection: "row",
  },
  view2: {
    justifyContent: "center",
    flexDirection: "row",
  },

  img1: {
    width: 50,
    height: 25,
    resizeMode: "contain",
    alignSelf: "center",
  },
  view3: {
    width: "60%",
    alignSelf: "center",
    borderColor: color.border,
    borderWidth: 1,
    backgroundColor: color.background,
    borderRadius: 15,
    flexDirection: "row",
    elevation: 8,
    marginTop: 30,
  },
  img2: {
    width: "95%",
    height: windowHeight * 0.4,
    resizeMode: "contain",
    alignSelf: "center",
  },
  view4: {
    alignSelf: "center",
    marginTop: 20,
  },
  txt2: {
    fontSize: 22,
    fontWeight: "bold",
    color: color.darkBlue,
    textAlign: "center",
    marginTop: 10,
  },
  txt3: {
    fontSize: 22,
    fontWeight: "bold",
    color: color.darkBlue,
    textAlign: "center",
  },

  view5: {
    backgroundColor: color.header,
    borderRadius: 10,
    height: 55,
    width: "45%",
    justifyContent: "center",
    marginTop: 15,
  },
  view6: {
    backgroundColor: color.white,
    borderRadius: 10,
    height: 55,
    width: "45%",
    justifyContent: "center",
    marginTop: 15,
    borderColor: color.border,
    borderWidth: 1,
    marginLeft: 10,
    right: 10,
  },
  txt4: {
    color: color.white,
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  txt5: {
    color: color.darkBlue,
    alignSelf: "center",
    fontSize: 17,
  },
});
