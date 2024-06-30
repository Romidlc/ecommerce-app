import { Provider } from "react-redux";
import BottomTabs from "./src/components/navigations/BottomTabs";
import { NavigationContainer } from "@react-navigation/native";
import store from "./src/store";

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <BottomTabs />
            </NavigationContainer>
        </Provider>
    );
}
