
import { configureStore } from '@reduxjs/toolkit';
import { settingsReducer } from './reducers/settings';
import creatSagaMiddleware from 'redux-saga';
import { watchEvents } from '../saga/action';

const sagaMiddleware = creatSagaMiddleware();

export const store = configureStore({
    reducer : {
        settings:settingsReducer
    },
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(watchEvents)
