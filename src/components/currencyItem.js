import React, { Component } from "react";
import { Dimensions, View, } from "react-native";
import CommonStyles from '../css/commonStyle';
import {
    ListItem,
    Text,
} from "native-base";

/**
 * 资产列表组件
 */
export default class CurrencyItem extends Component {
    render() {

        let { currency, quantity, estimatedValue, onPress } = this.props;
        return (
            < ListItem button style={styles.listItemStyle} onPress={onPress}>
                <View style={styles.purple} />
                <View style={styles.leftViewStyle}>
                    <Text style={styles.currencyStyle}>{currency}</Text>
                    <Text style={styles.describe}>持有数量<Text style={styles.quantityStyle}>{quantity}</Text></Text>
                </View>
                <View style={styles.viewStyle}>
                    <Text style={styles.estimatedValueStyle}>{estimatedValue}</Text>
                    <Text style={[styles.estimateStyle]}>预估价值(元)</Text>
                </View>
            </ListItem >
        );
    }
}
const { width, height } = Dimensions.get("window")
const styles = {
    purple: {
        backgroundColor: '#9578E4',
        width: 5,
        height: width / (width / 97),
    },
    listItemStyle: {
        flexDirection: 'row',
        backgroundColor: '#F5F5F5',
        height: width / (width / 97),
        width: width * 0.9,
        marginBottom: width / (width / 10)
    },
    leftViewStyle: {
        flexDirection: 'column',
        width: width * 0.45,
        paddingLeft: width / (width / 16),
    },
    viewStyle: {
        flexDirection: 'column',
        width: width * 0.4,
    },
    startTextStyle: {
        paddingLeft: width / (width / 10)
    },
    describe: {
        alignSelf: 'flex-start',
        color: '#313442',
        fontSize: 14,
    },
    currencyStyle: {
        alignSelf: 'flex-start',
        fontSize: 19,
        color: '#313442'
    },
    estimatedValueStyle: {
        color: '#714BD9',
        alignSelf: 'flex-end',
        fontSize: 23
    },
    quantityStyle: {
        color: '#FF801A',
    },
    estimateStyle: {
        color: '#9699A5',
        alignSelf: 'flex-end',
        fontSize: 14
    }
};
