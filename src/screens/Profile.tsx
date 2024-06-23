import { View, Text, Button } from "react-native";

const Profile = ({ navigation }: any) => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text> Profile screen</Text>
            {/* <Button title="Go to Home" onPress={() => navigation.navigate("Home")} /> */}
        </View>
    );
};

export default Profile;
