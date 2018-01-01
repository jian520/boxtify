import React from "react";
import {Root} from "native-base";
import {StackNavigator, DrawerNavigator} from "react-navigation";

import SideBar from "./screens/sidebar";
import Login from "./screens/login/";
import Register from "./screens/login/register";
import MyService from "./screens/service/myService";
import About from "./screens/about/";
import FAQ from "./screens/faq/";

import ServiceStepOne from "./screens/service/stepOne";
import ServiceStepTwo from "./screens/service/stepTwo";
import ServiceStepThree from "./screens/service/stepThree";
import ServiceStepFour from "./screens/service/stepFour";



const Drawer = DrawerNavigator(
    {
        Home: {screen: Login},
        ServiceStepOne: {screen: ServiceStepOne},
        MyService: {screen: MyService},
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
