import { View, Image } from "react-native";
import { headerStyles } from "../styles/customStyles";
import { SearchBar } from "./SearchBar";
import { useRoute } from "@react-navigation/core";
import { ROUTES_WITH_SEARCHBAR } from "../utils/constants";
import { useNavigation } from "@react-navigation/native";

{
    /* TODO: Future - The header component will be reused by every screen. Currently Home screen is rendering it. */
}
export const Header = () => {
    const route = useRoute();
    const navigation: any = useNavigation();

    const redirectTo = ({ screen, params }: { screen: string; params: object }) => navigation.navigate(screen, params);

    return (
        <View style={headerStyles.container}>
            <View style={headerStyles.imageContainer}>
                <Image source={require("../../assets/store-logo.png")} style={headerStyles.logo} />
            </View>
            {ROUTES_WITH_SEARCHBAR.includes(route.name) && <SearchBar redirectTo={redirectTo} />}
        </View>
    );
};
