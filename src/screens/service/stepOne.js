import React, {Component} from "react";
import {Image} from "react-native";

import {
    Container,
    Header,
    Title,
    Button,
    Icon,
    Left,
    Right,
    Body, Text, H2
} from "native-base";
import {Grid, Row, Col} from "react-native-easy-grid";


class RowNB extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="menu" style={{color: "#fff"}}/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>请</Title>
                    </Body>
                    <Right/>
                </Header>

                <Grid style={{alignSelf: 'center'}} >

                    <Row>
                        <Col  >
                            <Image source={require("../../../assets/service1.png")}  style={{marginTop:30, alignSelf: 'center'}}
                            />

                            <H2  style={{alignSelf: 'center'}}>迷你箱服務</H2>
                            <Text  style={{alignSelf: 'center'}}>適合儲存中小型物件（25公斤內）</Text></Col>

                    </Row>


                    <Row  >
                        <Col>
                            <Image source={require("../../../assets/service2.png")}  style={{alignSelf: 'center'}}/>
                            <H2  style={{alignSelf: 'center'}}>迷你倉服務</H2>
                            <Text  style={{alignSelf: 'center'}}>適合儲存傢俬或大型物件</Text></Col>


                    </Row>
                    <Row>
                        <Col>
                            <Image source={require("../../../assets/service3.png")}  style={{alignSelf: 'center'}}/>
                            <H2  style={{alignSelf: 'center'}}>移動倉服務</H2>
                            <Text  style={{alignSelf: 'center'}}>適合儲存傢俬或大型物件</Text></Col>


                    </Row>

                </Grid>
                <
                /Container>
                );
                }
                }

                export default RowNB;
