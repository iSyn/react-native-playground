import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'

import productsReducer from './reducer/productsReducer'
import userReducer from './reducer/userReducer'

class App extends Component {

    render() { 

        const allReducers = combineReducers({
            products: productsReducer,
            user: userReducer
        })

        const store = createStore(
            allReducers,
            {
                products: [{ name: 'Android' }],
                user: 'Synclair',
            },
            window.devToolsExtension && window.devToolsExtension()
        )

        console.log(store.getState())

        return (
            <Provider store={store}>
                <View>
                    <Text>Sad Bois</Text>
                </View>
            </Provider>  
        );
    }
}
 
export default App;