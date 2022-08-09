import * as React from 'react';
import { View, Text, Dimensions, StyleSheet, ScrollView, } from 'react-native';

import HeaderA from '../../components/HeaderA.js'
import ComponentA from './componentA.js';
import BestSelling from './BestSelling.js';
import BestSellers from './BestSellers.js';
import Segmented from './Segmented.js';
import BestDeals from './BestDeals.js';
import Divider from './Divider.js';

export default class Home extends React.Component {


    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <View  >
                <HeaderA />
                <ScrollView>
                    <ComponentA />
                    <Divider title='Best Deals' />
                    <BestDeals />
                    <Divider title='Best Selling Products' />
                    <BestSelling />
                    <Divider title='Featured' />
                    <Segmented />
                    <Divider title='Best Sellers' />
                    <BestSellers />
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({

});
