import React, {Component} from "react";
import {Image, View, StatusBar, Dimensions} from "react-native";

import {Container, Button, H1, H3, Text, Header, Title, Body, Left, Right, Content, Thumbnail} from "native-base";
import {Grid, Row} from "react-native-easy-grid";

import styles from "./styles";

const deviceWidth = Dimensions.get("window").width;
const banner = require("../../../assets/banner.jpg");
const mobileApp = require("../../../assets/mobileApp.png");
const cart = require("../../../assets/cart.png");
const pay = require("../../../assets/pay.png");
const fax = require("../../../assets/fax.png");
const confirm = require("../../../assets/confirm.png");

const box = require("../../../assets/box.png");
const movepack = require("../../../assets/movepack.png");
const shipping = require("../../../assets/shipping.png");
const warehouse = require("../../../assets/warehouse.png");

const cctv = require("../../../assets/cctv.png");
const monitor = require("../../../assets/monitor.png");
const puzzle = require("../../../assets/puzzle.png");
const extinguisher = require("../../../assets/extinguisher.png");
const insurance = require("../../../assets/insurance.png");
const lock = require("../../../assets/lock.png");


class Home extends Component {


    render() {
        return (

            <Container>
                <StatusBar barStyle="light-content"/>

                <Content>
                    <Grid>
                        <Row>
                            <Image
                                style={{
                                    resizeMode: "cover",
                                    height: 177,
                                    width: deviceWidth,
                                }}
                                source={banner}
                            />
                        </Row>
                        <Row>
                            <Body style={{backgroundColor: "#f2f2f2", alignSelf: "center"}}>
                            <H1 style={styles.homeSectionTitle}>1. 預訂</H1>
                            <Text style={styles.iconSectionDesc}>網上或經 App 預訂服務</Text>
                            <Image
                                style={styles.iconSectionImg}
                                source={mobileApp}
                            />
                            <Text style={styles.iconSectionDesc}>檢查帳單</Text>
                            <Image
                                style={styles.iconSectionImg}
                                source={cart}
                            />
                            <Text style={styles.iconSectionDesc}>付款</Text>
                            <Image
                                style={styles.iconSectionImg}
                                source={pay}
                            />
                            <Text style={{height: 60}}/>
                            </Body>

                        </Row>
                        <Row style={styles.section2}>
                            <Body>
                            <H1 style={styles.sectionWhiteTitle}>2. 安排取送</H1>
                            <Text style={styles.sectionWhiteDesc}>致電安排運送日期及特別服務</Text>
                            <Image
                                style={styles.iconSectionImg}
                                source={fax}
                            />
                            <Text style={styles.sectionWhiteDesc}>確認</Text>
                            <Image
                                style={styles.iconSectionImg}
                                source={confirm}
                            />
                            <Text style={{height: 60}}/>

                            </Body>
                        </Row>

                        <Row style={styles.section3}>
                            <Body>
                            <H1 style={styles.sectionWhiteTitle}>3. 收取及倉存</H1>
                            <Text style={styles.sectionWhiteDesc}>儲存箱或包裝物料會預先送達</Text>
                            <Image
                                style={styles.iconSectionImg}
                                source={box}
                            />
                            <Text style={styles.sectionWhiteDesc}>包裝及取件</Text>
                            <Image
                                style={styles.iconSectionImg}
                                source={movepack}
                            />
                            <Text style={styles.sectionWhiteDesc}>運送</Text>
                            <Image
                                style={styles.iconSectionImg}
                                source={shipping}
                            />
                            <Text style={styles.sectionWhiteDesc}>安全送達 Boxtify 倉庫</Text>
                            <Image
                                style={styles.iconSectionImg}
                                source={warehouse}
                            />


                            <Text style={{height: 60}}/>

                            </Body>
                        </Row>
                        <Row style={styles.section4}>
                            <Body>
                            <Text style={{height: 40}}/>
                            <Image
                                style={styles.iconSectionImg}
                                source={cctv}
                            />
                            <H1 style={styles.sectionHorizontal1}>24小時攝錄監控</H1>
                            <Text style={styles.sectionHorizontal2}>24小時閉路電視</Text>
                            <Image
                                style={styles.iconSectionImg}
                                source={monitor}
                            />
                            <H1 style={styles.sectionHorizontal1}>環境監控</H1>
                            <Text style={styles.sectionHorizontal2}>倉庫配備完善溫度、濕度控制、防蟲</Text>

                            <Image
                                style={styles.iconSectionImg}
                                source={puzzle}
                            />
                            <H1 style={styles.sectionHorizontal1}>不設室內間隔</H1>
                            <Text style={styles.sectionHorizontal2}>倉庫不設任何室內間隔、物品則分開存放</Text>

                            <Image
                                style={styles.iconSectionImg}
                                source={extinguisher}
                            />
                            <H1 style={styles.sectionHorizontal1}>防火設備</H1>
                            <Text style={styles.sectionHorizontal2}>自動灑水系統、消防火警鐘及消防喉轆</Text>

                            <Image
                                style={styles.iconSectionImg}
                                source={insurance}
                            />
                            <H1 style={styles.sectionHorizontal1}>免費保險</H1>
                            <Text style={styles.sectionHorizontal2}>已為儲存計劃投保，包括火險及水險</Text>

                            <Image
                                style={styles.iconSectionImg}
                                source={lock}
                            />
                            <H1 style={styles.sectionHorizontal1}>倉庫有限度開放</H1>
                            <Text style={styles.sectionHorizontal2}>除開倉區外，我們的儲存倉庫只限職員進出</Text>


                            <H1 style={styles.sectionHorizontal1}>f @Boxtify</H1>


                            <Text style={{height: 60}}/>

                            </Body>
                        </Row>


                    </Grid>
                </Content>

            </Container>
        );
    }
}

export default Home;
