import { createSlice } from "@reduxjs/toolkit";
import { ISearchBar } from "../../interfacesAndTypes/interfaces";

interface IAction {
    type: string;
    payload: any;
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
