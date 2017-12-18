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
    Body, Text, H2, View, H3
} from "native-base";
import {Grid, Row, Col} from "react-native-easy-grid";


export default class StepOne extends Component {
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
                    <Title>請選擇類別</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => alert('abc')}>
                            <Title>下一步</Title>
                        </Button>
                    </Right>
                </Header>
                <View style={{height: 40, backgroundColor: "#2EB5AC"}}>
                    <Image source={require("../../../assets/serviceheader2.png")}
                           style={styles.img}
                    />
                </View>

                <View style={{
                    marginTop: 10,
                    marginLeft: 20,
                    marginRight: 20,

                }}>
                    <Text style={{alignSelf: 'center', color: "#A4A7A8"}}>適合儲存中小型物件（25公斤內）</Text>
                    <Text style={{alignSelf: 'center', color: "#A4A7A8"}}>免費提供耐用儲物膠箱</Text>
                    <Text style={{alignSelf: 'center', color: "#A4A7A8"}}>1個月最短儲存期（不包括優惠月份）</Text>
                    <H3 style={{
                        marginTop: 20,
                        alignSelf: 'center',
                        color: "#2EB5AC"
                    }}>若不清楚需要多少個儲物箱，無須擔心！我們會按照您實際使用的數量計算。</H3>
                </View>


                <Grid style={{marginTop: 20}}>

                    <Row>

                        <Col style={{
                            marginLeft: 20,
                            marginRight: 10, marginBottom: 10, borderWidth: 1, borderColor: "#999999"
                        }}
                        >

                            <Image source={require("../../../assets/servicecate1.png")}
                                   style={styles.img}
                            />

                            <H2 style={styles.h2}>文件箱</H2>
                            <Text style={styles.txt}>每箱每月$29</Text>


                            <Row style={{
                                alignItems: "center"

                            }}>
                                <Col size={1} style={{ }}>

                                    <Button full style={{flex: 1, backgroundColor: "#2EB5AC"}}>
                                        <H3 style={{color: "#fff"}}>-</H3>
                                    </Button>

                                </Col>
                                <Col size={2.5} style={{ }}>
                                    <View style={{
                                        flex: 1,
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: "#866447"
                                    }}>
                                        <H3 style={{

                                            alignSelf: "center",
                                            color: "#fff"
                                        }}>0</H3>
                                    </View>

                                </Col>
                                <Col size={1} style={{ }}>
                                    <Button full style={{flex: 1, backgroundColor: "#2EB5AC"}}>
                                        <H3 style={{color: "#fff"}}>+</H3>
                                    </Button>
                                </Col>
                            </Row>


                        </Col>

                        <Col>
                            <View style={{marginLeft: 10, marginRight: 20, borderWidth: 1, borderColor: "#2EB5AC"}}>
                                <Image source={require("../../../assets/servicecate2.png")}
                                       style={styles.img}
                                />

                                <H2 style={styles.h2}>標準儲物箱</H2>
                                <Text style={styles.txt}>每箱每月$49</Text>
                            </View>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <View style={{marginLeft: 20, marginRight: 10, borderWidth: 1, borderColor: "#2EB5AC"}}>

                                <Image source={require("../../../assets/servicecate3.png")}
                                       style={{alignSelf: 'center'}}/>
                                <H2 style={styles.h2}>大型物品</H2>
                                <Text style={styles.txt}>每件每月$69</Text>
                            </View>
                        </Col>

                        <Col>
                            <View style={{marginLeft: 10, marginRight: 20, borderWidth: 1, borderColor: "#2EB5AC"}}>

                                <Image source={require("../../../assets/servicecate4.png")}
                                       style={{alignSelf: 'center'}}/>
                                <H2 style={styles.h2}>掛衣箱</H2>
                                <Text style={styles.txt}>每箱每月$89</Text>
                            </View>
                        </Col>
                    </Row>
                    <Row>
                        <View style={{
                            height: 40,
                            marginLeft: 20,
                            marginRight: 20,
                            borderWidth: 1,
                            borderColor: "#2EB5AC"
                        }}>
                            <H2 style={{alignSelf: 'center'}}>儲存月費預算</H2>
                        </View>


                    </Row>


                </Grid>

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
