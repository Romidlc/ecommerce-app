import { View, Text } from "react-native";
import { useSelector } from "react-redux";

const Profile = ({ navigation }: any) => {
    const { user } = useSelector((state: any) => state.auth.value);

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Bienvenida {user.name}</Text>
            {/* <Button title="Go to Home" onPress={() => navigation.navigate("Home")} /> */}
        </View>
    );
};

export default Profile;
