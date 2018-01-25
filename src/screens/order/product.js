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
    Thumbnail,
    Footer,  Toast
} from "native-base";
import {Grid, Row, Col} from "react-native-easy-grid";
import Stepper from ".//stepper";
import common from "../../theme/variables/common";
import styles from "./styles";
const img = require("../../../assets/service_plan_detail.jpeg");

export default class Product extends Component {


    constructor(props) {
        super(props);

//alert(this.props.navigation.state.params.info)

        this.state = {
            shadowOffsetWidth: 1,
            shadowRadius: 4,
        };
    }

    next() {

        Toast.show({
            text: "請選擇計劃",
        })
        if (true) {
            this.props.navigation.navigate("Schedule")
        }
    }


    render() {
        return (

            <Container>
                <StatusBar barStyle="light-content"/>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" style={{color: "#FFF"}}/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>請選擇類別</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.next()}>
                            <Title>下一步</Title>
                        </Button>
                    </Right>
                </Header>

                <Content padder>

                    <Text style={styles.headTitle}>若不清楚需要多少個儲物箱，無須擔心！我們會按照您實際使用的數量計算。</Text>


                    <Card style={styles.mb}>
                        <CardItem>

                            <Grid>
                                <Col size={1}>
                                    <Thumbnail square size={60} source={img}/>
                                </Col>
                                <Col size={2}>
                                    <Body
                                        style={{
                                            justifyContent: 'center',
                                        }}>
                                    <Text style={{ marginBottom: 10, color:common.colorB}}>文件箱</Text>
                                    <Text numberOfLines={1} note  >$29 每箱/每月</Text>
                                    </Body>
                                </Col>
                                <Col size={2}><Body style={{
                                    justifyContent: 'center',

                                }}>
                                <Stepper
                                    onChange={(val) => {
                                        Console.log(val)
                                    }}
                                    defaultValue={0}
                                    min={1}
                                    max={100}
                                    step={1}/>
                                </Body>
                                </Col>
                            </Grid>
                        </CardItem>
                    </Card>
                    <Card style={styles.mb}>
                        <CardItem>

                            <Grid>
                                <Col size={1}>
                                    <Thumbnail square size={60} source={img}/>
                                </Col>
                                <Col size={2}>
                                    <Body
                                        style={{
                                            justifyContent: 'center',
                                        }}>
                                    <Text style={{ marginBottom: 10, color:common.colorB}}>標準儲物箱</Text>
                                    <Text numberOfLines={1} note >$49每箱/每月</Text>
                                    </Body>
                                </Col>
                                <Col size={2}><Body style={{
                                    justifyContent: 'center',
                                }}>
                                <Stepper
                                    onChange={(val) => {
                                        Console.log(val)
                                    }}
                                    defaultValue={0}
                                    min={1}
                                    max={100}
                                    step={1}/>
                                </Body>
                                </Col>
                            </Grid>
                        </CardItem>
                    </Card>
                    <Card style={styles.mb}>
                        <CardItem>

                            <Grid>
                                <Col size={1}>
                                    <Thumbnail square size={60} source={img}/>
                                </Col>
                                <Col size={2}>
                                    <Body
                                        style={{
                                            justifyContent: 'center',
                                        }}>
                                    <Text style={{ marginBottom: 10,color:common.colorB}}>大型物品</Text>
                                    <Text numberOfLines={1} note >$69每箱/每月</Text>
                                    </Body>
                                </Col>
                                <Col size={2}><Body style={{
                                    justifyContent: 'center',
                                }}>
                                <Stepper
                                    onChange={(val) => {
                                        Console.log(val)
                                    }}
                                    defaultValue={0}
                                    min={1}
                                    max={100}
                                    step={1}/>
                                </Body>
                                </Col>
                            </Grid>
                        </CardItem>
                    </Card>
                    <Card style={styles.mb}>
                        <CardItem>

                            <Grid>
                                <Col size={1}>
                                    <Thumbnail square size={60} source={img}/>
                                </Col>
                                <Col size={2}>
                                    <Body
                                        style={{
                                            justifyContent: 'center',
                                        }}>
                                    <Text style={{ marginBottom: 10, color:common.colorB}}>掛衣箱</Text>
                                    <Text numberOfLines={1} note  >$89每箱/每月</Text>
                                    </Body>
                                </Col>
                                <Col size={2}><Body style={{
                                    justifyContent: 'center',
                                }}>
                                <Stepper
                                    onChange={(val) => {
                                        Console.log(val)
                                    }}
                                    defaultValue={0}
                                    min={1}
                                    max={100}
                                    step={1}/>
                                </Body>
                                </Col>
                            </Grid>
                        </CardItem>
                    </Card>
                </Content>
                <Footer style={{backgroundColor:common.colorA }}>
                    <Left>
                        <Text style={{color: "#fff" , marginLeft:10}}>儲存月費預算</Text>
                    </Left>
                    <Right>
                        <H1 style={{color: "#fff", marginRight:10 }}>$0</H1>
                    </Right>

                </Footer>


            </Container>
        );
    }
}
