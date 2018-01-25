import React, {Component} from "react";
import {Image, StyleSheet, StatusBar} from "react-native";
import {
    Container,
    Content,
    Header,
    Title,
    Button,
    Icon,
    Left,
    Right,
    Body, Text, H2, View, H3, Form, Item, Input, CheckBox, ListItem,
    Card,
    CardItem,List
} from "native-base";
import common from "../../theme/variables/common";

import styles from "./styles";

const datas = [
    {

        name: "1個 文件箱",
        price: "29",

    },
    {
        name: "2個 標準儲物箱",
        price: "98",

    },


];

export default class Overview extends Component {
    constructor(props) {
        super(props);
        this.state = {

            checkbox1: false,
            checkbox2: false
        };
    }

    toggleSwitch1() {
        this.setState({
            checkbox1: !this.state.checkbox1
        });
    }

    toggleSwitch2() {
        this.setState({
            checkbox2: !this.state.checkbox2
        });
    }


    render() {
        return (

            <Container>
                <StatusBar barStyle="light-content"/>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Title>返回</Title>
                        </Button>
                    </Left>
                    <Body>
                    <Title>預約概覽</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => alert('abc')}>
                            <Title>提交</Title>
                        </Button>
                    </Right>
                </Header>

                <Content padder>
                    <Title style={styles.headTitle}>請覆核預約資料</Title>

                    <Card style={styles.mb}>
                        <CardItem>
                            <Left>
                                <Title style={{color: common.colorB}}>運送地址</Title>
                            </Left>
                            <Right>

                            </Right>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text style={{color: common.colorB}}>JIan</Text>
                                <Text style={{color: common.colorB}}>湖北省武汉市汉阳区</Text>
                                <Text style={{color: common.colorB}}>马鹦路姚湾</Text>
                                <Text style={{color: common.colorB, marginTop: 10}}>聯絡電話: 12345678</Text>
                            </Body>
                        </CardItem>
                    </Card>

                    <Title></Title>

                    <Card style={styles.mb}>
                        <CardItem>
                            <Left>
                                <Title style={{color: common.colorB}}>收取物品並存倉</Title>
                            </Left>
                            <Right>


                            </Right>
                        </CardItem>
                        <CardItem>
                            <Body>

                                <Text style={{color: common.colorB}}>2018-01-23</Text>
                                <Text style={{color: common.colorB}}>09:30 - 13:00</Text>

                            </Body>
                        </CardItem>
                    </Card>


                    <Card style={styles.mb}>
                        <CardItem>
                            <Title style={{color: common.colorB}}>儲存計劃</Title>
                        </CardItem>


                        <List
                            dataArray={datas}
                            renderRow={data =>
                                <ListItem>
                                    <Left>
                                        <Text  style={{color: common.colorB}}>
                                            {data.name}
                                        </Text>
                                    </Left>
                                    <Right>
                                        <Text  style={{color: common.colorB}}>
                                            ${data.price}
                                        </Text>
                                    </Right>
                                </ListItem>}
                        />

                        <CardItem>
                            <Body>
                             <Title  style={{color: common.colorB}}>儲存月費預算</Title>
                             <Text  style={{color: common.colorB}}>(不包括任何折扣)</Text>
                            </Body>
                            <Right>
                                <Text  style={{color: common.colorB}}>
                                    $100
                                </Text>
                            </Right>

                        </CardItem>

                    </Card>



                    <ListItem  onPress={() => this.toggleSwitch1()}>

                        <CheckBox
                            // color="red"
                            checked={this.state.checkbox1}
                            onPress={() => this.toggleSwitch1()}
                        />
                        <Body>
                        <Text style={{color: common.colorB}}>我已閱讀並同意條款及細則</Text>
                        </Body>
                    </ListItem>
                    <ListItem button onPress={() => this.toggleSwitch2()}>
                        <CheckBox
                            // color="green"
                            checked={this.state.checkbox2}
                            onPress={() => this.toggleSwitch2()}
                        />
                        <Body>
                        <Text style={{color: common.colorB}}>我同意不會儲存違禁品</Text>
                        </Body>
                    </ListItem>



                </Content>


            </Container>
        );
    }
}

