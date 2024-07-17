import { View, Image, Pressable, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { profileStyles } from "../styles/customStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { setProfileImage } from "../features/User/userSlice";
import { useGetUserProfileImageQuery, useUploadUserProfileImageMutation } from "../services/shopService";

const ImageSelector = () => {
    const [userImage, setUserImage] = useState(null as any);
    const { user } = useSelector((state: any) => state.auth.value);
    const [triggerSaveProfileImage, { isLoading }] = useUploadUserProfileImageMutation();
    const { data } = useGetUserProfileImageQuery(user.id);
    const dispatch = useDispatch();
    const verifyCameraPermissions = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync();
        return granted;
    };
    const uploadImage = () => {
        dispatch(setProfileImage(userImage));
        const {} = triggerSaveProfileImage({ image: userImage, localId: user.id });
    };
    const pickImage = async () => {
        const hasPermission = await verifyCameraPermissions();
        if (hasPermission) {
            const result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [9, 16],
                base64: true,
                quality: 0.2,
            });
            if (!result.canceled) {
                setUserImage(`data:image/jpeg;base64,${result.assets[0].base64}`);
                uploadImage();
            }
        }
    };

    useEffect(() => {
        // NOTE: verify if the user has a profile image uploaded
        if (data) dispatch(setProfileImage(data.image));
    }, [data]);
    return (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View style={profileStyles.uploadContainer}>
                {(userImage || user.image) && <Image source={{ uri: userImage || user.image }} resizeMode="cover" style={profileStyles.img} />}
                <View style={profileStyles.uploadBtnContainer}>
                    {!isLoading ? (
                        <Pressable style={profileStyles.uploadBtn} onPress={pickImage}>
                            <Ionicons name="camera-outline" size={24} color={"white"} />
                            <Text style={{ color: "white" }}>Tomar foto</Text>
                        </Pressable>
                    ) : (
                        <ActivityIndicator color="white" />
                    )}
                </View>
            </View>
        </View>
    );
};

export default ImageSelector;
