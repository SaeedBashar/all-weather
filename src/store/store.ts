
import { configureStore } from '@reduxjs/toolkit';
import { settingsReducer } from './reducers/settingsReducer';
import creatSagaMiddleware from 'redux-saga';
import { watchEvents } from '../saga/';

const sagaMiddleware = creatSagaMiddleware();

export const store = configureStore({
    reducer : {
        settings:settingsReducer
    },
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(watchEvents)
