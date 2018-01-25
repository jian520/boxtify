import React, {Component} from "react";
import {Image, PixelRatio, StyleSheet} from "react-native";

import {
    Container,
    Content,
    Header,
    Title,
    Subtitle,
    Button,
    Icon,
    Left,
    Right,
    Body, Text, H1, H2,H3, View,
    Card,
    CardItem,
    Thumbnail,
} from "native-base";
import styles from "./styles";
import {Grid, Row, Col} from "react-native-easy-grid";
import common from "../../theme/variables/common";


const imgA = require("../../../assets/boxtify_box.png");
const imgB = require("../../../assets/boxtify_warehouse.png");
const imgC = require("../../../assets/boxtify_move.png");

export default class StepOne extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                            <Icon name="menu" style={{color: "#fff"}}/>
                        </Button>
                    </Left>
                    <Body>
                       <Title style={styles.title}>選擇服務</Title>
                    </Body>
                    <Right>
                        {/*<Button transparent onPress={() => this.props.navigation.navigate("ServiceStepTwo",{info:'传值过去'})}>*/}
                        {/*<Title>下一步</Title>*/}
                        {/*</Button>*/}
                    </Right>
                </Header>

                <Content padder>

                    <Text style={styles.headTitle}>選擇儲存計劃</Text>
                    <Card style={styles.mb}>
                        <CardItem bordered>
                            <Left>
                                <Title style={{  color: common.colorA}}>迷你箱服務</Title>
                            </Left>
                            <Right>
                                <Button transparent
                                        onPress={() => this.props.navigation.navigate("Product", {info: '传值过去'})}>
                                    <Title style={{color:common.colorC}}>選擇</Title>
                                </Button>
                            </Right>
                        </CardItem>
                        <CardItem>
                            <Body>

                            <Image
                                style={{
                                    alignSelf: "center",
                                    height: 100,
                                    width: 100,
                                    resizeMode: "cover",

                                    marginVertical: 5
                                }}
                                source={imgA}
                            />
                            <Text style={styles.text}>適合儲存中小型物件（25公斤內）</Text>
                            <Text style={styles.text}>免費提供耐用儲物膠箱</Text>
                            <Text style={styles.text}>1個月最短儲存期（不包括優惠月份）</Text>

                            </Body>
                        </CardItem>
                    </Card>


                    <Card style={styles.mb}>
                        <CardItem bordered>
                            <Left>
                                <Title style={{  color: common.colorA}}>迷你倉服務</Title>
                            </Left>
                            <Right>
                                <Button transparent
                                        onPress={() => this.props.navigation.navigate("Plan", {info: '传值过去'})}>
                                    <Title style={{color:common.colorC}}>  選擇</Title>
                                </Button>
                            </Right>
                        </CardItem>

                        <CardItem>
                            <Body>
                            <Image
                                style={{
                                    alignSelf: "center",
                                    height: 100,
                                    width: 100,
                                    resizeMode: "cover",

                                    marginVertical: 5
                                }}
                                source={imgC}
                            />
                            <Text style={styles.text}>適合儲存傢俬或大型物件</Text>
                            <Text style={styles.text}>免費提供包裝物料</Text>
                            <Text style={styles.text}>3個月最短儲存期（不包括優惠月份）</Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={styles.mb}>
                        <CardItem bordered>
                            <Left>
                                <Title style={{  color: common.colorA}}>移動倉服務</Title>
                            </Left>
                            <Right>
                                <Button transparent
                                        onPress={() => this.props.navigation.navigate("Moving", {info: '传值过去'})}>
                                    <Title style={{color:common.colorC}}>  選擇</Title>
                                </Button>
                            </Right>
                        </CardItem>

                        <CardItem>
                            <Body>
                            <Image
                                style={{
                                    alignSelf: "center",
                                    height: 100,
                                    width: 100,
                                    resizeMode: "cover",

                                    marginVertical: 5
                                }}
                                source={imgB}
                            />
                            <Text style={styles.text}>適合儲存傢俬或大型物件</Text>
                            <Text style={styles.text}>免費提供包裝物料</Text>
                            <Text style={styles.text}>3個月最短儲存期（不包括優惠月份）</Text>
                            </Body>
                        </CardItem>

                    </Card>
                </Content>
            </Container>
        );
    }
}

