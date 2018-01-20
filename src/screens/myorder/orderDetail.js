import React, {Component} from "react";
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
import styles from "./styles";

const data =
    {
        orderno: "ORD2018011015414",
        name: "anson",
        status: "未付款"
    }

export default class OrderDetail extends Component {
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
                      <Title>訂單詳細</Title>
                    </Body>
                    <Right/>
                </Header>

                <Content>

                    <ListItem>
                        <Left>
                            <Text>訂單號:</Text>

                        </Left>
                        <Right>
                            <Text numberOfLines={1} note style={{width:200}}>
                                {data.orderno}
                            </Text>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>顧客姓名:</Text>
                        </Left>
                        <Right>
                            <Text numberOfLines={1} note>
                                {data.name}
                            </Text>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>訂單狀態:</Text>
                        </Left>
                        <Right>
                            <Text numberOfLines={1} note>
                                {data.status}
                            </Text>
                        </Right>
                    </ListItem>

                </Content>
            </Container>
        );
    }
}

//訂單號	顧客姓名	服務代碼	服務類型	股務姓名	貨幣	價錢	聯絡人	聯絡電郵	聯絡電話	聯絡地址	訂單狀態	備註	推廣代碼	創建日期	最後修改	查看
