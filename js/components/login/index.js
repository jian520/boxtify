import React, { Component } from "react";
import { Image } from "react-native";

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
    // this.renderInput = this.renderInput.bind(this);
  }
  //
  // setUser(name) {
  //   this.props.setUser(name);
  // }

  renderInput({
    input,
    label,
    type,
    meta: { touched, error, warning },
    inputProps
  }) {
    var hasError = false;
    if (error !== undefined) {
      hasError = true;
    }
    return (
      <Item error={hasError}>
        <Icon active name={input.name === "email" ? "person" : "unlock"} />
        <Input
          placeholder={input.name === "email" ? "EMAIL" : "PASSWORD"}
          {...input}
        />
        {hasError
          ? <Item style={{ borderColor: "transparent" }}>
              <Icon active style={{ color: "red", marginTop: 5 }} name="bug" />
              <Text style={{ fontSize: 15, color: "red" }}>{error}</Text>
            </Item>
          : <Text />}
      </Item>
    );
  }


  render() {
    return (
      <Container>

        <View style={styles.container}>
            <Header  style={{   backgroundColor: "#2EB5AC"  }}>
                <Left>
                    <Button
                        transparent
                        onPress={() => this.props.navigation.navigate("DrawerOpen")}
                    >
                        <Icon name="menu"  style={{   color: "#fff" }}/>
                    </Button>
                </Left>
                <Body>
                <Title style={{   color: "#fff" }}  >登錄</Title>
                </Body>
                <Right />

            </Header>

          <Content>
              <Image source={require("../../../img/logo.jpg")} style={styles.shadow} />


              <View style={styles.bg}>
                  <Form>
                      <Item fixedLabel>
                          <Icon active name={"person"} />
                          <Input  placeholder={"帳號"}  />

                      </Item>
                      <Item fixedLabel>
                          <Icon active name={"unlock"} />
                          <Input  placeholder={"密碼"} />
                      </Item>

                  </Form>

                <Button
                  style={styles.btn}
                  onPress={() => this.props.navigation.navigate("Home")}
                >
                  <Text>登錄</Text>
                </Button>
              </View>

          </Content>
        </View>
      </Container>
    );
  }


}

export default Login;