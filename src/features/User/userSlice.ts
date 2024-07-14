import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../interfacesAndTypes/interfaces";

interface IAction {
    type: string;
    payload: IUser;
}
export const userSlice = createSlice({
    name: "auth",
    initialState: {
        value: {
            user: {},
        },
    },
    reducers: {
        setUser: ({ value }, { payload }: IAction) => {
            value.user = { ...payload };
        },
        logoutUser: ({ value }) => {
            value.user = {};
        },
        setProfileImage: ({ value }, { payload }: { type: string; payload: string }) => {
            value.user = {
                ...value.user,
                image: payload,
            };
        },
    },
});

export const { setUser, logoutUser, setProfileImage } = userSlice.actions;
export default userSlice.reducer;
