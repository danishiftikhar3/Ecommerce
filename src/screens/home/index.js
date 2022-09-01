import * as React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";
import Constants from "expo-constants";

import HeaderA from "../../components/HeaderA.js";
import ComponentA from "./componentA.js";
import BestSelling from "./BestSelling.js";
import BestSellers from "./BestSellers.js";
import Segmented from "./Segmented.js";
import BestDeals from "./BestDeals.js";
import Divider from "./Divider.js";
import color from "../../../constants/color.js";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={styles.screen}>
        <HeaderA />
        <ScrollView>
          <ComponentA />
          <Divider title="Best Deals" />
          <BestDeals />
          <Divider title="Best Selling Products" />
          <BestSelling />
          <Divider title="Featured" />
          <Segmented />
          <Divider title="Best Sellers" />
          <BestSellers />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: color.background,
    height: "100%",
  },
});
