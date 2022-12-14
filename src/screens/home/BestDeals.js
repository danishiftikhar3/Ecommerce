import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import StarRating from "react-native-star-rating";
import { useDispatch, useSelector } from "react-redux";

import color from "../../../constants/color";
import { useNavigation } from "@react-navigation/native";
import { wishAdd, wishDel } from "../../../store/products";

const { width: screenWidth } = Dimensions.get("window");
const windowHeight = Dimensions.get("window").height;

function BestDeals() {
  const data = useSelector((state) => state.products);
  const carouselItems = data.filter(function (el) {
    return el.bestDeal;
  });
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const wishlist = (param, id) => {
    if (param) {
      dispatch(wishDel({ id }));
    } else {
      dispatch(wishAdd({ id }));
    }
  };

  return (
    <View>
      <View style={styles.cv}>
        <Carousel
          layout={"default"}
          // ref={ref => this.carousel = ref}
          data={carouselItems}
          sliderWidth={screenWidth}
          sliderHeight={windowHeight * 0.3}
          itemWidth={screenWidth - 180}
          slideStyle={{ flex: 1 }}
          firstItem={1}
          inactiveSlideShift={30}
          renderItem={({ item, index }) => (
            <View style={styles.item}>
              <View style={{}}>
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    margin: 10,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => wishlist(item.wishlist, item.id)}
                  >
                    {item.wishlist ? (
                      <Image
                        source={require("../../images/heart.png")}
                        style={styles.heart}
                      ></Image>
                    ) : (
                      <Image
                        source={require("../../images/heart.png")}
                        style={styles.heart1}
                      ></Image>
                    )}
                  </TouchableOpacity>
                </TouchableOpacity>

                <View>
                  <Image source={item.pic} style={styles.img1}></Image>
                </View>
              </View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Product", { itemID: item.id })
                }
              >
                <Text style={styles.title}>{item.title}</Text>
                <View
                  style={{
                    width: "10%",
                    marginTop: 4,
                    resizeMode: "contain",
                    marginLeft: 25,
                  }}
                >
                  <StarRating
                    disabled={false}
                    maxStars={5}
                    rating={item.stars}
                    fullStarColor={color.star}
                    starSize={15}
                    starStyle={{}}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    margin: 10,
                    marginBottom: 10,
                  }}
                >
                  <Text style={styles.txt3}>${item.price}</Text>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Product", { itemID: item.id })
                    }
                  >
                    <Image
                      style={styles.img5}
                      source={require("../../images/for.png")}
                    ></Image>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
}
export default BestDeals;

const styles = StyleSheet.create({
  heart: {
    width: 30,
    height: 35,
    resizeMode: "contain",
    tintColor: color.red,
  },
  heart1: {
    width: 30,
    height: 35,
    resizeMode: "contain",
    tintColor: color.grey,
  },
  item: {
    flex: 1,
    borderRadius: 20,
    borderWidth: 1,
    // backgroundColor: color.blue,
    borderColor: color.border,
    shadowColor: color.border,
  },
  img1: {
    resizeMode: "contain",
    alignSelf: "center",
    height: 200,
  },
  title: {
    fontSize: 18,
    marginLeft: 25,
    fontWeight: "500",
    color: color.darkBlue,
  },
  txt3: {
    fontSize: 20,
    paddingLeft: 20,
    alignSelf: "center",
    width: "70%",
    fontWeight: "bold",
    color: color.darkBlue,
  },
  img5: {
    width: 45,
    height: 50,
  },
  cv: {
    justifyContent: "center",
    alignSelf: "center",
    width: "100%",
    marginBottom: 35,
    marginTop: 35,
  },
});
