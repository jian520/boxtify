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
    Body, Text, H2, View, H3, Form, Item, Input, Picker,
} from "native-base";
import {Grid, Row, Col} from "react-native-easy-grid";


export default class StepOne extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }



    render() {
        return (

            <Container>
                <StatusBar barStyle={'light-content'} />

                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Title>返回</Title>
                        </Button>
                    </Left>
                    <Body>
                    <Title>我的預約</Title>
                    </Body>
                    <Right></Right>

                </Header>

                <Content>

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
        height:40,
        marginTop:10,

        marginBottom:10,
    },

})
