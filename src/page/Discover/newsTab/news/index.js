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
    AsyncStorage,
} from 'react-native';
import styles from "./styles";
import CommonStyles from '../../../../css/commonStyle';
var WeChat = require('react-native-wechat');

/**
 * 新闻Tab
 */
export default class News extends Component {
    constructor(props) {
        super(props)
        this.state = {
            attention: false,
            showInput: false,
            webViewData: []
        }
        this.url = this.props.navigation.state.params.url;
        WeChat.registerApp('wx7663cfeaaf1ee1fb');
    }

    static navigationOptions = {
        header: null
    };

    goBack = () => {
        this.props.navigation.goBack();
    }

    _onLoadEnd = (e) => {
        AsyncStorage.getItem('data').then(data => {
            let datas = JSON.parse(data);
            this.setState({
                token: datas.token,
            })
            let dataJson = JSON.stringify(datas)
            this.refs.webView.postMessage(dataJson);
            console.log(dataJson)
        })
    }

    render() {
        //const { navigate } = this.props.navigation;
        let url = this.url

        return (
            <Container style={styles.container}>
                <Header style={CommonStyles.headerStyle}>
                    <Button transparent onPress={() => { this.goBack() }}  >
                        <Icon name={"ios-arrow-back"} style={CommonStyles.backIconStyle} />
                    </Button>
                    <Body style={CommonStyles.titleBodyStyle}>
                        <Text style={CommonStyles.headertextStyle}>新闻</Text>
                    </Body>
                    <Button transparent
                        onPress={() => {
                            WeChat.isWXAppInstalled()
                                .then((isInstalled) => {
                                    if (isInstalled) {
                                        WeChat.shareToSession({
                                            title: '区世界分享',
                                            description: '区世界',
                                            thumbImage: 'www.baidu.com',
                                            type: 'news',
                                            webpageUrl: 'http://qsj.bcrealm.com/static/' + url
                                        })
                                            .then((error) => {
                                                alert(error);
                                            });
                                    } else {
                                        alert('没有安装微信软件，请您安装微信之后再试');
                                    }
                                });
                        }}  >
                        <Icon name={"md-share-alt"} style={CommonStyles.backIconStyle} />
                    </Button>
                </Header>
                {/* <WebView source={{ uri: "http://192.168.31.124:8092/qsj/" + url }} */}
                <WebView source={{ uri: "http://qsj.bcrealm.com/static/" + url }}
                    {...console.log('http://qsj.bcrealm.com/static/' + url)}
                    ref='webView'
                    onLoadEnd={this._onLoadEnd}
                    style={styles.webStyle} >
                </WebView>

                {/* <CustomButton text='微信好友分享-文本'
                    onPress={() => {
                        WeChat.isWXAppInstalled()
                            .then((isInstalled) => {
                                if (isInstalled) {
                                    WeChat.shareToSession({ type: 'text', description: '测试微信好友分享文本' })
                                        .catch((error) => {
                                            alert(error.message);
                                        });
                                } else {
                                    alert('没有安装微信软件，请您安装微信之后再试');
                                }
                            });
                    }}
                />
                <CustomButton text='微信好友分享-链接'
                    onPress={() => {
                        WeChat.isWXAppInstalled()
                            .then((isInstalled) => {
                                if (isInstalled) {
                                    WeChat.shareToSession({
                                        title: '区世界分享',
                                        description: '区世界',
                                        thumbImage: 'www.baidu.com',
                                        type: 'news',
                                        webpageUrl: 'http://www.baidu.com'
                                    })
                                        .catch((error) => {
                                            alert(error.message);
                                        });
                                } else {
                                    alert('没有安装微信软件，请您安装微信之后再试');
                                }
                            });
                    }}
                />
                <CustomButton text='微信朋友圈分享-文本'
                    onPress={() => {
                        WeChat.isWXAppInstalled()
                            .then((isInstalled) => {
                                if (isInstalled) {
                                    WeChat.shareToTimeline({ type: 'text', description: '测试微信朋友圈分享文本' })
                                        .catch((error) => {
                                            alert(error.message);
                                        });
                                } else {
                                    alert('没有安装微信软件，请您安装微信之后再试');
                                }
                            });
                    }}
                />
                <CustomButton text='微信朋友圈分享-链接'
                    onPress={() => {
                        WeChat.isWXAppInstalled()
                            .then((isInstalled) => {
                                if (isInstalled) {
                                    WeChat.shareToTimeline({
                                        title: '微信朋友圈测试链接',
                                        description: '分享自:江清清的技术专栏(www.lcode.org)',
                                        thumbImage: 'http://mta.zttit.com:8080/images/ZTT_1404756641470_image.jpg',
                                        type: 'news',
                                        webpageUrl: 'http://www.lcode.org'
                                    })
                                        .catch((error) => {
                                            alert(error.message);
                                        });
                                } else {
                                    alert('没有安装微信软件，请您安装微信之后再试');
                                }
                            });
                    }}
                /> */}
            </Container >
        );
    }
}