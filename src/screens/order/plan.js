import React, {Component} from "react";
import {Image, StyleSheet, StatusBar} from "react-native";

import {
    Container,
    Content,
    Header,
    Title,
    Button,
    Icon,
    Left,
    Right,
    Body,
    Text,
    H1,
    H2,
    View,
    H3,
    Card,
    CardItem,
    Thumbnail,Footer

} from "native-base";
import {Grid, Row, Col} from "react-native-easy-grid";
import Stepper from ".//stepper";

const img = require("../../../assets/service_plan_detail.jpeg");
export default class Plan extends Component {


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
                <StatusBar barStyle="light-content"/>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" style={{color:"#FFF"}}/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>選擇計劃</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.props.navigation.navigate("ServiceStepThree")}>
                            <Title>下一步</Title>
                        </Button>
                    </Right>
                </Header>

                <Content padder>

                    <Text style={{
                        marginTop: 10,
                        marginBottom: 10,

                        alignSelf: 'center',
                        color: "#8F9294"
                    }}>若不清楚哪個計劃最適合您，請向客戶服務主任查詢：info@Boxtify.com.hk</Text>


                    {/*<Card style={styles.mb}>*/}
                        {/*<CardItem>*/}

                            {/*<Grid>*/}
                                {/*<Col size={1}>*/}
                                    {/*<Thumbnail square size={60} source={img}/>*/}
                                {/*</Col>*/}
                                {/*<Col size={2}>*/}
                                    {/*<Body*/}
                                        {/*style={{*/}
                                            {/*justifyContent: 'center',*/}
                                        {/*}}>*/}
                                    {/*<Text style={{ marginBottom: 10}}>12平方呎(實用)</Text>*/}
                                    {/*<Text numberOfLines={1} note>每月$499</Text>*/}
                                    {/*</Body>*/}
                                {/*</Col>*/}
                                {/*<Col size={2}><Body style={{*/}
                                    {/*justifyContent: 'center',*/}

                                {/*}}>*/}

                                {/*</Body>*/}
                                {/*</Col>*/}
                            {/*</Grid>*/}
                        {/*</CardItem>*/}
                    {/*</Card>*/}
                    {/*<Card style={styles.mb}>*/}
                        {/*<CardItem>*/}

                            {/*<Grid>*/}
                                {/*<Col size={1}>*/}
                                    {/*<Thumbnail square size={60} source={img}/>*/}
                                {/*</Col>*/}
                                {/*<Col size={2}>*/}
                                    {/*<Body*/}
                                        {/*style={{*/}
                                            {/*justifyContent: 'center',*/}
                                        {/*}}>*/}
                                    {/*<Text style={{ marginBottom: 10}}>24平方呎(實用)</Text>*/}
                                    {/*<Text numberOfLines={1} note>$每月$899</Text>*/}
                                    {/*</Body>*/}
                                {/*</Col>*/}
                                {/*<Col size={2}><Body style={{*/}
                                    {/*justifyContent: 'center',*/}
                                {/*}}>*/}

                                {/*</Body>*/}
                                {/*</Col>*/}
                            {/*</Grid>*/}
                        {/*</CardItem>*/}
                    {/*</Card>*/}
                    <Card style={styles.mb}>
                        <CardItem>

                            <Grid>
                                <Col size={1}>
                                    <Thumbnail square size={60} source={img}/>
                                </Col>
                                <Col size={2}>
                                    <Body
                                        style={{
                                            justifyContent: 'center',
                                        }}>
                                    <Text style={{ marginBottom: 10}}>36平方呎(實用)</Text>
                                    <Text numberOfLines={1} note>每月$1299</Text>
                                    </Body>
                                </Col>
                                <Col size={2}><Body style={{
                                    justifyContent: 'center',
                                }}>

                                </Body>
                                </Col>
                            </Grid>
                        </CardItem>
                    </Card>
                    <Card style={styles.mb}>
                        <CardItem>

                            <Grid>
                                <Col size={1}>
                                    <Thumbnail square size={60} source={img}/>
                                </Col>
                                <Col size={2}>
                                    <Body
                                        style={{
                                            justifyContent: 'center',
                                        }}>
                                    <Text style={{ marginBottom: 10}}>48平方呎(實用)</Text>
                                    <Text numberOfLines={1} note>每月$1699</Text>
                                    </Body>
                                </Col>
                                <Col size={2}><Body style={{
                                    justifyContent: 'center',
                                }}>

                                </Body>
                                </Col>
                            </Grid>
                        </CardItem>
                    </Card>


                </Content>

                <Footer style={{backgroundColor: "#00c4b4", }}>
                    <Left>
                        <Text style={{color: "#fff" , marginLeft:10}}>儲存月費預算</Text>
                    </Left>
                    <Right>
                        <H1 style={{color: "#fff", marginRight:10 }}>$0</H1>
                    </Right>
                </Footer>
            </Container>
        );
    }
}


const styles = StyleSheet.create({
    img: {
        alignSelf: 'center',

    },
    h2: {
        alignSelf: 'center',
        color: "#2EB5AC"
    },
    txt: {
        alignSelf: 'center',

    },

})
