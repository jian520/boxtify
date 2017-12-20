import React from "react";
import {Root} from "native-base";
import {StackNavigator, DrawerNavigator} from "react-navigation";

import SideBar from "./screens/sidebar";
import Login from "./screens/login/";
import About from "./screens/about/";
import FAQ from "./screens/faq/";

import ServiceStepOne from "./screens/service/stepOne";
import ServiceStepTwo from "./screens/service/stepTwo";
import ServiceStepThree from "./screens/service/stepThree";



const Drawer = DrawerNavigator(
    {
        Home: {screen: Login},

        About: {screen: About},
        FAQ: {screen: FAQ},
        ServiceStepOne: {screen: ServiceStepOne},
        ServiceStepTwo: {screen: ServiceStepTwo},
        ServiceStepThree: {screen: ServiceStepThree},


    },
    {
        initialRouteName: "ServiceStepThree",
        contentOptions: {
            activeTintColor: "#e91e63"
        },
        contentComponent: props => <SideBar {...props} />
    }
);

const AppNavigator = StackNavigator(
    {
        Drawer: {screen: Drawer},
        ServiceStepTwo: {screen: ServiceStepTwo},
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
