import React, { Component } from 'react';
import { View } from 'react-native';

import { Provider, connect } from 'react-redux'
import { combineReducers, createStore } from 'redux'

import { nameReducer } from './reducer' 

import Header from './components/Header'
import Button from './components/Button'
import InputBox from './components/InputBox'

class App extends Component {

    render() { 

        const store = createStore(nameReducer)

        return (
            <Provider store={store}>
                <View>
                    <Header />
                    <InputBox />
                    <Button />
                </View>
            </Provider>
        );
    }
}

export default App;