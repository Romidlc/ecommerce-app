import { Provider, useDispatch, useSelector } from "react-redux";
import BottomTabs from "./src/components/navigations/BottomTabs";
import { NavigationContainer } from "@react-navigation/native";
import store from "./src/store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AuthStack from "./src/components/navigations/AuthStack";
import { fetchSession, init } from "./src/db";
import { useEffect } from "react";
import { setUser } from "./src/features/User/userSlice";

(async () => {
    try {
        await init();
    } catch (error) {
        console.log("[App] DB Initialization failed", error);
    }
})();

const NavigationWrapper = () => {
    const { user } = useSelector((state: any) => state.auth.value);
    const dispatch = useDispatch();
    const userIsLogged = user.token;
    const verifyMyLocalSession = async () => {
        const response: any = await fetchSession();
        if (response.rows.length) {
            const fetchedUser = response.rows._array[0];
            dispatch(
                setUser({
                    id: fetchedUser.localId,
                    token: fetchedUser.token,
                    email: fetchedUser.email,
                })
            );
        }
    };

    useEffect(() => {
        verifyMyLocalSession();
    }, []);

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
