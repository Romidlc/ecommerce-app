import { Provider, useSelector } from "react-redux";
import BottomTabs from "./src/components/navigations/BottomTabs";
import { NavigationContainer } from "@react-navigation/native";
import store from "./src/store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AuthStack from "./src/components/navigations/AuthStack";

const NavigationWrapper = () => {
    const { user } = useSelector((state: any) => state.auth.value);
    const userIsLogged = true;
    return <NavigationContainer>{userIsLogged ? <BottomTabs /> : <AuthStack />}</NavigationContainer>;
};
export default function App() {
    return (
        <SafeAreaProvider>
            <Provider store={store}>
                <NavigationWrapper />
            </Provider>
        </SafeAreaProvider>
    );
}
