
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;

export default {
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
  },
  shadow: {
      alignSelf: 'center',
      top:100,
      width: 210,
      height: 75,
      resizeMode: "cover"
  },
  bg: {
    flex: 1,
    marginTop: deviceHeight / 5,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 30,
    bottom: 0,
  },
  input: {
    marginBottom: 20,
  },
  btn: {
    marginTop: 20,
    alignSelf: 'center',
      backgroundColor: "#2EB5AC",
  },
};
