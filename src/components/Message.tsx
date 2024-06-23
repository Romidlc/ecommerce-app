import { View, Text, Button } from "react-native";

const Message = ({ navigation }: any) => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Message screen</Text>
            {/* <Button title="Go to Profile" onPress={() => navigation.navigate("Profile")} /> */}
        </View>
    );
};

export default Message;
