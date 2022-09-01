import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import SegmentedControlTab from "react-native-segmented-control-tab";
import StarRating from "react-native-star-rating";
import color from "../../../constants/color";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { wishAdd, wishDel } from "../../../store/products";

export default function Segmented() {
  const navigation = useNavigation();
  const route = useRoute();

  const [customStyleIndex, setCustomStyleIndex] = useState(0);

  const dispatch = useDispatch();

  const wishlist = (param, id) => {
    console.log(param);
    if (param) {
      dispatch(wishDel({ id }));
    } else {
      dispatch(wishAdd({ id }));
    }
  };

  const data = useSelector((state) => state.products);

  const womenData = data.filter(function (el) {
    return el.category === "women";
  });

  const kidsData = data.filter(function (el) {
    return el.category === "kids";
  });

  const menData = data.filter(function (el) {
    return el.category === "men";
  });

  const essData = data.filter(function (el) {
    return el.essential;
  });

  return (
    <View>
      <View style={styles.tabview}>
        <SegmentedControlTab
          values={["All", "Women", "Kids", "Men", "Essential"]}
          selectedIndex={customStyleIndex}
          onTabPress={setCustomStyleIndex}
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTab}
          activeTabTextStyle={styles.activeTabText}
          tabTextStyle={styles.tabTextStyle}
          tabsContainerStyle={{
            justifyContent: "space-around",
            width: "100%",
            alignSelf: "center",
          }}
        />

        {customStyleIndex === 0 && (
          <View>
            <View style={styles.flatlistView}>
              <FlatList
                data={data}
                renderItem={({ item, index }) => (
                  <View style={styles.flatlistView1}>
                    <ImageBackground style={styles.img4b} source={item.pic}>
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

                      <View style={styles.view4b}>
                        <Text style={styles.txt4b}>{item.title}</Text>
                        <View
                          style={{
                            width: "10%",
                            marginTop: 4,
                            resizeMode: "contain",
                            marginLeft: 15,
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
                      </View>
                    </ImageBackground>

                    <View style={{ flexDirection: "row" }}>
                      <Text style={styles.txt3b}>${item.price}</Text>
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate("Product", { itemID: item.id })
                        }
                      >
                        <Image
                          style={styles.img5b}
                          source={require("../../images/for.png")}
                        ></Image>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
                numColumns={2}
                keyExtractor={(item) => item.id}
                // ListFooterComponent={<View style={{ height: 150 }} />}
              />
            </View>
          </View>
        )}
        {customStyleIndex === 1 && (
          <View>
            <View style={styles.flatlistView}>
              <FlatList
                data={womenData}
                renderItem={({ item, index }) => (
                  <View style={styles.flatlistView1}>
                    <ImageBackground style={styles.img4b} source={item.pic}>
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

                      <View style={styles.view4b}>
                        <Text style={styles.txt4b}>{item.title}</Text>
                        <View
                          style={{
                            width: "10%",
                            marginTop: 4,
                            resizeMode: "contain",
                            marginLeft: 15,
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
                      </View>
                    </ImageBackground>

                    <View style={{ flexDirection: "row" }}>
                      <Text style={styles.txt3b}>${item.price}</Text>
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate("Product", { itemID: item.id })
                        }
                      >
                        <Image
                          style={styles.img5b}
                          source={require("../../images/for.png")}
                        ></Image>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
                numColumns={2}
                keyExtractor={(item) => item.id}
              />
            </View>
          </View>
        )}
        {customStyleIndex === 2 && (
          <View>
            <View style={styles.flatlistView}>
              <FlatList
                data={kidsData}
                renderItem={({ item, index }) => (
                  <View style={styles.flatlistView1}>
                    <ImageBackground style={styles.img4b} source={item.pic}>
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

                      <View style={styles.view4b}>
                        <Text style={styles.txt4b}>{item.title}</Text>
                        <View
                          style={{
                            width: "10%",
                            marginTop: 4,
                            resizeMode: "contain",
                            marginLeft: 15,
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
                      </View>
                    </ImageBackground>

                    <View style={{ flexDirection: "row" }}>
                      <Text style={styles.txt3b}>${item.price}</Text>
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate("Product", { itemID: item.id })
                        }
                      >
                        <Image
                          style={styles.img5b}
                          source={require("../../images/for.png")}
                        ></Image>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
                numColumns={2}
                keyExtractor={(item) => item.id}
              />
            </View>
          </View>
        )}
        {customStyleIndex === 3 && (
          <View>
            <View style={styles.flatlistView}>
              <FlatList
                data={menData}
                renderItem={({ item, index }) => (
                  <View style={styles.flatlistView1}>
                    <ImageBackground style={styles.img4b} source={item.pic}>
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

                      <View style={styles.view4b}>
                        <Text style={styles.txt4b}>{item.title}</Text>
                        <View
                          style={{
                            width: "10%",
                            marginTop: 4,
                            resizeMode: "contain",
                            marginLeft: 15,
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
                      </View>
                    </ImageBackground>

                    <View style={{ flexDirection: "row" }}>
                      <Text style={styles.txt3b}>${item.price}</Text>
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate("Product", { itemID: item.id })
                        }
                      >
                        <Image
                          style={styles.img5b}
                          source={require("../../images/for.png")}
                        ></Image>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
                numColumns={2}
                keyExtractor={(item) => item.id}
              />
            </View>
          </View>
        )}
        {customStyleIndex === 4 && (
          <View>
            <View style={styles.flatlistView}>
              <FlatList
                data={essData}
                renderItem={({ item, index }) => (
                  <View style={styles.flatlistView1}>
                    <ImageBackground style={styles.img4b} source={item.pic}>
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

                      <View style={styles.view4b}>
                        <Text style={styles.txt4b}>{item.title}</Text>
                        <View
                          style={{
                            width: "10%",
                            marginTop: 4,
                            resizeMode: "contain",
                            marginLeft: 15,
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
                      </View>
                    </ImageBackground>

                    <View style={{ flexDirection: "row" }}>
                      <Text style={styles.txt3b}>${item.price}</Text>
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate("Product", { itemID: item.id })
                        }
                      >
                        <Image
                          style={styles.img5b}
                          source={require("../../images/for.png")}
                        ></Image>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
                numColumns={2}
                keyExtractor={(item) => item.id}
              />
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heart: {
    width: 20,
    height: 25,
    resizeMode: "contain",
    tintColor: color.red,
  },
  heart1: {
    width: 20,
    height: 25,
    resizeMode: "contain",
    tintColor: color.grey,
  },
  flatlistView: {
    marginBottom: 25,
  },
  tabStyle: {
    borderColor: color.white,
  },
  activeTab: {
    borderWidth: 1,
    backgroundColor: color.lightBlue,
    flex: 1,
    elevation: 20,
    borderRadius: 8,
  },
  activeTabText: {
    color: color.black,
    fontWeight: "bold",
  },
  tabTextStyle: {
    color: color.black,
  },
  flatlistView1: {
    // width: '70%',
    alignSelf: "center",
    borderColor: color.border,
    borderWidth: 1,
    backgroundColor: color.white,
    borderRadius: 15,
    flex: 2,
    elevation: 8,
    marginTop: 30,
    margin: 15,
  },
  img3b: {
    width: 25,
    height: 30,
    resizeMode: "contain",
    alignSelf: "center",
  },
  txt4b: {
    fontSize: 14,
    paddingLeft: 15,
    fontWeight: "bold",
  },
  img5b: {
    width: 35,
    height: 40,

    alignSelf: "center",
  },
  img4b: {
    width: 150,
    height: 220,
    resizeMode: "contain",
    alignSelf: "center",
    // marginTop: -40,
    flex: 1,
  },
  view4b: {
    marginTop: 150,
  },
  txt3b: {
    fontSize: 16,
    paddingLeft: 15,
    alignSelf: "center",
    width: "70%",
    fontWeight: "bold",
    color: color.darkBlue,
  },
});
