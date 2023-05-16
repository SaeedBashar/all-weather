
import { createSlice } from '@reduxjs/toolkit'
import { getInitialSettingsState } from '../../utils/utils'

const settingsSlice = createSlice({
    name: 'settings',
    initialState: getInitialSettingsState(),
    reducers : {
        setTheme : (state, { payload })=>({...state, theme: payload.theme}),
        setUnit : (state, { payload })=>({...state, theme: payload.unit}),
        setCurrentLocation : (state, { payload })=>({...state, currentLocation: payload.location})
    }
})

export const { setTheme, setUnit, setCurrentLocation } = settingsSlice.actions

export const settingsReducer = settingsSlice.reducer