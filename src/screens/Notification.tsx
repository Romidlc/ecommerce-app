import { View, Text, Button } from "react-native";

const Notification = ({ navigation }: any) => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Notifications screen</Text>
            {/* <Button title="Go to Profile" onPress={() => navigation.navigate("Profile")} /> */}
        </View>
    );
};

export default Notification;
