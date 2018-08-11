import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'

class Button extends Component {

    handlePress = () => {
        this.props.addPoint()
    }

    render() {
        return (  
            <View style={styles.buttonContainerStyles}>
                <TouchableOpacity onPress={this.handlePress} style={{ flex: 1 }}>
                    <View style={styles.buttonStyles}>
                        <Text style={styles.buttonTextStyles}>CLICK ME</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = {
    buttonContainerStyles: {
        flex: 1,
        padding: 30,
    },
    buttonStyles: {
        borderWidth: 2,
        borderColor: '#222',
        flex: 1,
        justifyContent: 'center'
    },
    buttonTextStyles: {
        alignSelf: 'center',
        fontSize: 20
    }
}

 
export default Button;