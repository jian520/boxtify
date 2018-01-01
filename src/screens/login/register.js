import React, {Component} from "react";
import {Image, StatusBar} from "react-native";

import {
    Container,
    Content,
    Item,
    Input,
    Button,
    Icon,
    View,
    Text,
    Form,
    Header,
    Left,
    Body, Title, Right
} from "native-base";


import styles from "./styles";


export default class Register extends Component {
    static propTypes = {
        // setUser: React.PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            name: ""
        };

    }


    render() {
        return (
            <Container>
                <StatusBar barStyle="light-content"/>
                <View style={styles.container}>
                    <Header>
                        <Left>
                            <Button
                                transparent
                                onPress={() => this.props.navigation.navigate("DrawerOpen")}
                            >
                                <Icon name="menu" style={{color: "#fff"}}/>
                            </Button>
                        </Left>
                        <Body>
                        <Title  >註冊</Title>
                        </Body>
                        <Right/>

                    </Header>

                    <Content>

                        <Form
                            style={styles.form}
                        >
                            <View style={styles.item}>
                                <Item>

                                    <Input placeholder={"姓名"}/>

                                </Item>
                            </View>
                            <View style={styles.item}>
                                <Item fixedLabel>

                                    <Input placeholder={"電郵地址"}/>
                                </Item>
                            </View>
                            <View style={styles.item}>
                                <Item fixedLabel>

                                    <Input placeholder={"密碼"}/>
                                </Item>
                            </View>
                            <View style={styles.item}>
                                <Item fixedLabel>

                                    <Input placeholder={"確認密碼"}/>
                                </Item>
                            </View>

                        </Form>

                        <Button block
                                style={styles.btn}
                                onPress={() => this.props.navigation.navigate("Login")}
                        >
                            <Text>註冊</Text>
                        </Button>


                    </Content>
                </View>
            </Container>
        );
    }


}
