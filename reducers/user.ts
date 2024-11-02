import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export type UserState = {
    value: {
        pseudo: string;
        email: string;
        token: string;
        favorites: string[]
    }
}

const initialState: UserState = {
    value: {
        pseudo: "",
        email: "",
        token: "",
        favorites: []
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<UserState>) => {
            state.value = action.payload.value;
        },
    }

})

export const { login } = userSlice.actions;
export default userSlice.reducer