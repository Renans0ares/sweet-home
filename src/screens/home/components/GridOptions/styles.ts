import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginVertical: 20,
    },
    button: {
        backgroundColor: "#4DA8DA",
        padding: 20,
        borderRadius: 10,
        width: "48%",
        marginVertical: 8,
        alignItems: "center",
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 18,
    },
});