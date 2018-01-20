import React, {Component} from "react";
import {Image, StyleSheet} from "react-native";

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
    Body, Text, H1, H2, View,
    Card,
    CardItem,
    Thumbnail,
} from "native-base";
import styles from "./styles";
import {Grid, Row, Col} from "react-native-easy-grid";
import ServiceStepTwo from "./product";

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
                    <Subtitle style={styles.title}>選擇儲存計劃</Subtitle>
                    </Body>
                    <Right>
                        {/*<Button transparent onPress={() => this.props.navigation.navigate("ServiceStepTwo",{info:'传值过去'})}>*/}
                        {/*<Title>下一步</Title>*/}
                        {/*</Button>*/}
                    </Right>
                </Header>


                <Content padder>
                    <Card style={styles.mb}>
                        <CardItem bordered>
                            <Left>
                                <H2 style={styles.h2}>迷你箱服務</H2>
                            </Left>
                            <Right>
                                <Button style={{backgroundColor: "#2EB5AC", width: 50}}
                                        onPress={() => this.props.navigation.navigate("Product", {info: '传值过去'})}>
                                    <Title>  選擇</Title>
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
                            <H2 style={styles.h2}>迷你倉服務</H2>
                            </Left>
                            <Right>
                                <Button style={{backgroundColor: "#2EB5AC", width: 50}}
                                        onPress={() => this.props.navigation.navigate("Plan", {info: '传值过去'})}>
                                    <Title>  選擇</Title>
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
                    <Card style={styles.mb}>
                        <CardItem bordered>
                            <Left>
                            <H2 style={styles.h2}>移動倉服務</H2>
                            </Left>
                            <Right>
                                <Button style={{backgroundColor: "#2EB5AC", width: 50}}
                                        onPress={() => this.props.navigation.navigate("Moving", {info: '传值过去'})}>
                                    <Title >  選擇</Title>
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

                </Content>


                {/*<View style={{height: 40, backgroundColor: "#2EB5AC"}}>*/}
                {/*<Image source={require("../../../assets/serviceheader1.png")}*/}
                {/*style={styles.img}*/}
                {/*/>*/}
                {/*</View>*/}


                {/*<Grid style={{marginTop: 100, alignSelf: 'center'}}>*/}

                {/*<Row>*/}

                {/*<Button transparent onPress={() => this.props.navigation.navigate("ServiceStepTwo")}>*/}

                {/*<Col>*/}

                {/*<Image source={require("../../../assets/service1.png")}*/}
                {/*style={styles.img}*/}
                {/*/>*/}

                {/*<H2 style={styles.h2}>迷你箱服務</H2>*/}
                {/*<Title style={styles.title2}>適合儲存中小型物件（25公斤內）</Title>*/}
                {/*</Col>*/}
                {/*</Button>*/}


                {/*</Row>*/}

                {/*<Row>*/}
                {/*<Button transparent onPress={() => this.props.navigation.navigate("ServiceStepTwo")}>*/}


                {/*<Col>*/}
                {/*<Image source={require("../../../assets/service2.png")} style={{alignSelf: 'center'}}/>*/}
                {/*<H2 style={styles.h2}>迷你倉服務</H2>*/}
                {/*<Text style={styles.title2}>適合儲存傢俬或大型物件</Text>*/}
                {/*</Col>*/}
                {/*</Button>*/}


                {/*</Row>*/}
                {/*<Row>*/}
                {/*<Button transparent onPress={() => this.props.navigation.navigate("ServiceStepTwo")}>*/}


                {/*<Col>*/}
                {/*<Image source={require("../../../assets/service3.png")} style={{alignSelf: 'center'}}/>*/}
                {/*<H2 style={styles.h2}>移動倉服務</H2>*/}
                {/*<Text style={styles.title2}>適合儲存傢俬或大型物件</Text>*/}
                {/*</Col>*/}
                {/*</Button>*/}


                {/*</Row>*/}

                {/*</Grid>*/}


            </Container>
        );
    }
}

//
// const styles = StyleSheet.create({
//     title: {
//         color: "#87634B"
//     },
//     title2: {
//         color: "#87634B",
//         alignSelf: 'center'
//     },
//     img: {
//         alignSelf: 'center',
//
//     },
//     h2: {
//         alignSelf: 'center',
//         color: "#2EB5AC"
//     },
//
// })
