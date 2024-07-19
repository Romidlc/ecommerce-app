import { View, Text, Pressable, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { truncateSession } from "../db";
import { logoutUser } from "../features/User/userSlice";
import { useEffect, useState } from "react";
import { profileStyles } from "../styles/customStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import ImageSelector from "../components/ImageSelector";
import { PRIMARY_COLOR } from "../utils/constants";
import { useUploadUserProfileImageMutation } from "../services/shopService";
import { setProfileImage } from "../features/User/userSlice";

const Profile = ({ navigation }: any) => {
    const [uploadData, setUploadData] = useState(false);
    const [userImage, setUserImage] = useState(null as any);
    const [triggerSaveProfileImage, { isLoading }] = useUploadUserProfileImageMutation();
    const insets = useSafeAreaInsets();
    const { user } = useSelector((state: any) => state.auth.value);
    const dispatch = useDispatch();

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
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
    // TODO: uploadImage should change to uploadProfileData and keep the responsability to modified username, addresses, etc.
    const uploadImage = () => {
        dispatch(setProfileImage(userImage));
        triggerSaveProfileImage({ image: userImage, localId: user.id });
    };
    return (
        <>
            {uploadData && (
                <View style={profileStyles.uploadImageContainer}>
                    <Pressable onPress={() => setUploadData(false)} style={profileStyles.uploadImgCloseBtn}>
                        <Ionicons name="close-outline" size={24} color={"white"} />
                    </Pressable>
                    <Pressable onPress={uploadImage} style={profileStyles.uploadImgSaveBtn}>
                        {!isLoading ? <Ionicons name="cloud-upload-outline" size={24} color={"white"} /> : <ActivityIndicator />}
                        <Text style={{ color: "white", marginHorizontal: 10 }}>Guardar</Text>
                    </Pressable>
                </View>
            )}
            <View style={{ ...profileStyles.container, marginTop: insets.top }}>
                <ImageSelector setUploadData={setUploadData} uploadData={uploadData} userImage={userImage} setUserImage={setUserImage} />
                <Text style={{ color: PRIMARY_COLOR, fontSize: 24 }}>Bienvenida {user.name || user.email}!</Text>
                <Pressable onPress={() => logout()} style={profileStyles.logout}>
                    <Ionicons name="log-out-outline" size={24} />
                    <Text style={profileStyles.logoutText}>Salir</Text>
                </Pressable>
            </View>
        </>
    );
};

export default Profile;
