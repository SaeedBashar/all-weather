import { takeEvery, put } from 'redux-saga/effects';

export function* watchEvents(){
    yield takeEvery('settings/init_setTheme', handleTheme)
    yield takeEvery('settings/init_setUnit', handleUnit)
}

function* handleTheme(action:any){
    yield put({ type: 'setTheme', payload : action.payload})
}

function* handleUnit(action:any){
    yield put({ type: 'setUnit', payload : action.payload})
}