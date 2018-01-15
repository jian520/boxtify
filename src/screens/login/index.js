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


class Login extends Component {
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
                <StatusBar barStyle={'light-content'} />
                <View style={styles.container}>
                    <Header>
                        <Left>
                            <Button
                                transparent
                                onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                                <Icon name="menu" style={{color: "#fff"}}/>
                            </Button>
                        </Left>
                        <Body>
                        <Title  >登錄</Title>
                        </Body>
                        <Right/>

                    </Header>

                    <Content>
                        <Image source={require("../../../assets/login1.png")} style={styles.shadow}/>
                        <Image source={require("../../../assets/login2.png")} style={styles.shadow}/>


                        <Form
                            style={styles.form}
                        >
                            <View style={styles.item}>
                                <Item>
                                    <Icon active name={"person"}/>
                                    <Input placeholder={"帳號"}/>

                                </Item>
                            </View>
                            <View style={styles.item}>
                                <Item fixedLabel>
                                    <Icon active name={"unlock"}/>
                                    <Input placeholder={"密碼"}/>
                                </Item>
                            </View>

                        </Form>

                        <Button block
                                style={styles.btn}
                                onPress={() => this.props.navigation.navigate("Home")}
                        >
                            <Text>登錄</Text>
                        </Button>
                        <Button bordered light
                                style={styles.btnReg}
                                onPress={() => this.props.navigation.navigate("Register")}
                        >
                            <Text style={styles.txt}>註冊</Text>
                        </Button>

                    </Content>
                </View>
            </Container>
        );
    }


}

export default Login;
