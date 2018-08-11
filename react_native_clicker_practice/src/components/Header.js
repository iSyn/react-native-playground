import React from 'react';
import { View, Text } from 'react-native'

const Header = () => {
    return (  
        <View>
            <Text style={styles.headerStyles}>BASIC CLICKER GAME</Text>
        </View>
    );
}

const styles = {
    headerStyles: {
        fontSize: 30,
        padding: 5,
        textAlign: 'center',
        backgroundColor: 'blue',
        color: 'white'
    }
}
 
export default Header;
