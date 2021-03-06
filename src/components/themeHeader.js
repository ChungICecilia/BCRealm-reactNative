import React, {Component} from "react";
import {
    Header,
    Button,
    Body,
    Icon,
    Text,
    View,
} from "native-base";

import CommonStyles from '../css/commonStyle';

/**
 * Header控件
 */
export default class ThemeHeader extends Component {
    render() {
        let {leftSource, onLeftOnPress, title, onRightPress, buttonIconName, buttonIconType} = this.props;
        return (
            <Header style={CommonStyles.headerStyle}>
                {leftSource &&
                <Button onPress={() => {
                    onLeftOnPress
                }}>
                    <Icon name={leftSource} style={CommonStyles.backIconStyle}/>
                </Button>
                }
                <Body style={CommonStyles.titleBodyStyle}>
                <Text style={CommonStyles.headertextStyle}>{title}</Text>
                </Body>
                {
                    buttonIconName &&
                    < Button transparent onPress={() => {
                        onRightPress()
                    }}>
                        <Icon name={buttonIconName} type={buttonIconType} style={CommonStyles.backIconStyle}/>
                    </Button>
                }
            </Header>
        );
    }
}