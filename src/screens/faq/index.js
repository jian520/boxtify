import React, {Component} from "react";
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    ListItem,
    Text,
    Left,
    Right,
    Body
} from "native-base";
import styles from "./styles";

class NHListDivider extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button transparent   onPress={() => this.props.navigation.navigate("DrawerOpen")}>


                            <Icon name="menu" style={{color: "#fff"}}/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>常見問題</Title>
                    </Body>
                    <Right/>
                </Header>

                <Content>
                    <ListItem itemDivider>
                        <Text>1. 一般須知</Text>
                    </ListItem>

                    <ListItem>
                        <Text>1.1 有關 Boxtify</Text>
                    </ListItem>
                    <ListItem>
                        <Text>1.2 為什麼使用 Boxtify?</Text>
                    </ListItem>

                    <ListItem itemDivider>
                        <Text>2. 迷你箱儲存</Text>
                    </ListItem>

                    <ListItem>
                        <Text>1.1 有關 Boxtify</Text>
                    </ListItem>
                    <ListItem>
                        <Text>1.2 為什麼使用 Boxtify?</Text>
                    </ListItem>

                    <ListItem itemDivider>
                        <Text>3. 移動倉儲存</Text>
                    </ListItem>

                    <ListItem>
                        <Text>1.1 有關 Boxtify</Text>
                    </ListItem>
                    <ListItem>
                        <Text>1.2 為什麼使用 Boxtify?</Text>
                    </ListItem>

                    <ListItem itemDivider>
                        <Text>1. 一般須知</Text>
                    </ListItem>

                    <ListItem>
                        <Text>1.1 有關 Boxtify</Text>
                    </ListItem>
                    <ListItem>
                        <Text>1.2 為什麼使用 Boxtify?</Text>
                    </ListItem>

                    <ListItem itemDivider>
                        <Text>1. 一般須知</Text>
                    </ListItem>

                    <ListItem>
                        <Text>1.1 有關 Boxtify</Text>
                    </ListItem>
                    <ListItem>
                        <Text>1.2 為什麼使用 Boxtify?</Text>
                    </ListItem>

                    <ListItem itemDivider>
                        <Text>1. 一般須知</Text>
                    </ListItem>

                    <ListItem>
                        <Text>1.1 有關 Boxtify</Text>
                    </ListItem>
                    <ListItem>
                        <Text>1.2 為什麼使用 Boxtify?</Text>
                    </ListItem>

                    <ListItem itemDivider>
                        <Text>1. 一般須知</Text>
                    </ListItem>

                    <ListItem>
                        <Text>1.1 有關 Boxtify</Text>
                    </ListItem>
                    <ListItem>
                        <Text>1.2 為什麼使用 Boxtify?</Text>
                    </ListItem>


                </Content>
            </Container>
        );
    }
}

export default NHListDivider;
