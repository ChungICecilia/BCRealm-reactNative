import React, { Component } from "react";
import {
    Container,
    Body,
    Left,
    Right,
    Button,
    ListItem,
    Icon,
    View
} from 'native-base';
import { Text, FlatList } from 'react-native';
import styles from "./styles";
import RecordItem from '../../../../../components/recordItem';
import { Grid, Col } from 'react-native-easy-grid';


const data = [
    { date: "2018.09.10", quantity: 2000000, state: 1 },
    { date: "2018.09.10", quantity: 50, state: 0 },
    { date: "2018.09.10", quantity: 500, state: 1 },
    { date: "2018.09.10", quantity: 450, state: 0 },
]

/**
 * 提现记录
 */
class AboutUs extends Component {

    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        header: null
    };

    goBack = () => {
        this.props.navigation.goBack();
    }

    render() {
        let items = data
        return (
            <Container style={styles.containerStyle}>
                <View style={{ flexDirection: 'row' }}>
                    <Left>
                        <Button transparent onPress={() => { this.goBack() }}>
                            <Icon name={"ios-arrow-back"} style={styles.backIconStyle} />
                        </Button>
                    </Left>
                    <Body>
                        <Text style={styles.titleStyle}>提现记录</Text>
                    </Body>
                    <Right>
                        <Button transparent />
                    </Right>
                </View>

                < ListItem itemDivider style={styles.listItemStyle} >
                    <Grid style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Col size={1} style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.textStyle}>日期</Text>
                        </Col>
                        <Col size={1} style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.textStyle}>数量</Text>
                        </Col>
                        <Col size={1} style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.textStyle}>状态</Text>
                        </Col>
                    </Grid>
                </ListItem >
                <FlatList data={items}
                    enableEmptySections={true}
                    onEndReachedThreshold={10}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        return <RecordItem
                            date={item.date}
                            quantity={item.quantity}
                            state={item.state}
                        />
                    }} />
            </Container >
        );
    }
}
export default AboutUs