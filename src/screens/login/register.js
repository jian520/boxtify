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
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        };

    }

    reg() {
        var name = this.state.name;
        var email = this.state.email;
        var password = this.state.password;
        var confirmPassword = this.state.confirmPassword;

        if(!this.checkName(name)) {
            alert("請輸入4位數以上名稱");
            return;
        }

        if(!this.isEmail(email)) {
            alert("請輸入正確的郵件格式");
            return;
        }

        if(!this.checkPassword(password)){
            alert("請輸入4位數以上的密碼");
            return;
        }

        if(!this.checkConfirmPassword(password, confirmPassword)){
            alert("兩次輸入的密碼不同");
            return;
        }
    }

    checkName(name){
        return name&&name.length>4;
    }

    isEmail(str){
        var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
        return reg.test(str);
    }

    checkPassword(password){
        return password&&password.length>4;
    }

    checkConfirmPassword(pwd1, pwd2){

        return pwd1 === pwd2;
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
                                onPress={() => this.props.navigation.goBack()}
                            >
                                <Icon name="arrow-back" style={{color:"#FFF"}}/>
                            </Button>
                        </Left>
                        <Body>
                        <Title>註冊</Title>
                        </Body>
                        <Right/>

                    </Header>

                    <Content>

                        <Form style={styles.form}>
                            <View style={styles.item}>
                                <Item>
                                    <Input  style={styles.input} placeholder={"姓名"} onChangeText={(text) => this.setState({name: text})}/>
                                </Item>
                            </View>
                            <View style={styles.item}>
                                <Item fixedLabel>
                                    <Input  style={styles.input} placeholder={"電郵地址"} onChangeText={(text) => this.setState({email: text})}/>
                                </Item>
                            </View>
                            <View style={styles.item}>
                                <Item fixedLabel>

                                    <Input  style={styles.input} placeholder={"密碼"} onChangeText={(text) => this.setState({password: text})}/>
                                </Item>
                            </View>
                            <View style={styles.item}>
                                <Item fixedLabel>

                                    <Input  style={styles.input} placeholder={"確認密碼"} onChangeText={(text) => this.setState({confirmPassword: text})}/>
                                </Item>
                            </View>

                        </Form>

                        <Button block
                                style={styles.btn}
                                onPress={() => this.reg()}
                        >
                            <Text>註冊</Text>
                        </Button>


                    </Content>
                </View>
            </Container>
        );
    }


}
