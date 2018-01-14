import React, { Component } from "react";
import {Image, StyleSheet, StatusBar} from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  H1,
  H2,
  H3,
  Text,
  Left,
  Right,
  Body,
    Card,
    CardItem,
    Thumbnail
} from "native-base";
import styles from "./styles";
const img = require("../../../assets/box_close.png");

class NHTypography extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>關於我們</Title>
          </Body>
          <Right />
        </Header>

          <Content padder>
              <Card style={styles.mb}>


                  <CardItem>
                      <Body>
                      <Image
                          style={{
                              alignSelf: "center",
                              width: 100,
                              height: 160,
                              resizeMode: "cover",

                              marginVertical: 5
                          }}
                          source={img}
                      />
                      <Text style={styles.text}>Boxtify 是寶源迷你倉未來發展的重點項目之一。</Text>
                      <Text style={styles.text}>隨住人口迅速增長，香港土地變得十分珍貴，令家居缺乏儲存物件的空間，因此迷你倉成為香港人生活上必需的一部分。
                      </Text>
                      <Text style={styles.text}>近年政府加強對迷你倉的管制，提升客人對此服務的信心。有見及此，Boxtify決心成為香港合乎新規格迷你倉。
                      </Text>

                      <Text style={styles.text}>Boxtify 會透過原箱入屋的概念，與香港人的生活接軌，為客人解決儲存物件的困難，致力為香港提供合法、可靠、彈性和便利的存倉服務。

                      </Text>
                      </Body>
                  </CardItem>

              </Card>
          </Content>

        {/*<Content padder>*/}


        {/*</Content>*/}
      </Container>
    );
  }
}

export default NHTypography;
