
import { takeEvery } from 'redux-saga/effects';

import { handleUnit, handleTheme, handleCurrentLocation } from './settingsSaga';
import { handleCurrentWeather } from './weatherSaga';

export function* watchEvents(){
    yield takeEvery('init_setTheme', handleTheme)
    yield takeEvery('init_setUnit', handleUnit)
    yield takeEvery('init_setCurrentLocation', handleCurrentLocation)

    yield takeEvery('init_setCurrentWeather', handleCurrentWeather)
}
