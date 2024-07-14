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
    const [triggerSaveProfileImage, result] = useUploadUserProfileImageMutation();
    const { data, isLoading } = useGetUserProfileImageQuery(user.id);
    const dispatch = useDispatch();
    const verifyCameraPermissions = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync();
        return granted;
    };
    const pickImage = async () => {
        const hasPermission = await verifyCameraPermissions();
        console.log(hasPermission);
        if (hasPermission) {
            const result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [9, 16],
                base64: true,
                quality: 0.2,
            });
            if (!result.canceled) setUserImage(`data:image/jpeg;base64,${result.assets[0].base64}`);
        }
    };
    const uploadImage = () => {
        dispatch(setProfileImage(userImage));
        triggerSaveProfileImage({ image: userImage, localId: user.id });
    };

    useEffect(() => {
        // NOTE: verify if the user has a profile image uploaded
        if (data) dispatch(setProfileImage(data.image));
    }, [data]);
    return (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View style={profileStyles.uploadContainer}>
                {(userImage || user.image) && (
                    <>
                        <Image source={{ uri: userImage || user.image }} resizeMode="cover" style={profileStyles.img} />
                    </>
                )}
                <View style={profileStyles.uploadBtnContainer}>
                    <Pressable style={profileStyles.uploadBtn} onPress={pickImage}>
                        <Ionicons name="camera-outline" size={24} color={"white"} />
                    </Pressable>
                </View>
            </View>
            {/* <View>
                <Pressable style={profileStyles.selectImage}>
                    <Ionicons name="camera-outline" size={24} color={"white"} />
                    <Text>Seleccionar imagen</Text>
                </Pressable>
            </View> */}
            <View>
                <Pressable style={profileStyles.selectImage} onPress={uploadImage}>
                    <Ionicons name="cloud-upload-outline" size={24} color={"white"} />
                    {!result.isLoading ? <Text style={{ margin: 10, color: "white" }}>Subir imagen</Text> : <ActivityIndicator color="white" />}
                </Pressable>
            </View>
        </View>
    );
};

export default ImageSelector;
