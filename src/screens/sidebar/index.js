import React, {Component} from "react";
import {Image} from "react-native";

import {

    Content,
    Text,
    List,
    ListItem,
    Icon,
    Container,
    Left,
    Right,
    Badge,
    Button,
    View,
    StyleProvider,
    getTheme,
    variables,
} from "native-base";
import {Grid, Col} from "react-native-easy-grid";


import styles from "./style";

const datas = [
    {
        name: "預約服務",
        route: "ServiceStepOne",
        icon: "phone-portrait",
        bg: "#C5F442",
    },
    {
        name: "我的預約",
        route: "OrderList",
        icon: "easel",
        bg: "#C5F442",
    },
    {
        name: "關於我們",
        route: "About",
        icon: "phone-portrait",

    },
    {
        name: "收費表",
        route: "Price",
        icon: "phone-portrait",

    },
    {
        name: "常見問題",
        route: "FAQ",
        icon: "phone-portrait",
        bg: "#DA4437",
        types: "4",
    },
    {
        name: "條款及細則",
        route: "terms",
        icon: "phone-portrait",
        bg: "#DA4437",
        types: "4",
    },


    {
        name: "分享給朋友",
        route: "Footer",
        icon: "phone-portrait",
        bg: "#DA4437",
        types: "4",
    },

];

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shadowOffsetWidth: 1,
            shadowRadius: 4,
        };
    }

    render() {
        return (

            <Container>
                <Content bounces={false} style={{flex: 1, backgroundColor: "#fff"}}>
                    <View style={styles.drawerCover}>
                        <Image square style={styles.drawerImage} source={require("../../../assets/login1.png")}/>


                        <Grid style={styles.grid}>

                            <Col size={1}>
                                <Button transparent  onPress={() => this.props.navigation.navigate("Login")}>
                                    <Text>登入</Text>
                                </Button>
                            </Col>
                            <Col size={1}>
                                <Button transparent onPress={() => this.props.navigation.navigate("Register")}>
                                    <Text>註冊</Text>
                                </Button>
                            </Col>
                            <Col size={2}>
                                <Button iconLeft transparent>
                                    <Icon active name="beer"/>
                                    <Text>21750222</Text>
                                </Button>

                            </Col>

                            {/*<Col>*/}
                            {/*<Button transparent>*/}
                            {/*<Text>登出</Text>*/}
                            {/*</Button>*/}
                            {/*</Col>*/}
                        </Grid>

                    </View>
                    <List style={styles.list}
                          dataArray={datas}
                          renderRow={data =>
                              <ListItem style={{backgroundColor: "#2EB5AC"}}
                                        noBorder onPress={() => this.props.navigation.navigate(data.route)}>

                                  <Text style={styles.text}>
                                      {data.name}
                                  </Text>

                              </ListItem>}
                    />
                </Content>
            </Container>
        );
    }
}

export default SideBar;
