import { View, Image, Pressable, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { profileStyles } from "../styles/customStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserProfileImageQuery } from "../services/shopService";
import { setProfileImage } from "../features/User/userSlice";

const ImageSelector = ({ setUploadData, uploadData, userImage, setUserImage }: { setUploadData: (value: boolean) => void; uploadData: boolean; userImage: string; setUserImage: (value: string) => void }) => {
    const { user } = useSelector((state: any) => state.auth.value);
    const { data } = useGetUserProfileImageQuery(user.id);
    const dispatch = useDispatch();
    const verifyCameraPermissions = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync();
        return granted;
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
            if (!result.canceled) setUserImage(`data:image/jpeg;base64,${result.assets[0].base64}`);
            setUploadData(true);
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
                    <Pressable style={profileStyles.uploadBtn} onPress={pickImage}>
                        <Ionicons name="camera-outline" size={24} color={"white"} />
                        <Text style={{ color: "white" }}>Tomar foto</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default ImageSelector;
