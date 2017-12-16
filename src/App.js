import React from "react";
import {Root} from "native-base";
import {StackNavigator, DrawerNavigator} from "react-navigation";

import SideBar from "./screens/sidebar";
import Login from "./screens/login/";
import About from "./screens/about/";
import FAQ from "./screens/faq/";

import Service from "./screens/service/stepOne";



const Drawer = DrawerNavigator(
    {
        Home: {screen: Login},
        Service: {screen: Service},
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
