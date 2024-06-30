import { createSlice } from "@reduxjs/toolkit";

interface IAction {
    type: string;
    payload: any;
}
interface ISearchBar {
    clicked: boolean;
    searchPhrase: string;
}

export const searchBarSlice = createSlice({
    name: "search",
    initialState: {
        value: {
            clicked: false,
            searchPhrase: "",
        },
    },
    reducers: {
        // parms(state, actions: {type, payload})
        setClicked: ({ value }: { value: ISearchBar }, { payload }: IAction) => {
            value.clicked = payload;
        },
        setSearchPhrase: ({ value }: { value: ISearchBar }, { payload }: IAction) => {
            value.searchPhrase = payload;
        },
    },
});

export const { setClicked, setSearchPhrase } = searchBarSlice.actions;
export default searchBarSlice.reducer;
