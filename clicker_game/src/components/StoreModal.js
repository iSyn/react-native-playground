import React, { Component } from 'react';
import { View, Text } from 'react-native'

class StoreModal extends Component {
    render() { 
        return (  
            <View style={styles.storeModalContainer}>
                <Text style={styles.storeHeaderText}>STORE</Text>
            </View>
        );
    }
}

const styles = {
    storeModalContainer: {
        flex: 1,
        position: 'absolute',
        backgroundColor: 'black',
        left: 0,
        right: 0,
        top: 79,
        bottom: 0,
    },
    storeHeaderText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        padding: 10
    }
}
 
export default StoreModal;