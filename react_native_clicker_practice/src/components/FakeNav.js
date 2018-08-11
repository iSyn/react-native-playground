import React, { Component } from 'react';
import { View, Text } from 'react-native'

class FakeNav extends Component {
    render() { 
        return (  
            <View style={styles.navContainerStyles}>
                <View style={styles.tabStyle}>
                    <Text style={styles.tabTextStyle}>Tab 1</Text>
                </View>

                <View style={styles.tabStyle}>
                    <Text style={styles.tabTextStyle}>Tab 2</Text>
                </View>

                <View style={styles.tabStyle}>
                    <Text style={styles.tabTextStyle}>Tab 3</Text>
                </View>

                <View style={[styles.tabStyle, { borderRightWidth: 0 }]}>
                    <Text style={styles.tabTextStyle}>Tab 4</Text>
                </View>
            </View>
        );
    }
}

const styles = {
    navContainerStyles: {
        flexDirection: 'row'
    },
    tabStyle: {
        flex: 1,
        backgroundColor: 'pink',
        borderTopWidth: 2,
        borderRightWidth: 2,
    },
    tabTextStyle: {
        alignSelf: 'center',
        padding: 10,
        fontSize: 15,
    }
}
 
export default FakeNav;