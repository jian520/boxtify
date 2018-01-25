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
    Body,
    Text,
    H1,
    H2,
    View,
    H3,
    Card,
    CardItem,
    Thumbnail,Footer,Input, Form,Item

} from "native-base";
import {Grid, Row, Col} from "react-native-easy-grid";
import styles from "./styles";
import common from "../../theme/variables/common";

const img = require("../../../assets/service_plan_detail.jpeg");
export default class Moving extends Component {
    //默认属性
    static defaultProps = {
        month: 0,
        price: 0,
    }

    constructor(props) {
        super(props);

        this.state = {
            month: 0,
            totalPrice: 0,
        };
    }


    cal(month) {
        var reg = new RegExp("^[0-9]*$");

        if(!reg.test(month)){
            alert("請輸入有效月數");
            return
        }
        // else if(month.length == 0) {
        //     alert("請輸入月數");
        //     return
        // }
        this.setState({
            month:  month
        });

        var price = 0
        if(month <=5  ) {
            price =  month * 840
        } else if( month>=6 && month <=11  ) {
            price =  month * 756
        }else if( month>=12  ) {
            price =  month * 672
        }

        this.setState({
            totalPrice:  price
        });

    }

    next() {
        if(this.state.month == 0) {
            alert("請輸入月數");
            return
        }
        this.props.navigation.navigate("Schedule")
    }


    render() {
        return (

            <Container>
                <StatusBar barStyle="light-content"/>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" style={{color:"#FFF"}}/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>選擇計劃</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.next()}>
                            <Title>下一步</Title>
                        </Button>
                    </Right>
                </Header>

                <Content padder>

                    <Text style={styles.headTitle}>若不清楚哪個計劃最適合您，請向客戶服務主任查詢：info@Boxtify.com.hk</Text>


                    <Card style={styles.mb}>
                        <CardItem>

                            <Grid>
                                <Col size={1}>
                                    <Thumbnail square size={80} source={img}/>
                                </Col>
                                <Col size={2}>
                                    <Body
                                        style={{
                                            justifyContent: 'center',
                                        }}>
                                    <Text style={{ marginBottom: 10, color:common.colorB}}>12平方呎(實用)</Text>
                                    <Text numberOfLines={1} note>每月 $840</Text>
                                    <Text numberOfLines={1} note>半年 $756</Text>
                                    <Text numberOfLines={1} note>一年 $672</Text>


                                    </Body>
                                </Col>
                                <Col size={2}><Body style={{
                                    justifyContent: 'center',

                                }}>

                                    <Item regular>
                                      <Input  style={{height:30}} placeholder={"請輸入月數"}
                                              onChangeText={(e) => this.cal(e)}/>
                                    </Item>


                                </Body>
                                </Col>
                            </Grid>
                        </CardItem>
                    </Card>

                </Content>

                <Footer style={{backgroundColor: "#00c4b4", }}>
                    <Left>
                        <Text style={{color: "#fff" , marginLeft:10}}>儲存月費預算</Text>
                    </Left>
                    <Right>
                        <H1 style={{color: "#fff", marginRight:10 }}>${this.state.totalPrice}</H1>
                    </Right>
                </Footer>

            </Container>
        );
    }
}

