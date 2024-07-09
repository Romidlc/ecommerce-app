import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "../../screens/SignUp";
import SignIn from "../../screens/SignIn";

const Stack = createNativeStackNavigator();
const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="SignIn"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen component={SignIn} name="SignIn" />
            <Stack.Screen component={SignUp} name="SignUp" />
        </Stack.Navigator>
    );
};

export default AuthStack;
