import { Pressable, TextInput, View, Text, Keyboard } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { searchBarStyles } from "../styles/customStyles";
import { HOME, PRODUCT_LIST } from "../utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { setClicked, setSearchPhrase } from "../features/SearchBar/searchBarSlice";

export const SearchBar = ({ redirectTo }: { redirectTo: any }) => {
    const { clicked, searchPhrase } = useSelector((state: any) => state.search.value);
    const dispatch = useDispatch();
    return (
        <View style={searchBarStyles.container}>
            <View style={clicked ? { ...searchBarStyles.searchBar, ...searchBarStyles.searchBar__clicked } : { ...searchBarStyles.searchBar, ...searchBarStyles.searchBar__unclicked }}>
                <Feather name="search" size={20} color={"black"} style={searchBarStyles.featherStyle} />
                <TextInput style={searchBarStyles.input} placeholder="Buscar" value={searchPhrase} onChangeText={(text) => dispatch(setSearchPhrase(text))} onFocus={() => dispatch(setClicked(true))} onSubmitEditing={(e) => redirectTo({ screen: PRODUCT_LIST, params: { searchPhrase } })} />
                {clicked && (
                    <Entypo
                        name="cross"
                        size={20}
                        style={searchBarStyles.entypoStyle}
                        onPress={() => {
                            dispatch(setSearchPhrase(""));
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
                            dispatch(setClicked(false));
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
