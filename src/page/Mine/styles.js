const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export default {
    textStyle: {
        marginLeft: 10,
        color: '#313442',
        fontSize: 15
    },
    buttonStyle: {
        width: deviceWidth * 0.8,
        backgroundColor: "#CC0000",
        justifyContent: 'center',
        alignItems: 'center',
    },
    line: {
        backgroundColor: '#F3F3F3',
        height: 2
    },
    rowStyle: {
        marginTop: deviceWidth / (deviceWidth / 50),
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    listItemStyle: {
        backgroundColor: '#ffffff',
    },
    buttonTextStyle: {
        color: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    imageStyle: {
        width: deviceWidth,
        height: deviceWidth / (deviceWidth / 126)
    },
    headStyle: {
        marginTop: deviceWidth / (deviceWidth / 25),
        marginLeft: deviceWidth / (deviceWidth / 10)
    },
    userNameStyle: {
        marginTop: deviceWidth / (deviceWidth / 35),
        color: '#FFFFFF',
        fontSize: 17
    },
    userIdStyle: {
        marginTop: 1,
        color: '#FFFFFF',
        fontSize: 15
    },
    certifiedStyle: {
        alignItems: 'center',
        marginRight: 10,
        color: '#714BD9'
    },
    uncertifiedStyle: {
        alignItems: 'center',
        marginRight: 10,
        color: '#9699A5'
    }

}
