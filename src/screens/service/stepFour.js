import React, {Component} from "react";
import {Image, StyleSheet, StatusBar} from "react-native";
import DatePicker from 'react-native-datepicker'
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
} from "native-base";
import {Grid, Row, Col} from "react-native-easy-grid";
import Picker from 'react-native-picker';

export default class StepOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkbox1: false,
            checkbox2: false,
            checkbox3: false,
            checkbox4: false,
            //date:"2016-05-15"
            selectTime: "請選擇時間",
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

    toggleSwitch3() {
        this.setState({
            checkbox3: !this.state.checkbox3
        });
    }

    toggleSwitch4() {
        this.setState({
            checkbox4: !this.state.checkbox4
        });
    }


    onValueChange(value: string) {
        this.setState({
            selectTime: value
        });
    }

    showPicker() {
        Picker.init({
            pickerData: ["10:00 - 14:00", "14:00 - 17:00"],
            pickerConfirmBtnText: "確定",
            pickerTitleText: "請選擇時間",
            pickerCancelBtnText: "取消",
            onPickerConfirm: pickedValue => {
                console.log('area', pickedValue[0]  );

                this.onValueChange(pickedValue[0] );

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
                        <Button transparent onPress={() => alert('abc')}>
                            <Title>確定預約</Title>
                        </Button>
                    </Right>
                </Header>

                <Content>

                    {/*<View style={{height: 40, backgroundColor: "#2EB5AC"}}>*/}
                    <Image source={require("../../../assets/serviceheader4.png")}
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
                                height: 20
                            }}
                        >
                            <Text style={{color: "#999999"}}>1個 標準儲物箱</Text>
                            <Text style={{color: "#999999"}}>$ 49</Text>
                        </Row>
                        <Row
                            style={{


                                marginLeft: 10,
                                height: 20
                            }}
                        >
                            <Text style={{color: "#999999"}}>1個 標準儲物箱</Text>
                            <Text style={{color: "#999999"}}>$ 49</Text>
                        </Row>

                        <Row style={{
                            borderWidth: 1, borderColor: "#999999",
                            marginTop: 10,
                            // marginLeft: 10,
                            //marginRight: 10,
                            marginBottom: 10,
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
                                alignItems: "center"
                            }}>
                                <H3 style={{flex: 1, color: "#2EB5AC",}}>$ 49</H3>
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


                        <ListItem button onPress={() => this.toggleSwitch1()}>
                            <CheckBox
                                checked={this.state.checkbox1}
                                onPress={() => this.toggleSwitch1()}
                            />
                            <Body>
                            <Text>我居住的大廈需要經樓梯出入</Text>
                            </Body>
                        </ListItem>
                        <ListItem button onPress={() => this.toggleSwitch2()}>
                            <CheckBox

                                checked={this.state.checkbox2}
                                onPress={() => this.toggleSwitch2()}
                            />
                            <Body>
                            <Text>我需要儲存大型家私如梳化、床褥或餐臺等</Text>
                            </Body>
                        </ListItem>
                        <ListItem button onPress={() => this.toggleSwitch3()}>
                            <CheckBox

                                checked={this.state.checkbox3}
                                onPress={() => this.toggleSwitch3()}
                            />
                            <Body>
                            <Text>我需要boxtify即場替儲存物品拍照記錄</Text>
                            </Body>
                        </ListItem>

                        <ListItem button onPress={() => this.toggleSwitch4()}>
                            <CheckBox

                                checked={this.state.checkbox4}
                                onPress={() => this.toggleSwitch4()}
                            />
                            <Body>
                            <Text>我有物品需要卸載</Text>
                            </Body>
                        </ListItem>


                        <View style={{
                            marginLeft: 30,
                            marginRight: 30, marginBottom: 20,
                        }}>

                            <Row style={{marginTop: 20, marginBottom: 10, alignSelf: "center"}}>
                                <H3 style={{color: "#87634B"}}>預約時間</H3>
                            </Row>

                            <Form>
                                <Text style={{color: "#2EB5AC"}}>收取物品並存倉</Text>
                                <DatePicker
                                    style={{width: 100}}
                                    date={this.state.date}
                                    mode="date"
                                    placeholder="請選擇日子"
                                    format="YYYY-MM-DD"
                                    // minDate="2016-05-01"
                                    // maxDate="2016-06-01"
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    
                                    customStyles={{
                                        dateIcon: {
                                            position: 'absolute',
                                            left: 0,
                                            top: 4,
                                            marginLeft: 0
                                        },
                                        dateInput: {
                                            marginLeft: 36
                                        }
                                        // ... You can check the source to find the other keys.
                                    }}
                                    onDateChange={(date) => {this.setState({date: date})}}
                                />

                                <Button   onPress={() => this.showPicker()}>
                                    <Title>{this.state.selectTime}</Title>
                                </Button>


                                {/*<Picker*/}
                                    {/*mode="dropdown"*/}
                                    {/*iosHeader="請選擇時間"*/}
                                    {/*iosIcon={<Icon name="ios-arrow-down-outline"/>}*/}
                                    {/*style={{width: undefined}}*/}
                                    {/*selectedValue={this.state.selected1}*/}
                                    {/*onValueChange={this.onValueChange.bind(this)}*/}
                                {/*>*/}
                                    {/*<Item2 label="請選擇區域" value="key0"/>*/}
                                    {/*<Item2 label="10:00 - 14:00" value="key1"/>*/}
                                    {/*<Item2 label="14:00 - 17:00" value="key2"/>*/}
                                {/*</Picker>*/}
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

    input: {
        borderColor: "#8F9294",
        borderWidth: 1,
        borderRadius: 5,
        height: 40,
        marginTop: 10,

        marginBottom: 10,
    },

})
