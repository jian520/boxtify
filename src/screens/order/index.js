import React, { Component } from "react";
import {View} from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  List,
  ListItem,
  Text,
  Left,
  Right,
  Body
} from "native-base";
import {Grid, Row, Col} from "react-native-easy-grid";


import styles from "./styles";

const datas = [
    {
        orderno: "ORD2018011015414",
        price: 20,
        status: "未付款"
    },
    {
        orderno: "ORD2018011029492",
        price: 230,
        status: "未付款"
    },

];

export default class OrderList extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
            <Left>
                <Button transparent onPress={() => this.props.navigation.goBack()}>
                    <Icon name="arrow-back" style={{color:"#FFF"}}/>
                </Button>
            </Left>
            <Body>
            <Title>我的預約</Title>
            </Body>
            <Right></Right>
        </Header>

        <Content>
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem  button
                         onPress={() => this.props.navigation.navigate("OrderDetail")}>
                <Left>
                  <Body>
                  <Text>訂單號:</Text>
                    <Text numberOfLines={1} note>
                        {data.orderno}
                    </Text>
                    <Text>價錢:
                    </Text>
                    <Text numberOfLines={1} note>
                        {data.price}
                    </Text>
                  </Body>
                </Left>
                <Right>
                  <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>

                      <Text  style={{marginRight:10}}>{data.status}</Text>
                      <Icon name="arrow-forward" />
                  </View>
                </Right>
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}
