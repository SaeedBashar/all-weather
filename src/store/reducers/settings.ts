
import { createSlice } from '@reduxjs/toolkit'

const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        theme: "light",
        unit: "metric",
    },
    reducers : {
        init_setTheme: (state,action)=>state,
        setTheme : (state, { payload })=>{
            return {...state, theme: payload.theme}
        },
        init_setUnit: (state,action)=>state,
        setUnit : (state, { payload })=>{
            return {...state, theme: payload.unit}
        }
    }
})

export const { init_setTheme, init_setUnit, setTheme, setUnit } = settingsSlice.actions

export const settingsReducer = settingsSlice.reducer