import { View, Text, Image, TextInput, Pressable, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { formStyles } from "../styles/customStyles";
import { useNavigation } from "@react-navigation/native";
import { SIGNUP } from "../utils/constants";
import { useSignInMutation } from "../services/authService";
import { useDispatch } from "react-redux";
import { setUser } from "../features/User/userSlice";
import Ionicons from "@expo/vector-icons/Ionicons";
const SignIn = () => {
    const dispatch = useDispatch();
    const navigation: any = useNavigation();
    const [triggerSignIn, result] = useSignInMutation();
    const [email, setEmail] = useState("" as string);
    const [showPassword, setShowPassword] = useState(false as boolean);
    const [password, setPassword] = useState("" as string);
    const [errors, setErrors] = useState({});
    const submitLogin = () => {
        //TODO: remember to apply a validation logic here
        triggerSignIn({ email, password, returnSecureToken: true });
    };
    useEffect(() => {
        if (result.isSuccess)
            dispatch(
                setUser({
                    id: result.data.id,
                    name: result.data.displayName,
                    email: result.data.email,
                    token: result.data.token,
                })
            );
    }, [result]);

    const handlePasswordVisibility = () => setShowPassword(!showPassword);
    return (
        <View style={formStyles.main}>
            <View style={formStyles.imageContainer}>
                <Image source={require("../../assets/g10.png")} style={formStyles.logo} />
            </View>
            <View style={formStyles.container}>
                <View style={formStyles.inputContainer}>
                    <TextInput style={formStyles.input} value={email} placeholder="Ingrese su correo electronico" onChangeText={(text: string) => setEmail(text)} showSoftInputOnFocus={true} />
                </View>
                <View style={formStyles.inputContainer}>
                    <TextInput style={formStyles.input} placeholder="Ingrese su contraseña" value={password} onChangeText={(text: string) => setPassword(text)} secureTextEntry={!showPassword} />
                    <Pressable onPress={() => handlePasswordVisibility()}>{!showPassword ? <Ionicons color={"black"} size={24} name="eye-off-outline" /> : <Ionicons color={"black"} size={24} name="eye-outline" />}</Pressable>
                </View>
                <Pressable onPress={() => submitLogin()} style={formStyles.button}>
                    {!result.isLoading ? <Text style={formStyles.text}>Confirmar</Text> : <ActivityIndicator color="white" />}
                </Pressable>
                <Pressable onPress={() => navigation.navigate(SIGNUP)}>
                    <Text style={formStyles.subLink}>Crear Cuenta</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default SignIn;
