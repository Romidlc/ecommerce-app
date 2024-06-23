import { Pressable, TextInput, View, Text, Keyboard } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { searchBarStyles } from "../styles/customStyles";
import { HOME, PRODUCT_LIST } from "../utils/constants";
export const SearchBar = ({ searchPhrase, setSearchPhrase, clicked, setClicked, redirectTo }: { searchPhrase: string; setSearchPhrase: any; clicked: boolean; setClicked: any; redirectTo: any }) => {
    return (
        <View style={searchBarStyles.container}>
            <View style={clicked ? { ...searchBarStyles.searchBar, ...searchBarStyles.searchBar__clicked } : { ...searchBarStyles.searchBar, ...searchBarStyles.searchBar__unclicked }}>
                <Feather name="search" size={20} color={"black"} style={searchBarStyles.featherStyle} />
                <TextInput style={searchBarStyles.input} placeholder="Buscar" value={searchPhrase} onChangeText={setSearchPhrase} onFocus={() => setClicked(true)} onSubmitEditing={(e) => redirectTo({ screen: PRODUCT_LIST, params: { searchPhrase } })} />
                {clicked && (
                    <Entypo
                        name="cross"
                        size={20}
                        style={searchBarStyles.entypoStyle}
                        onPress={() => {
                            setSearchPhrase("");
                            redirectTo({ screen: HOME, params: {} });
                        }}
                    />
                )}
            </View>
            {clicked && (
                <View>
                    <Pressable
                        style={searchBarStyles.cancelButton}
                        onPress={() => {
                            Keyboard.dismiss();
                            setClicked(false);
                            redirectTo({ screen: HOME, params: {} });
                        }}
                    >
                        <Text style={searchBarStyles.cancelButtonText}>Cancelar</Text>
                    </Pressable>
                </View>
            )}
        </View>
    );
};
