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
    Body, Text, H2, View, H3, Form, Item, Input, Picker,
} from "native-base";
import {Grid, Row, Col} from "react-native-easy-grid";

const Item2 = Picker.Item;
export default class StepOne extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected1: "key0",
            selected2: "key0"
        };
    }

    onValueChange(value: string) {
        this.setState({
            selected1: value


        });
    }

    onValueChange2(value: string) {
        this.setState({
            selected2: value


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
                    <Title>預約時間</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => alert('abc')}>
                            <Title>下一步</Title>
                        </Button>
                    </Right>
                </Header>

                <Content>

                    {/*<View style={{height: 40, backgroundColor: "#2EB5AC"}}>*/}
                    <Image source={require("../../../assets/serviceheader2.png")}
                           style={styles.img}
                    />
                    {/*</View>*/}


                    <View style={{
                        marginTop: 10,
                        marginLeft: 20,
                        marginRight: 10,
                        marginBottom: 10,
                        alignItems: 'center',

                    }}>

                        <H3 style={{
                            marginTop: 10,
                            fontSize: 18,
                            alignSelf: 'center',
                            color: "#2EB5AC"
                        }}>你的預約</H3>
                    </View>


                    <Grid style={{
                        borderWidth: 1, borderColor: "#999999",
                        marginLeft: 40,
                        marginRight: 40, marginBottom: 20,
                    }}>
                        <Row style={{height: 40}}><Text>儲存計劃</Text></Row>
                        <Row style={{height: 20}}>
                            <Text>1個 標準儲物箱</Text>
                            <Text>$ 49</Text>
                        </Row>
                        <Row>
                            <Text>1個 標準儲物箱</Text>
                            <Text>$ 49</Text>
                        </Row>
                        <Row>
                            <Text>1個 標準儲物箱</Text>
                            <Text>$ 49</Text>
                        </Row>
                        <Row>
                            <Text>1個 標準儲物箱</Text>
                            <Text>$ 49</Text>
                        </Row>


                        <Row>

                            <Col><Text>儲存月費預算
                                (不包括任何折扣)</Text></Col>
                            <Col><Text>$ 49</Text></Col>

                        </Row>

                        <Row><Text>首個月費週期由收取物品翌日開始計算</Text></Row>


                        <View style={{
                            borderWidth: 1, borderColor: "#999999",
                            marginLeft: 30,
                            marginRight: 30, marginBottom: 20,
                        }}>

                            <Row><H3>請填寫以下資料</H3></Row>


                            <Form>
                                <H3>個人資料</H3>
                                <Item>

                                    <Input placeholder={"姓名"}/>
                                </Item>

                                <Item fixedLabel>
                                    <Input placeholder={"聯絡電話"}/>
                                </Item>
                                <H3>運送地址</H3>
                                <Item fixedLabel>
                                    <Input placeholder={"地址(第一行)"}/>
                                </Item>

                                <Item fixedLabel>

                                    <Input placeholder={"地址(第二行)"}/>
                                </Item>
                                <H3> 運送地址</H3>


                            </Form>


                            <Form>
                                <Picker
                                    mode="dropdown"
                                    iosHeader="Select your SIM"
                                    iosIcon={<Icon name="ios-arrow-down-outline"/>}
                                    style={{width: undefined}}
                                    selectedValue={this.state.selected1}
                                    onValueChange={this.onValueChange.bind(this)}
                                >
                                    <Item2 label="請選擇區域" value="key0"/>
                                    <Item2 label="ATM Card" value="key1"/>
                                    <Item2 label="Debit Card" value="key2"/>
                                    <Item2 label="Credit Card" value="key3"/>
                                    <Item2 label="Net Banking" value="key4"/>
                                </Picker>
                            </Form>

                            <Form>
                                <Picker
                                    mode="dropdown"
                                    iosHeader="Select your SIM"
                                    iosIcon={<Icon name="ios-arrow-down-outline"/>}
                                    style={{width: undefined}}
                                    selectedValue={this.state.selected2}
                                    onValueChange={this.onValueChange2.bind(this)}
                                >
                                    <Item label="請選擇地區" value="key0"/>
                                    <Item label="ATM Card" value="key1"/>
                                    <Item label="Debit Card" value="key2"/>
                                    <Item label="Credit Card" value="key3"/>
                                    <Item label="Net Banking" value="key4"/>
                                </Picker>
                            </Form>

                        </View>
                    </Grid>


                </Content>


            </Container>
        );
    }
}


const styles = StyleSheet.create({
    img: {
        alignSelf: 'center',

    },
    h2: {
        alignSelf: 'center',
        color: "#2EB5AC"
    },
    txt: {
        alignSelf: 'center',

    },

})
