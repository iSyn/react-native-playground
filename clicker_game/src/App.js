import React, { Component } from 'react';
import { View, Text } from 'react-native'

import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'

import reducers from './reducers'
import Header from './components/Header'
import Click from './components/Click'
import Bottom from './components/Bottom'
import StoreModal from './components/StoreModal'

class App extends Component {

    render() { 

        const store = createStore(reducers)

        return (  
            <Provider store={store}>
                <View style={{ flex: 1, position: 'relative' }}>

                    <Header />
                    <Click />
                    <Bottom />

                    <StoreModal />

                </View>
            </Provider>
        );
    }
}
 
export default App;