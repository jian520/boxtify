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
import API from "../../network/api";

export default class Login extends Component {
    static propTypes = {
        // setUser: React.PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };

    }

    login() {
        var email = this.state.email;
        var password = this.state.password;

        if(!this.isEmail(email)) {
            alert("請輸入正確的郵件格式");
            return;
        }

        if(!this.checkPassword(password)){
            alert("验证码为4位数字");
            return;
        }

        // fetch(API.LOGIN+"?user_name="+email+"&code="+password+"&type=verifiycode")
        //     .then((response) => response.json())
        //     .then((responseData) => {
        //         console.log(responseData)
        //         if(responseData.code==0){
        //             // this._loginSucc(responseData.data);
        //         }else{
        //             alert("验证码错误");
        //         }
        //     })
        //     .done();
    }

    isEmail(str){
        var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
        return reg.test(str);
    }


    checkPassword(code){
        return code&&code.length>4;
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
                                    <Input style={styles.input} placeholder={"電郵地址"} onChangeText={(text) => this.setState({email: text})}/>

                                </Item>
                            </View>
                            <View style={styles.item}>
                                <Item fixedLabel>
                                    <Icon active name={"unlock"}/>
                                    <Input  style={styles.input} placeholder={"密碼"} onChangeText={(text) => this.setState({password: text})}/>
                                </Item>
                            </View>

                        </Form>

                        <Button block
                                style={styles.btn}
                                onPress={() => this.login()}
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

