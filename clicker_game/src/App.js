import React, { Component } from 'react';
import { View, Text } from 'react-native'

import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'

import reducers from './reducers'
import Header from './components/Header'
import Click from './components/Click'
import Bottom from './components/Bottom'

class App extends Component {

    render() { 

        const store = createStore(reducers)

        return (  
            <Provider store={store}>
                <View style={{ flex: 1 }}>
                    <Header />
                    <Click />
                    <Bottom />
                </View>
            </Provider>
        );
    }
}
 
export default App;