import { View, Text } from "react-native";
import { headerStyles } from "../styles/customStyles";

export const Header = () => {
    return (
        <View style={headerStyles.container}>
            <Text>Header component</Text>
        </View>
    );
};
