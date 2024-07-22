import { View, Text } from "react-native";
import React from "react";
import { formStyles } from "../styles/customStyles";

const Error = ({ errorMessage }: { errorMessage: string }) => {
    return (
        <View style={formStyles.errorContainer}>
            <Text style={formStyles.textError}>{errorMessage}</Text>
        </View>
    );
};

export default Error;
