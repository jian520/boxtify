/* @flow */

import React from "react";
import { DrawerNavigator } from "react-navigation";

import Home from "./components/home/";
import Login from "./components/login/";


import SideBar from "./components/sidebar";


const DrawerExample = DrawerNavigator(
  {
    Home: { screen: Home },
      Login: { screen: Login },

  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

export default DrawerExample;
