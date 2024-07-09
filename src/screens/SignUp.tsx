import { View, Text, Pressable, TextInput, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SIGNIN } from "../utils/constants";
import { formStyles } from "../styles/customStyles";
import { useDispatch } from "react-redux";
import { useSignUpMutation } from "../services/authService";
import { setUser } from "../features/User/userSlice";

const SignUp = () => {
    const dispatch = useDispatch();
    const [triggerSignUp, result] = useSignUpMutation();
    const navigation: any = useNavigation();
    const [fullname, setFullname] = useState("" as string);
    const [email, setEmail] = useState("" as string);
    const [confirmPassword, setConfirmPassword] = useState("" as string);
    const [password, setPassword] = useState("" as string);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (result.isSuccess) {
            dispatch(
                setUser({
                    name: result.data.name,
                    email: result.data.email,
                    token: result.data.idToken,
                })
            );
        }
    }, [result]);
    const submit = () => {
        //TODO: remember to apply a validation logic here
        triggerSignUp({ displayName: fullname, email, password, returnSecureToken: true });
    };
    return (
        <View style={formStyles.main}>
            <View style={formStyles.imageContainer}>
                <Image source={require("../../assets/g10.png")} style={formStyles.logo} />
            </View>
            <View style={formStyles.container}>
                <View style={formStyles.inputContainer}>
                    <Text style={formStyles.subtitle}>{"Nombre y apellido"}</Text>
                    <TextInput style={formStyles.input} value={fullname} onChangeText={(text: string) => setFullname(text)} />
                </View>
                <View style={formStyles.inputContainer}>
                    <Text style={formStyles.subtitle}>{"Correo electronico"}</Text>
                    <TextInput style={formStyles.input} value={email} onChangeText={(text: string) => setEmail(text)} />
                </View>
                <View style={formStyles.inputContainer}>
                    <Text style={formStyles.subtitle}>{"Contraseña"}</Text>
                    <TextInput style={formStyles.input} value={password} onChangeText={(text: string) => setPassword(text)} secureTextEntry={true} />
                </View>
                <View style={formStyles.inputContainer}>
                    <Text style={formStyles.subtitle}>{"Confirme contraseña"}</Text>
                    <TextInput style={formStyles.input} value={confirmPassword} onChangeText={(text: string) => setConfirmPassword(text)} secureTextEntry={true} />
                </View>
                <Pressable onPress={() => submit()} style={formStyles.button}>
                    <Text style={formStyles.text}>Confirmar</Text>
                </Pressable>
                <Text>¿Ya tienes una cuenta?</Text>
                <Pressable onPress={() => navigation.navigate(SIGNIN)}>
                    <Text style={formStyles.subLink}>Volver al login</Text>
                </Pressable>
            </View>
        </View>
    );
};
export default SignUp;
