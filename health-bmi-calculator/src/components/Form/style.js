import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        flex: 1,
        backgroundColor: "#ffffff",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 30,
    },
    form: {
        width: "100%"
    },
    formLabel: {
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20
    },
    input: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#e1e1e1",
        height: 40,
        margin: 12,
        paddingLeft: 10
    },
    buttonCalculator: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#ff0043",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30
    },
    textButtonCalculator: {
        fontSize: 20,
        color: "#ffffff"
    },
    errorMessage: {
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20
    }
});

export default styles