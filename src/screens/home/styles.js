const React = require("react-native");

const {StyleSheet, Dimensions, Platform} = React;

const deviceHeight = Dimensions.get("window").height;

export default {
    homeSection: {
        paddingBottom: 60,
    },
    homeSectionTitle: {
        paddingTop: 30,
        paddingBottom: 30,
    },
    iconSectionDesc: {
        marginTop: 30,
        marginBottom: 20,
    },
    iconSectionImg: {
        resizeMode: "cover",
        height: 100,
        width: 100,

    },

    section2: {
        backgroundColor: "#4FC3F7",

        alignSelf: "center",
    },
    section3: {
        backgroundColor: "#818f9a",

        alignSelf: "center",
    },
    section4: {
        backgroundColor: "#23b5ad",

        alignSelf: "center",
    },



    sectionWhiteTitle: {
        color: "#FFF",
        paddingTop: 30,
        paddingBottom: 30,
    },
    sectionWhiteDesc: {
        color: "#FFF",
        marginTop: 30,
        marginBottom: 20,
    },
    sectionHorizontal1: {
        color: "#FFF",
        paddingTop: 27,
    },
    sectionHorizontal2: {
        color: "#FFF",
        paddingTop: 10,
        paddingBottom: 10,
    }


};
