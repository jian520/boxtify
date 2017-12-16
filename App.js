/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';


import App from "./js/App";

export default class App1 extends Component<{}> {
    constructor() {
        super();
        this.state = {
            isReady: false
        };
    }

    render() {
        return <App />;
    }
}

