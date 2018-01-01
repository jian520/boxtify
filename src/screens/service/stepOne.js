import React, {Component} from "react";
import {Image, StyleSheet} from "react-native";

import {
    Container,
    Content,
    Header,
    Title,
    Button,
    Icon,
    Left,
    Right,
    Body, Text, H1, H2, View
} from "native-base";
import {Grid, Row, Col} from "react-native-easy-grid";
import ServiceStepTwo from "./stepTwo";


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
                    <Title>請選擇服務</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.props.navigation.navigate("ServiceStepTwo")}>
                            <Title>下一步</Title>
                        </Button>
                    </Right>
                </Header>
                <View style={{height: 40, backgroundColor: "#2EB5AC"}}>
                    <Image source={require("../../../assets/serviceheader1.png")}
                           style={styles.img}
                    />
                </View>

                <Grid style={{marginTop: 100, alignSelf: 'center'}}>

                    <Row>

                        <Button transparent onPress={() => this.props.navigation.navigate("ServiceStepTwo")}>

                            <Col>

                                <Image source={require("../../../assets/service1.png")}
                                       style={styles.img}
                                />

                                <H2 style={styles.h2}>迷你箱服務</H2>
                                <Title style={styles.title2}>適合儲存中小型物件（25公斤內）</Title>
                            </Col>
                        </Button>


                    </Row>

                    <Row>
                        <Button transparent onPress={() => this.props.navigation.navigate("ServiceStepTwo")}>


                            <Col>
                                <Image source={require("../../../assets/service2.png")} style={{alignSelf: 'center'}}/>
                                <H2 style={styles.h2}>迷你倉服務</H2>
                                <Text style={styles.title2}>適合儲存傢俬或大型物件</Text>
                            </Col>
                        </Button>


                    </Row>
                    <Row>
                        <Button transparent onPress={() => this.props.navigation.navigate("ServiceStepTwo")}>


                            <Col>
                                <Image source={require("../../../assets/service3.png")} style={{alignSelf: 'center'}}/>
                                <H2 style={styles.h2}>移動倉服務</H2>
                                <Text style={styles.title2}>適合儲存傢俬或大型物件</Text>
                            </Col>
                        </Button>


                    </Row>

                </Grid>

            </Container>
        );
    }
}


const styles = StyleSheet.create({
    title: {
        color: "#87634B"
    },
    title2: {
        color: "#87634B",
        alignSelf: 'center'
    },
    img: {
        alignSelf: 'center',

    },
    h2: {
        alignSelf: 'center',
        color: "#2EB5AC"
    },

})
