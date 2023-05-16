
import { configureStore } from '@reduxjs/toolkit';
import { settingsReducer } from './reducers/settingsReducer';
import { weatherReducer } from './reducers/weatherReducer';
import creatSagaMiddleware from 'redux-saga';
import { watchEvents } from '../saga/';

const sagaMiddleware = creatSagaMiddleware();

export const store = configureStore({
    reducer : {
        settings:settingsReducer,
        weather:weatherReducer
    },
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(watchEvents)
