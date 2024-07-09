import { createSlice } from "@reduxjs/toolkit";

interface IUser {
    id: number;
    token: string;
    name: string;
    email: string;
}

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
            value.user = { ...payload, id: 1 };
        },
        logoutUser: ({ value }) => {
            value.user = {};
        },
    },
});

export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
