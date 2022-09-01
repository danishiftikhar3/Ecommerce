import React, { useEffect, useState } from "react";
import {
  View,
  Dimensions,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Modal,
  SafeAreaView,
  Pressable,
} from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";
import SegmentedControlTab from "react-native-segmented-control-tab";
import StarRating from "react-native-star-rating";
import { RadioButton } from "react-native-paper";

import Constants from "expo-constants";

import HeaderB from "../../components/HeaderB";
import color from "../../../constants/color";
import { useDispatch, useSelector } from "react-redux";
import {
  assendingDataByName,
  assendingDataByPrice,
  dessendingDataByPrice,
  wishAdd,
  wishDel,
} from "../../../store/products";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Featureds() {
  // const [modalVisible, setModalVisible] = useState(false);
  const route = useRoute();
  const navigation = useNavigation();

  if (typeof route.params !== "undefined") {
    const { screenID } = route.params;
    var [customStyleIndex, setCustomStyleIndex] = useState(screenID);
  } else {
    var [customStyleIndex, setCustomStyleIndex] = useState(0);
  }
  const [modalVisible, setModalVisible] = useState(false);
  const [checked, setChecked] = useState("");

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
    <SafeAreaView style={styles.screen}>
      <HeaderB
        Title="Featured"
        style={{ tintColor: color.black }}
        onPress={() => setModalVisible(!modalVisible)}
      />

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
          <View style={{ flexGrow: 1, height: "100%" }}>
            <View style={styles.flatlistView}>
              <FlatList
                data={data}
                renderItem={({ item, index }) => (
                  <TouchableOpacity
                    style={styles.flatlistView1}
                    onPress={() =>
                      navigation.navigate("Product", { itemID: item.id })
                    }
                  >
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

                    <View style={styles.lView}>
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
                  </TouchableOpacity>
                )}
                numColumns={2}
                keyExtractor={(item) => item.id}
                ListFooterComponent={<View style={{ height: 300 }} />}
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
                  <TouchableOpacity
                    style={styles.flatlistView1}
                    onPress={() =>
                      navigation.navigate("Product", { itemID: item.id })
                    }
                  >
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

                    <View style={styles.lView}>
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
                  </TouchableOpacity>
                )}
                numColumns={2}
                keyExtractor={(item) => item.id}
                ListFooterComponent={<View style={{ height: 300 }} />}
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
                  <TouchableOpacity
                    style={styles.flatlistView1}
                    onPress={() =>
                      navigation.navigate("Product", { itemID: item.id })
                    }
                  >
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

                    <View style={styles.lView}>
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
                  </TouchableOpacity>
                )}
                numColumns={2}
                keyExtractor={(item) => item.id}
                ListFooterComponent={<View style={{ height: 300 }} />}
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
                  <TouchableOpacity
                    style={styles.flatlistView1}
                    onPress={() =>
                      navigation.navigate("Product", { itemID: item.id })
                    }
                  >
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

                    <View style={styles.lView}>
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
                  </TouchableOpacity>
                )}
                numColumns={2}
                keyExtractor={(item) => item.id}
                ListFooterComponent={<View style={{ height: 300 }} />}
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
                  <TouchableOpacity
                    style={styles.flatlistView1}
                    onPress={() =>
                      navigation.navigate("Product", { itemID: item.id })
                    }
                  >
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

                    <View style={styles.lView}>
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
                  </TouchableOpacity>
                )}
                numColumns={2}
                keyExtractor={(item) => item.id}
                ListFooterComponent={<View style={{ height: 300 }} />}
              />
            </View>
          </View>
        )}
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Filter by Price</Text>
            <View style={styles.Rb}>
              <View style={styles.radioButton}>
                <RadioButton
                  value="1"
                  status={checked === "1" ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked("1"),
                      setModalVisible(!modalVisible),
                      dispatch(assendingDataByPrice());
                  }}
                />
              </View>
              <Text style={styles.Rbtxt}>Assendeing Price</Text>
            </View>
            <View style={styles.Rb}>
              <View style={styles.radioButton}>
                <RadioButton
                  color="white"
                  value="2"
                  status={checked === "2" ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked("2"),
                      setModalVisible(!modalVisible),
                      dispatch(dessendingDataByPrice());
                  }}
                />
              </View>
              <Text style={styles.Rbtxt}>Dessending Price</Text>
            </View>
            <Text style={styles.modalText}>Filter by Name</Text>
            <View style={styles.Rb}>
              <View style={styles.radioButton}>
                <RadioButton
                  value="3"
                  status={checked === "3" ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked("3"),
                      setModalVisible(!modalVisible),
                      dispatch(assendingDataByName());
                  }}
                />
              </View>
              <Text style={styles.Rbtxt}>Assendeing Name</Text>
            </View>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  lView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignSelf: "center",
  },
  Rbtxt: {
    fontSize: 15,
  },
  radioButton: {
    ...Platform.select({
      ios: {
        backgroundColor: color.darkBlue,
        borderRadius: "100%",
      },
      android: {},
      default: {
        backgroundColor: color.darkBlue,
        borderRadius: "100%",
      },
    }),

    margin: 10,
  },
  Rb: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: color.darkBlue,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  screen: {
    backgroundColor: color.white,
    paddingTop: Constants.statusBarHeight,
  },
  mainview: {
    flexDirection: "row",
    height: 70,
    justifyContent: "space-around",
    backgroundColor: color.header,
  },
  backimg: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    justifyContent: "center",
    marginTop: 10,
  },
  homeimg: {
    width: 50,
    height: 30,
    resizeMode: "contain",
    alignSelf: "center",
  },
  view2: {
    justifyContent: "center",
    flexDirection: "row",
  },
  txt1: {
    alignSelf: "center",
    fontSize: 22,
  },
  img1: {
    width: 50,
    height: 25,
    resizeMode: "contain",
    alignSelf: "center",
  },
  view3b: {
    // width: '70%',
    alignSelf: "center",
    borderColor: color.border,
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 15,
    flex: 2,
    elevation: 8,
    marginTop: 30,
    margin: 15,
  },

  txt2: {
    fontSize: 16,
    paddingLeft: 10,
  },

  txt5: {
    fontSize: 14,
    color: "red",
    paddingLeft: 15,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  view7: {
    alignSelf: "center",
    justifyContent: "space-around",
    width: "80%",
    height: 60,
    flexDirection: "row",
    marginTop: 20,
  },
  colimg: {
    width: 40,
    height: 30,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 20,
  },
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
    height: "100%",
    flexGrow: 1,
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
    resizeMode: "cover",
    alignSelf: "center",
    // marginTop: -40,
    flex: 1,
    height: "100%",
  },
  view4b: {
    marginTop: windowHeight * 0.15,
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
