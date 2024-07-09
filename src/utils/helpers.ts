export const getRegexByKey = (inputKey: string) => {
    switch (inputKey) {
        case "fullname":
            return new RegExp(/^[a-zA-Z ]+$/);
        case "confirmPassword":
            return new RegExp(/^(?=.*[a-z])[0-9a-zA-Z]{6,}$/);
        case "email":
            return new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        case "password":
            return new RegExp(/^(?=.*[a-z])[0-9a-zA-Z]{6,}$/);
        default:
            break;
    }
};
