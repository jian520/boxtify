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
    Body, Text, H2, View, H3, Form, Item, Input, ListItem,
} from "native-base";
import {Grid, Row, Col} from "react-native-easy-grid";
import Picker from 'react-native-picker';
import area from '../../../src/area';
import common from "../../theme/variables/common";
import styles from "./styles";

export default class Schedule extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectArea: "請選擇區域 地區",
            selectDate: "請選擇日子",
            selectTime: "請選擇時間",
            selectChannel: "請選擇途徑",
        };
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
            pickerToolBarBg:  [46,181,172, 1],
            pickerTitleColor:  [255,255,255, 1],
            pickerCancelBtnColor: [255,255,255, 1],
            pickerConfirmBtnColor: [255,255,255, 1],
            onPickerConfirm: pickedValue => {
                console.log('area', pickedValue[0] + " " + pickedValue[1]);


                this.setState({
                    selectArea: pickedValue[0] + " " + pickedValue[1]
                });

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

    createDateData() {
        let date = [];
        for(let i=2018;i<2030;i++){
            let month = [];
            for(let j = 1;j<13;j++){
                let day = [];
                if(j === 2){
                    for(let k=1;k<29;k++){
                        day.push(k+'日');
                    }
                    //Leap day for years that are divisible by 4, such as 2000, 2004
                    if(i%4 === 0){
                        day.push(29+'日');
                    }
                }
                else if(j in {1:1, 3:1, 5:1, 7:1, 8:1, 10:1, 12:1}){
                    for(let k=1;k<32;k++){
                        day.push(k+'日');
                    }
                }
                else{
                    for(let k=1;k<31;k++){
                        day.push(k+'日');
                    }
                }
                let _month = {};
                _month[j+'月'] = day;
                month.push(_month);
            }
            let _date = {};
            _date[i+'年'] = month;
            date.push(_date);
        }
        return date;
    }

    showDatePicker() {
        Picker.init({
            pickerData: this.createDateData(),
            pickerConfirmBtnText: "確定",
            pickerTitleText: "請選擇日子",
            pickerCancelBtnText: "取消",
            pickerToolBarBg:  [46,181,172, 1],
            pickerTitleColor:  [255,255,255, 1],
            pickerCancelBtnColor: [255,255,255, 1],
            pickerConfirmBtnColor: [255,255,255, 1],
            onPickerConfirm: (pickedValue, pickedIndex) => {
                console.log('date', pickedValue, pickedIndex);

                this.setState({
                    selectDate: pickedValue[0] + pickedValue[1] + pickedValue[2]
                });
            },
            onPickerCancel: (pickedValue, pickedIndex) => {
                console.log('date', pickedValue, pickedIndex);
            },
            onPickerSelect: (pickedValue, pickedIndex) => {
                console.log('date', pickedValue, pickedIndex);
            }
        });
        Picker.show();
    }

    showTimePicker() {
        Picker.init({
            pickerData: ["10:00 - 14:00", "14:00 - 17:00"],
            pickerConfirmBtnText: "確定",
            pickerTitleText: "請選擇時間",
            pickerCancelBtnText: "取消",
            pickerToolBarBg:  [46,181,172, 1],
            pickerTitleColor:  [255,255,255, 1],
            pickerCancelBtnColor: [255,255,255, 1],
            pickerConfirmBtnColor: [255,255,255, 1],
            onPickerConfirm: pickedValue => {
                console.log('area', pickedValue[0]);


                this.setState({
                    selectTime: pickedValue[0]
                });

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

    showChannelPicker() {
        Picker.init({
            pickerData: ["報章雜誌", "電視廣告", "家人/ 朋友", "街頭宣傳活動", "網頁廣告", "搜尋引擎", "港鐵", "的士/ 輕型貨車", "Facebook",
                "Instagram", "Youtube", "領英 (LinkedIn)", "接待處展示牌", "網上討論區", "其他"],
            pickerConfirmBtnText: "確定",
            pickerTitleText: "請選擇時間",
            pickerCancelBtnText: "取消",
            pickerToolBarBg:  [46,181,172, 1],
            pickerTitleColor:  [255,255,255, 1],
            pickerCancelBtnColor: [255,255,255, 1],
            pickerConfirmBtnColor: [255,255,255, 1],

            onPickerConfirm: pickedValue => {
                console.log('area', pickedValue[0]);

                this.setState({
                    selectChannel: pickedValue[0]
                });


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
                        <Button transparent onPress={() => this.props.navigation.navigate("Overview")}>
                            <Title>下一步</Title>
                        </Button>
                    </Right>
                </Header>

                <Content>
                    <Title style={ styles.headTitle}>填寫以下資料</Title>

                    <ListItem itemDivider>
                        <Title style={ {color:common.colorB}}>個人資料</Title>
                    </ListItem>
                    <ListItem>
                        <Input style={styles.input} placeholder={"姓名"}/>
                    </ListItem>
                    <ListItem>
                        <Input style={styles.input} placeholder={"聯絡電話"}/>
                    </ListItem>
                    <ListItem itemDivider>
                        <Title style={ {color:common.colorB}}>運送地址</Title>
                    </ListItem>
                    <ListItem>
                        <Input style={styles.input} placeholder={"地址(第一行)"}/>
                    </ListItem>
                    <ListItem>
                        <Input style={styles.input} placeholder={"地址(第二行)"}/>
                    </ListItem>
                    <ListItem>
                        <Button  style={{width: 200, backgroundColor: common.colorA}} onPress={() => this.showAreaPicker()}>
                            <Text >{this.state.selectArea}</Text>
                        </Button>
                    </ListItem>
                    <ListItem itemDivider>
                        <Title style={ {color:common.colorB}}>收取物品並存倉</Title>
                    </ListItem>
                    <ListItem>
                        {/*<DatePicker*/}
                            {/*style={{width: 150}}*/}
                            {/*date={this.state.date}*/}
                            {/*mode="date"*/}
                            {/*placeholder="請選擇日子"*/}
                            {/*format="YYYY-MM-DD"*/}
                            {/*// minDate="2016-05-01"*/}
                            {/*// maxDate="2016-06-01"*/}
                            {/*confirmBtnText="確定"*/}
                            {/*cancelBtnText="取消"*/}
                            {/*showIcon={false}*/}

                            {/*customStyles={{*/}

                                {/*dateInput: {*/}
                                    {/*marginLeft: 0*/}
                                {/*}*/}
                                {/*// ... You can check the source to find the other keys.*/}
                            {/*}}*/}
                            {/*onDateChange={(date) => {*/}
                                {/*this.setState({date: date})*/}
                            {/*}}*/}
                        {/*/>*/}


                        <Button  style={{width: 150, backgroundColor: "#2EB5AC"}} onPress={() => this.showDatePicker()}>
                            <Text>{this.state.selectDate}</Text>
                        </Button>
                        <Button  style={{width: 150, marginLeft:10, backgroundColor: "#2EB5AC"}} onPress={() => this.showTimePicker()}>
                            <Text>{this.state.selectTime}</Text>
                        </Button>

                    </ListItem>
                    <ListItem itemDivider>
                        <Title style={ {color:common.colorB}}>特別派送指示</Title>
                    </ListItem>
                    <ListItem>
                        <Input style={styles.input} placeholder={"例如： '到達時請來電通知'"}/>
                    </ListItem>
                    <ListItem itemDivider>
                        <Title style={ {color:common.colorB}}>從何途徑認識BOXTIFY？</Title>
                    </ListItem>
                    <ListItem>
                        <Button  style={{width: 150, backgroundColor: "#2EB5AC"}} onPress={() => this.showChannelPicker()}>
                            <Text>{this.state.selectChannel}</Text>
                        </Button>
                    </ListItem>




                </Content>


            </Container>
        );
    }
}


