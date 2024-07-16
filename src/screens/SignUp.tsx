import { View, Text, Pressable, TextInput, Image, ScrollView, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SIGNIN, errorMessages } from "../utils/constants";
import { formStyles } from "../styles/customStyles";
import { useDispatch } from "react-redux";
import { useSignUpMutation } from "../services/authService";
import { setUser } from "../features/User/userSlice";
import { getRegexByKey } from "../utils/helpers";
import Error from "../components/Error";
import Ionicons from "@expo/vector-icons/Ionicons";

const SignUp = () => {
    const dispatch = useDispatch();
    const [triggerSignUp, result] = useSignUpMutation();
    const navigation: any = useNavigation();
    const [fullname, setFullname] = useState("" as string);
    const [email, setEmail] = useState("" as string);
    const [confirmPassword, setConfirmPassword] = useState("" as string);
    const [password, setPassword] = useState("" as string);
    const [showPassword, setShowPassword] = useState(false as boolean);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false as boolean);
    const [errors, setErrors] = useState({} as { [key: string]: string });

    // TODO: repeated function. Move validate data from a helpers.ts
    const validateData = () => {
        const formData: { [key: string]: string } = {
            email: email,
            fullname: fullname,
            password: password,
            confirmPassword: confirmPassword,
        };
        const inputErrors: any = {};
        Object.keys(formData).forEach((key: string) => {
            const isCorrect = getRegexByKey(key)?.test(String(formData[key]).toLowerCase());
            if (!isCorrect) inputErrors[key] = errorMessages[key];
        });
        return inputErrors;
    };
    useEffect(() => {
        if (result.isSuccess)
            dispatch(
                setUser({
                    id: result.data.localId,
                    name: result.data.name,
                    email: result.data.email,
                    token: result.data.idToken,
                })
            );
    }, [result]);
    const submit = () => {
        const validationResp = validateData();
        if (Object.values(validationResp).length > 0) {
            setErrors({ ...validationResp });
            return;
        }
        triggerSignUp({ displayName: fullname, email, password, returnSecureToken: true });
    };
    return (
        <ScrollView contentContainerStyle={{ ...formStyles.main, flexGrow: 1 }}>
            <View style={formStyles.imageContainer}>
                <Image source={require("../../assets/no-logo.png")} style={formStyles.logo} />
            </View>
            <View style={formStyles.container}>
                <View style={formStyles.inputContainer}>
                    <TextInput style={formStyles.input} placeholder="Ingrese nombre y apellido" value={fullname} onChangeText={(text: string) => setFullname(text)} />
                </View>
                {errors.fullname && <Error errorMessage={errors.fullname} />}
                <View style={formStyles.inputContainer}>
                    <TextInput style={formStyles.input} placeholder="Ingrese correo electronico" value={email} onChangeText={(text: string) => setEmail(text)} />
                </View>
                {errors.email && <Error errorMessage={errors.email} />}
                <View style={formStyles.inputContainer}>
                    <TextInput style={formStyles.input} placeholder="Ingrese contraseña" value={password} onChangeText={(text: string) => setPassword(text)} secureTextEntry={showPassword} />
                    <Pressable onPress={() => setShowPassword(!showPassword)}>{!showPassword ? <Ionicons color={"black"} size={24} name="eye-off-outline" /> : <Ionicons color={"black"} size={24} name="eye-outline" />}</Pressable>
                </View>
                {errors.password && <Error errorMessage={errors.password} />}
                <View style={formStyles.inputContainer}>
                    <TextInput style={formStyles.input} placeholder="Ingrese nuevamente su contraseña" value={confirmPassword} onChangeText={(text: string) => setConfirmPassword(text)} secureTextEntry={showConfirmPassword} />
                    <Pressable onPress={() => setShowConfirmPassword(!showConfirmPassword)}>{!showConfirmPassword ? <Ionicons color={"black"} size={24} name="eye-off-outline" /> : <Ionicons color={"black"} size={24} name="eye-outline" />}</Pressable>
                </View>
                {errors.confirmPassword && <Error errorMessage={errors.confirmPassword} />}
                <Pressable onPress={() => submit()} style={formStyles.button}>
                    {!result.isLoading ? <Text style={formStyles.text}>Confirmar</Text> : <ActivityIndicator color="white" />}
                </Pressable>
                <Text>¿Ya tienes una cuenta?</Text>
                <Pressable onPress={() => navigation.navigate(SIGNIN)}>
                    <Text style={formStyles.subLink}>Volver al login</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
};
export default SignUp;
