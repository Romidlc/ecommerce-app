import { View, Text, Image, TextInput, Pressable, ActivityIndicator, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { formStyles } from "../styles/customStyles";
import { useNavigation } from "@react-navigation/native";
import { SIGNUP, errorMessages } from "../utils/constants";
import { useSignInMutation } from "../services/authService";
import { useDispatch } from "react-redux";
import { setUser } from "../features/User/userSlice";
import Ionicons from "@expo/vector-icons/Ionicons";
import { getRegexByKey } from "../utils/helpers";
import Error from "../components/Error";

const SignIn = () => {
    const dispatch = useDispatch();
    const navigation: any = useNavigation();
    const [triggerSignIn, result] = useSignInMutation();
    const [email, setEmail] = useState("" as string);
    const [showPassword, setShowPassword] = useState(false as boolean);
    const [password, setPassword] = useState("" as string);
    const [errors, setErrors] = useState({}) as any;

    const validateData = () => {
        // TODO: replace email and password state as ONE like formdata
        const formData: { [key: string]: string } = {
            email: email,
            password: password,
        };
        const inputErrors: any = {};
        Object.keys(formData).forEach((key: string) => {
            const isCorrect = getRegexByKey(key)?.test(String(formData[key]).toLowerCase());
            if (!isCorrect) inputErrors[key] = errorMessages[key];
        });
        return inputErrors;
    };
    const submitLogin = () => {
        const validationResp: any = validateData();
        if (Object.values(validationResp).length > 0) {
            setErrors({ ...validationResp });
            return;
        }
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
        <ScrollView contentContainerStyle={{ ...formStyles.main, flexGrow: 1 }}>
            <View style={formStyles.imageContainer}>
                <Image source={require("../../assets/g10.png")} style={formStyles.logo} />
            </View>
            <View style={formStyles.container}>
                <View style={formStyles.inputContainer}>
                    <TextInput style={formStyles.input} value={email} placeholder="Ingrese su correo electronico" onChangeText={(text: string) => setEmail(text)} showSoftInputOnFocus={true} />
                </View>
                {errors.email && <Error errorMessage={errors.email} />}
                <View style={formStyles.inputContainer}>
                    <TextInput style={formStyles.input} placeholder="Ingrese su contraseña" value={password} onChangeText={(text: string) => setPassword(text)} secureTextEntry={!showPassword} />
                    <Pressable onPress={() => handlePasswordVisibility()}>{!showPassword ? <Ionicons color={"black"} size={24} name="eye-off-outline" /> : <Ionicons color={"black"} size={24} name="eye-outline" />}</Pressable>
                </View>
                {errors.password && <Error errorMessage={errors.password} />}

                <Pressable onPress={() => submitLogin()} style={formStyles.button}>
                    {!result.isLoading ? <Text style={formStyles.text}>Confirmar</Text> : <ActivityIndicator color="white" />}
                </Pressable>
                <Pressable onPress={() => navigation.navigate(SIGNUP)}>
                    <Text style={formStyles.subLink}>Crear cuenta</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
};

export default SignIn;
