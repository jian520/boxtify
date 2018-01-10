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
    Body, Text, H2, View, H3, Form, Item, Input,
} from "native-base";
import {Grid, Row, Col} from "react-native-easy-grid";
import Picker from 'react-native-picker';
import area from '../../../src/area';



export default class StepOne extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: "請選擇區域",

        };
    }

    onValueChange(value: string) {
        this.setState({
            selected: value
        });
    }


    createAreaData() {
        let data = [];
        let len = area.length;
        for (let i = 0; i < len; i++) {
            let city = [];
            for (let j = 0, cityLen = area[i]['city'].length; j < cityLen; j++) {
                let _city = {};
                _city[area[i]['city'][j]['name']] = area[i]['city'][j]['area'];
                city.push(_city);
            }

            let _data = {};
            _data[area[i]['name']] = city;
            data.push(_data);
        }
        return data;
    }

    showAreaPicker() {
        Picker.init({
            pickerData: this.createAreaData(),
            pickerConfirmBtnText: "確定",
            pickerTitleText: "請選擇區域",
            pickerCancelBtnText: "取消",
            onPickerConfirm: pickedValue => {
                console.log('area', pickedValue[0] + " " + pickedValue[1] );

                this.onValueChange(pickedValue[0] + " " + pickedValue[1]);

            },
            onPickerCancel: pickedValue => {
                console.log('area', pickedValue);
            },
            onPickerSelect: pickedValue => {
                //Picker.select(['山东', '青岛', '黄岛区'])
                console.log('area', pickedValue);
            }
        });
        Picker.show();
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
                        <Button transparent onPress={() => this.props.navigation.navigate("ServiceStepFour")}>
                            <Title>下一步</Title>
                        </Button>
                    </Right>
                </Header>

                <Content>

                    {/*<View style={{height: 40, backgroundColor: "#2EB5AC"}}>*/}
                    <Image source={require("../../../assets/serviceheader3.png")}
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
                    }}
                    >
                        <Row style={{
                            marginTop: 10,
                            marginLeft: 10,

                            height: 40
                        }}
                        >
                            <Text style={{
                                    color: "#2EB5AC"
                                }}
                            >儲存計劃</Text>
                        </Row>
                        <Row
                            style={{
                                marginLeft: 10,
                                height: 20}}
                        >
                            <Text style={{color: "#999999"}}>1個 標準儲物箱</Text>
                            <Text style={{color: "#999999"}}>$ 49</Text>
                        </Row>
                        <Row
                            style={{


                                marginLeft: 10,
                                height: 20}}
                        >
                            <Text style={{color: "#999999"}}>1個 標準儲物箱</Text>
                            <Text style={{color: "#999999"}}>$ 49</Text>
                        </Row>

                        <Row style={{
                            borderWidth: 1, borderColor: "#999999",
                            marginTop:10,
                           // marginLeft: 10,
                            //marginRight: 10,
                            marginBottom:10,
                        }}
                        >

                            <Col style={{
                                backgroundColor: "#2EB5AC",
                                alignItems: "center"
                            }}>
                                <Text style={{color: "#fff"}}>儲存月費預算</Text>
                                <Text style={{color: "#fff"}}>(不包括任何折扣)</Text>
                            </Col>
                            <Col style={{
                                alignItems:"center"
                            }}>
                                <H3 style={{flex:1, color: "#2EB5AC", }}>$ 49</H3>
                            </Col>

                        </Row>

                        <Row
                            style={{
                                marginLeft: 10,
                                marginRight: 10,
                            }}
                        >
                            <Text style={{color: "#999999"}}>首個月費週期由收取物品翌日開始計算</Text>
                        </Row>

                        <View style={{
                            // borderWidth: 1, borderColor: "#999999",
                            marginLeft: 30,
                            marginRight: 30, marginBottom: 20,
                        }}>

                            <Row style={{marginTop:20, marginBottom:10, alignSelf: "center"}}>
                                <H3 style={{color:"#87634B"}}>請填寫以下資料</H3>
                            </Row>

                            <Form>
                                <Text style={{color: "#2EB5AC"}}>個人資料</Text>
                                <Input style={styles.input} placeholder={"姓名"}/>
                                <Input style={styles.input} placeholder={"聯絡電話"}/>
                                <Text style={{color: "#2EB5AC"}}>運送地址</Text>
                                <Input style={styles.input} placeholder={"地址(第一行)"}/>
                                <Input style={styles.input} placeholder={"地址(第二行)"}/>
                            </Form>


                            <Col>
                                <Button   onPress={() => this.showAreaPicker()}>
                                    <Title>{this.state.selected}</Title>
                                </Button>

                            </Col>



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

    input: {
        borderColor: "#8F9294",
        borderWidth: 1,
        borderRadius: 5,
        height:40,
        marginTop:10,

        marginBottom:10,
    },

})
