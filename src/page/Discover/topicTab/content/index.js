import React, { Component } from "react";
import {
    Container,
    Header,
    Button,
    Text,
    Body,
    Icon,
} from 'native-base';
import {
    WebView,
    AsyncStorage
} from 'react-native';
import styles from "./styles";
import CommonStyles from '../../../../css/commonStyle';

/**
 * 话题内容
 */
export default class Content extends Component {
    constructor(props) {
        super(props)
        this.url = this.props.navigation.state.params.url;
        this.state = {
            token: ''
        }
    }

    static navigationOptions = {
        header: null
    };

    goBack = () => {
        this.props.navigation.goBack();
    }

    componentDidMount() {
        AsyncStorage.getItem('data').then(data => {
            let datas = JSON.parse(data);
            this.setState({
                token: datas.token,
            })
            this.refs.webView.postMessage(datas);
        })

    }

    render() {
        let url = this.url
        return (
            <Container>
                <Header style={CommonStyles.headerStyle}>
                    <Button transparent onPress={() => { this.goBack() }}>
                        <Icon name={"ios-arrow-back"} style={CommonStyles.backIconStyle} />
                    </Button>
                    <Body style={CommonStyles.titleBodyStyle}>
                        <Text style={CommonStyles.headertextStyle}>话题</Text>
                    </Body>
                    <Button transparent />
                </Header>
                <WebView
                    // source={{ uri: "http://qsj.bcrealm.com/qsj/" + url }}
                    source={{ uri: "http://192.168.31.124:8092/qsj/" + url }}
                    style={styles.webStyle}
                    ref='webView'
                    onMessage={(e) => {
                    }}
                >
                </WebView>
            </Container>
        )
    }
}