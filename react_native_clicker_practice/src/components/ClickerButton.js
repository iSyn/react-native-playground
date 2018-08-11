import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native'

class Button extends Component {

    state = {
        buttonPress: false
    }

    handlePress = () => {
        this.setState({ buttonPress: true })
        this.props.addPoint()
    }

    render() {

        let { buttonScale} = this.state

        return (  
            <View style={styles.buttonContainerStyles}>
                <TouchableOpacity onPress={this.handlePress} style={{ flex: 1 }}>
                    <Animated.View style={ [ styles.buttonStyles ] }>
                        <Text style={styles.buttonTextStyles}>CLICK ME</Text>
                    </Animated.View>
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
        justifyContent: 'center',
    },
    buttonTextStyles: {
        alignSelf: 'center',
        fontSize: 20
    }
}

 
export default Button;