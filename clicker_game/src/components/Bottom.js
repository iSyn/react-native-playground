import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native'

class Bottom extends Component {

    handlePress() {
        console.log('pressed')
    }

    render() { 
        return (  
            <View style={ styles.containerStyles }>

                <TouchableWithoutFeedback onPress={this.handlePress}>
                    <View style={ [styles.optionStyles, { borderRightWidth: 2 }] }>
                        <Text style={ styles.optionTextStyles }>Store</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={this.handlePress}>
                    <View style={ styles.optionStyles }>
                        <Text style={ styles.optionTextStyles }>Settings</Text>
                    </View>
                </TouchableWithoutFeedback>

            </View>
        );
    }
}

const styles = {
    containerStyles: {
        flexDirection: 'row',
        // justifyContent: 'space-around',
        borderTopWidth: 2,
        borderColor: '#222',
        marginTop: 10
    },
    optionStyles: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
    },
    optionTextStyles: {
        fontSize: 30,
        textAlign: 'center'
    }
}
 
export default Bottom;