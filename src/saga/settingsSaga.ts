import { put } from 'redux-saga/effects';
import { getInitialSettingsState } from '../utils/utils';

export function* handleTheme(action:any){
    let state :ReturnType<any> = getInitialSettingsState()
    yield localStorage.setItem(
        "settings",
        JSON.stringify({...state, theme: action.theme })
      );
    yield put({ type: 'settings/setTheme', payload : {theme: action.theme}})
}

export function* handleUnit(action:any){
    let state :ReturnType<any> = getInitialSettingsState()
    yield localStorage.setItem(
        "settings",
        JSON.stringify({...state, unit: action.unit })
      );
    yield put({ type: 'settings/setUnit', payload : {unit: action.unit}})
}

export function* handleCurrentLocation(action:any){
    let state :ReturnType<any> = getInitialSettingsState()
    yield localStorage.setItem(
        "settings",
        JSON.stringify({...state, currentLocation: action.location })
      );
    yield put({ type: 'settings/setCurrentLocation', payload : {location: action.location}})
}