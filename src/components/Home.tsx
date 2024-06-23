import { View, Text, Button } from "react-native";

const Home = ({ navigation }: any) => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Home screen</Text>
            {/* <Button title="Go to Cart" onPress={() => navigation.navigate("Cart")} /> */}
        </View>
    );
};

export default Home;
