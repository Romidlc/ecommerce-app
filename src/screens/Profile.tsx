import { View, Text, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { truncateSession } from "../db";
import { logoutUser } from "../features/User/userSlice";
import { useEffect } from "react";
import { profileStyles } from "../styles/customStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import ImageSelector from "../components/ImageSelector";

const Profile = ({ navigation }: any) => {
    const insets = useSafeAreaInsets();
    const { user } = useSelector((state: any) => state.auth.value);
    const dispatch = useDispatch();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    const logout = async () => {
        try {
            await truncateSession();
            dispatch(logoutUser());
        } catch (error) {
            console.log("[Profile.logout] Truncate session failed", error);
        }
    };
    return (
        <View style={{ ...profileStyles.container, marginTop: insets.top }}>
            <ImageSelector />
            <Text>Bienvenida {user.name || user.email}</Text>
            <Pressable onPress={() => logout()} style={profileStyles.logout}>
                <Ionicons name="log-out-outline" size={24} />
                <Text style={profileStyles.logoutText}>Salir</Text>
            </Pressable>
        </View>
    );
};

export default Profile;
