import React from "react";
import {Root} from "native-base";
import {StackNavigator, DrawerNavigator} from "react-navigation";

import SideBar from "./screens/sidebar";
import Home from "./screens/home";
import Login from "./screens/login/";
import Register from "./screens/login/register";
import OrderList from "./screens/order";
import OrderDetail from "./screens/order/orderDetail";

import About from "./screens/about/";
import FAQ from "./screens/faq/";

import ServiceStepOne from "./screens/service/index";
import ServiceStepTwo from "./screens/service/stepTwo";
import ServiceStepThree from "./screens/service/stepThree";
import ServiceStepFour from "./screens/service/stepFour";



const Drawer = DrawerNavigator(
    {
        Home: {screen: Home},
        Login: {screen: Login},

        ServiceStepOne: {screen: ServiceStepOne},
        OrderList: {screen: OrderList},

        About: {screen: About},
        FAQ: {screen: FAQ},

    },
    {
        initialRouteName: "Home",
        contentOptions: {
            activeTintColor: "#e91e63"
        },
        contentComponent: props => <SideBar {...props} />
    }
);

const AppNavigator = StackNavigator(
    {
        Drawer: {screen: Drawer},

        Register: {screen: Register},
        ServiceStepTwo: {screen: ServiceStepTwo},
        ServiceStepThree: {screen: ServiceStepThree},
        ServiceStepFour: {screen: ServiceStepFour},
        OrderDetail: {screen: OrderDetail},

    },
    {
        initialRouteName: "Drawer",
        headerMode: "none"
    }
);

export default () =>
    <Root>
        <AppNavigator/>
    </Root>;
