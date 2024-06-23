import { StyleSheet, TextInput, View } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { useState } from "react";
import { headerStyles } from "../styles/customStyles";

export const SearchBar = ({ searchPhrase, setSearchPhrase, clicked, setClicked }: { searchPhrase: string; setSearchPhrase: any; clicked: boolean; setClicked: any }) => {
    return (
        <View style={styles.container}>
            <View style={clicked ? styles.searchBar__clicked : styles.searchBar__unclicked}>
                <Feather name="search" size={20} color={"black"} style={{ marginLeft: 10 }} />
                <TextInput style={styles.input} placeholder="search" value={searchPhrase} onChangeText={setSearchPhrase} onFocus={() => setClicked(true)} />
                {/* cross Icon, depending on whether the search bar is clicked or not */}
                {clicked && <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => setSearchPhrase("")} />}
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        margin: 10,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "95%",
    },
    searchBar__clicked: {
        padding: 10,
        flexDirection: "row",
        width: "100%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    searchBar__unclicked: {
        padding: 10,
        flexDirection: "row",
        width: "100%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
    },
    input: {
        fontSize: 20,
        marginLeft: 10,
        width: "90%",
    },
});
